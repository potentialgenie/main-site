import { NextResponse } from "next/server";
import { requestTypes } from "@/lib/site";

const allowedRequests = new Set<string>(requestTypes.flatMap((group) => [...group.options]));

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const fields = readFields(payload);
  if (!fields) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook || !webhook.startsWith("https://hooks.slack.com/")) {
    console.error("SLACK_WEBHOOK_URL is missing or is not a Slack incoming webhook.");
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const text = [
    "New note from Tell Us The Order",
    "",
    `Name: ${escapeSlack(fields.name)}`,
    `Email: ${escapeSlack(fields.email)}`,
    `Request: ${escapeSlack(fields.request)}`,
    "",
    escapeSlack(fields.detail),
  ].join("\n");

  let response: Response;
  try {
    response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch (error) {
    console.error("Slack webhook request failed.", error);
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }

  if (!response.ok) {
    console.error("Slack webhook rejected the note.", response.status);
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function readFields(payload: unknown) {
  if (!payload || typeof payload !== "object") return null;
  const record = payload as Record<string, unknown>;
  const name = clip(record.name, 120);
  const email = clip(record.email, 200);
  const request = clip(record.request, 200);
  const detail = clip(record.detail, 4000);
  if (!name || !email || !request || !detail) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!allowedRequests.has(request)) return null;
  return { name, email, request, detail };
}

function clip(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeSlack(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
