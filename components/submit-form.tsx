"use client";

import { FormEvent, useState } from "react";
import { requestTypes, site } from "@/lib/site";

export function SubmitForm() {
  const [sent, setSent] = useState(false);
  const [draft, setDraft] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const request = String(data.get("request") ?? "");
    const detail = String(data.get("detail") ?? "");
    const body = [`Name: ${name}`, `Email: ${email}`, `Request: ${request}`, "", detail].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(`Request from ${name}`)}&body=${encodeURIComponent(body)}`;
    setDraft(href);
    setSent(true);
    window.location.href = href;
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-surface p-7 sm:p-8">
        <p className="eyebrow">Ready to send</p>
        <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em]">Your note is in an email draft.</h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
          If your mail app did not open, use the link below. Nothing is stored on this site until that message is sent.
        </p>
        <a href={draft} className="btn btn-primary mt-6">
          Open the draft again
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-surface p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" />
        <Field label="Email" name="email" type="email" autoComplete="email" />
      </div>
      <label className="mt-5 block text-[0.85rem] font-medium text-ink">
        What do you need?
        <select
          name="request"
          required
          defaultValue=""
          className="mt-2 h-12 w-full rounded-full border border-line-strong bg-canvas px-4 text-[0.95rem] font-normal"
        >
          <option value="" disabled>
            Choose one
          </option>
          {requestTypes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="mt-5 block text-[0.85rem] font-medium text-ink">
        The detail
        <textarea
          name="detail"
          required
          rows={6}
          placeholder="The product, who uses it, the industry, and whether it is web, mobile, or both."
          className="mt-2 w-full resize-y rounded-3xl border border-line-strong bg-canvas px-4 py-3 text-[0.95rem] font-normal leading-relaxed"
        />
      </label>
      <button type="submit" className="btn btn-primary mt-6">
        Prepare email
      </button>
      <p className="mt-4 text-[0.825rem] leading-relaxed text-ink-muted">
        Prefer to write directly? {site.email}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-[0.85rem] font-medium text-ink">
      {label}
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-2 h-12 w-full rounded-full border border-line-strong bg-canvas px-4 text-[0.95rem] font-normal"
      />
    </label>
  );
}
