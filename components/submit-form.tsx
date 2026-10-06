"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { collaborationRequest, requestTypes, site } from "@/lib/site";

export function SubmitForm() {
  const [sent, setSent] = useState(false);
  const [draft, setDraft] = useState("");
  const [request, setRequest] = useState("");
  const [requestError, setRequestError] = useState(false);
  const params = useSearchParams();

  useEffect(() => {
    if (params.get("intent") === "collaboration") setRequest(collaborationRequest);
  }, [params]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!request) {
      setRequestError(true);
      return;
    }
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const detail = String(data.get("detail") ?? "");
    const body = [`Name: ${name}`, `Email: ${email}`, `Request: ${request}`, "", detail].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(`Request from ${name}`)}&body=${encodeURIComponent(body)}`;
    setDraft(href);
    setSent(true);
    window.location.href = href;
  }

  if (sent) {
    return <DraftReady draft={draft} />;
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[1.5rem] border border-line bg-card p-7 shadow-raised sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" placeholder="Your name" />
        <Field label="Email" name="email" type="email" autoComplete="email" placeholder="you@company.com" />
      </div>
      <RequestMenu
        value={request}
        invalid={requestError}
        onChange={(next) => {
          setRequest(next);
          setRequestError(false);
        }}
      />
      <label className="mt-5 block text-[0.85rem] font-medium text-ink">
        Details
        <textarea
          name="detail"
          required
          rows={6}
          placeholder="What the product is, who uses it, and the industry."
          className="mt-2 w-full resize-y rounded-xl border border-line-strong bg-canvas px-4 py-3 outline-none transition-colors focus:border-accent text-[0.95rem] font-normal leading-relaxed"
        />
      </label>
      <button type="submit" className="btn btn-primary mt-6">
        Send
      </button>
      <p className="mt-4 text-[0.825rem] leading-relaxed text-ink-muted">
        Or email us directly at {site.email}
      </p>
    </form>
  );
}

function DraftReady({ draft }: { draft: string }) {
  return (
    <div className="rounded-[1.5rem] border border-line bg-card p-7 shadow-raised sm:p-10">
      <h3 className="text-xl font-semibold tracking-[-0.02em]">Your note is in an email draft.</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
        If your mail app did not open, use the link below. Nothing is stored on this site until you send the message.
      </p>
      <a href={draft} className="btn btn-primary mt-6">
        Open the draft again
      </a>
    </div>
  );
}

function RequestMenu({
  value,
  invalid,
  onChange,
}: {
  value: string;
  invalid: boolean;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const listId = useId();
  const errorId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="mt-5">
      <p id={labelId} className="text-[0.85rem] font-medium text-ink">
        What do you need?
      </p>
      <div ref={rootRef} className="relative mt-2">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          aria-describedby={invalid ? errorId : undefined}
          onClick={() => setOpen((current) => !current)}
          className={`flex h-12 w-full items-center justify-between gap-3 rounded-xl border bg-canvas px-4 text-left text-[0.95rem] font-normal ${
            invalid ? "border-accent" : "border-line-strong"
          }`}
        >
          <span className={`truncate ${value ? "text-ink" : "text-ink-muted"}`}>{value || "Choose one"}</span>
          <Chevron open={open} />
        </button>
        {invalid ? (
          <p id={errorId} className="mt-2 px-4 text-[0.8rem] text-accent">
            Choose what you need.
          </p>
        ) : null}
        {open ? (
          <div
            id={listId}
            role="listbox"
            aria-labelledby={labelId}
            className="absolute bottom-full left-0 z-20 mb-2 max-h-80 w-full overflow-auto rounded-2xl border border-line bg-card p-2 shadow-raised"
          >
            {requestTypes.map((group) => (
              <div key={group.label} className="py-1">
                <p className="px-3 pt-2 pb-1 font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-accent uppercase">
                  {group.label}
                </p>
                {group.options.map((item) => {
                  const selected = value === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        onChange(item);
                        setOpen(false);
                      }}
                      className={`block w-full rounded-xl px-3 py-2.5 text-left text-[0.925rem] leading-snug ${
                        selected ? "bg-accent text-white" : "text-ink hover:bg-accent-wash"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 text-ink-muted transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-[0.85rem] font-medium text-ink">
      {label}
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-line-strong bg-canvas px-4 outline-none transition-colors focus:border-accent text-[0.95rem] font-normal placeholder:text-ink-faint"
      />
    </label>
  );
}
