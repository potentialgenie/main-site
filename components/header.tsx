"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav } from "@/lib/site";

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  const next = `${window.location.pathname}${window.location.search}#${id}`;
  if (window.location.hash !== `#${id}`) history.pushState(null, "", next);
}

export function Header() {
  const pathname = usePathname();
  const pending = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function onSectionClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const id = href.split("#")[1];
    if (!id || window.location.pathname !== "/" || !document.getElementById(id)) return;
    event.preventDefault();
    if (open) {
      pending.current = id;
      setOpen(false);
      return;
    }
    scrollToSection(id);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open || !pending.current) return;
    const id = pending.current;
    pending.current = null;
    scrollToSection(id);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas/95 backdrop-blur-md transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-[4.25rem] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => onSectionClick(event, item.href)}
              className="nav-link rounded-md px-3 py-2 text-[0.9rem] text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contact" onClick={(event) => onSectionClick(event, "/#contact")} className="btn btn-primary btn-compact hidden sm:inline-flex">
            Contact us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-strong bg-surface xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1" aria-hidden="true">
              <span className={`h-px bg-ink transition ${open ? "translate-y-[2.5px] rotate-45" : ""}`} />
              <span className={`h-px bg-ink transition ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="menu-in border-t border-line bg-canvas xl:hidden" aria-label="Mobile">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-[0.98rem] text-ink last:border-b-0"
                onClick={(event) => onSectionClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <Link href="/#contact" className="btn btn-primary mt-2 mb-3" onClick={(event) => onSectionClick(event, "/#contact")}>
              Contact us
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
