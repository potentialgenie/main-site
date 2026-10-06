"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight } from "@/components/icons";
import { Logo } from "@/components/logo";
import { nav, sideNav, site } from "@/lib/site";

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
    const onScroll = () => setScrolled(window.scrollY > 200);
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

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={
        scrolled
          ? "header-drop fixed inset-x-0 top-0 z-50 bg-[#1e1e1e] shadow-[0_10px_15px_rgb(25_25_25/0.1)]"
          : "absolute inset-x-0 top-0 z-50 pt-[25px]"
      }
    >
      <div className="container-page">
        <div className={scrolled ? "" : "border-b border-line pb-5"}>
          <div className={`flex items-center justify-between gap-6 ${scrolled ? "h-[61px]" : "h-[60px]"}`}>
            <div className="flex items-center">
              <Logo className="h-8 w-auto sm:h-[34px]" />
              <nav className="ml-8 hidden shrink-0 items-center gap-6 xl:ml-[49px] xl:gap-[29px] lg:flex" aria-label="Primary">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => onSectionClick(event, item.href)}
                    className="font-display py-4 text-[1rem] font-semibold whitespace-nowrap text-white transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex shrink-0 items-center">
              <Link href="/#contact" onClick={(event) => onSectionClick(event, "/#contact")} className="btn btn-primary btn-compact hidden sm:inline-flex">
                Contact Us
                <ArrowUpRight />
              </Link>
              <button
                type="button"
                className="ml-[34px] inline-flex h-[31px] w-[31px] items-center justify-center text-ink-muted transition-colors hover:text-white"
                aria-expanded={open}
                aria-controls="side-panel"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <DotsIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        id="side-panel"
        aria-label="Menu"
        inert={!open}
        className={`fixed top-0 right-0 z-[60] flex h-dvh w-[min(24rem,100%)] flex-col overflow-y-auto rounded-l-[1.75rem] bg-card px-10 py-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo className="h-8 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white"
          >
            <span className="sr-only">Close menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <nav className="mt-12 flex flex-col" aria-label="Side">
          {sideNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display border-b border-line py-4 text-[1.05rem] font-medium text-white transition-colors hover:text-accent"
              onClick={(event) => onSectionClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-10 space-y-3 text-[0.95rem]">
          <p className="font-display text-[0.85rem] font-semibold tracking-[0.3em] text-ink-muted uppercase">Contact</p>
          <a href={`mailto:${site.email}`} className="block text-white hover:text-accent">
            {site.email}
          </a>
        </div>
        <Link href="/#contact" className="btn btn-primary mt-10" onClick={(event) => onSectionClick(event, "/#contact")}>
          Start A Project
          <ArrowUpRight />
        </Link>
      </aside>
    </header>
  );
}

function DotsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[31px] w-[31px]" aria-hidden="true">
      {[4, 12, 20].flatMap((y) =>
        [4, 12, 20].map((x) =>
          x === 12 && y === 12 ? (
            <path key={`${x}-${y}`} d="M12 9.5v5M9.5 12h5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <rect key={`${x}-${y}`} x={x - 1.5} y={y - 1.5} width="3" height="3" fill="currentColor" />
          ),
        ),
      )}
    </svg>
  );
}
