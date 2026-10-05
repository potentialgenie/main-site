import Link from "next/link";
import { site } from "@/lib/site";

export function Mark({ className = "h-7 w-7", tone = "ink" }: { className?: string; tone?: "ink" | "white" }) {
  const onDark = tone === "white";
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" className={`${className} shrink-0 ${onDark ? "text-white" : "text-ink"}`}>
      <rect width="28" height="28" rx="7" fill={onDark ? "#ffffff" : "currentColor"} />
      <path
        d="M7 18.5c3.2-1.2 5.2-4.6 6.2-8.2"
        fill="none"
        stroke={onDark ? "#14161a" : "var(--color-canvas)"}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M13.2 10.3c2.4 1.6 5.2 2.2 8 1.6"
        fill="none"
        stroke={onDark ? "#14161a" : "var(--color-canvas)"}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="7" cy="18.5" r="1.9" fill="#9aa2f0" />
      <circle cx="21.2" cy="11.9" r="1.9" fill="#9aa2f0" />
    </svg>
  );
}

export function Logo({ tone = "ink" }: { tone?: "ink" | "white" }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 rounded-md">
      <Mark tone={tone} />
      <span
        className={`text-[1.15rem] font-semibold tracking-[-0.04em] whitespace-nowrap ${
          tone === "white" ? "text-white" : "text-ink"
        }`}
      >
        {site.name}
      </span>
    </Link>
  );
}
