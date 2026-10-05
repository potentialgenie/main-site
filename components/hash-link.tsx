"use client";

import { type MouseEvent, type ReactNode } from "react";

function motion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function scrollToHash(id: string) {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: motion(), block: "start" });
}

export function HashLink({
  href,
  className,
  children,
  "aria-label": ariaLabel,
}: {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const id = href.slice(1);
    event.preventDefault();
    const next = `${window.location.pathname}${window.location.search}#${id}`;
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== next) {
      history.pushState(null, "", next);
    }
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    const started = performance.now();
    const tick = () => {
      if (document.getElementById(id)) {
        scrollToHash(id);
        return;
      }
      if (performance.now() - started < 800) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  }

  return (
    <a href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
