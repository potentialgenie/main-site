"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { technologyGroups } from "@/lib/site";

function motion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function TechnologyBoard() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const sync = () => {
      const raw = window.location.hash.replace("#", "");
      const id =
        raw === "web-development" || raw === "mobile-development"
          ? "web-mobile-development"
          : raw === "web-mobile-design"
            ? "ui-ux-design"
            : raw;
      setActive(technologyGroups.some((group) => group.id === id) ? id : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function choose(id: string) {
    const next = active === id ? "" : id;
    const url = next ? `${window.location.pathname}#${next}` : window.location.pathname;
    history.pushState(null, "", url);
    setActive(next || null);
  }

  function readIndex() {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("[data-card]");
    if (!scroller || !card) return;
    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
    const next = Math.round(scroller.scrollLeft / (card.offsetWidth + gap));
    setIndex(Math.min(technologyGroups.length - 1, Math.max(0, next)));
  }

  function step(direction: 1 | -1) {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>("[data-card]");
    if (!scroller || !card) return;
    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
    const delta = card.offsetWidth + gap;
    const max = scroller.scrollWidth - scroller.clientWidth;
    const behavior = motion();
    if (direction > 0 && scroller.scrollLeft >= max - 2) {
      scroller.scrollTo({ left: 0, behavior });
      return;
    }
    if (direction < 0 && scroller.scrollLeft <= 2) {
      scroller.scrollTo({ left: max, behavior });
      return;
    }
    scroller.scrollBy({ left: direction * delta, behavior });
  }

  const selected = technologyGroups.find((group) => group.id === active);

  useEffect(() => {
    if (!active) return;
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (scroller && card) {
      const scrollerBox = scroller.getBoundingClientRect();
      const cardBox = card.getBoundingClientRect();
      const delta = cardBox.left - scrollerBox.left - (scroller.clientWidth - cardBox.width) / 2;
      const left = Math.max(0, Math.min(scroller.scrollWidth - scroller.clientWidth, scroller.scrollLeft + delta));
      scroller.scrollTo({ left, behavior: motion() });
    }
    document.getElementById(active)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="font-mono text-[0.75rem] font-semibold tracking-[0.14em] text-ink-faint" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(technologyGroups.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous category"
            onClick={() => step(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-card text-ink"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next category"
            onClick={() => step(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-card text-ink"
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="What we build"
        tabIndex={0}
        onScroll={readIndex}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
          }
        }}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {technologyGroups.map((group) => {
          const open = group.id === active;
          return (
            <button
              key={group.id}
              type="button"
              data-card
              data-id={group.id}
              aria-expanded={open}
              aria-controls={group.id}
              aria-label={group.name}
              onClick={() => choose(group.id)}
              className={`lift relative flex aspect-[4/3] w-[82%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[1.6rem] p-5 text-left text-white sm:w-[48%] lg:w-[32%] ${
                open ? "ring-2 ring-accent ring-inset" : ""
              }`}
            >
              <Image
                src={group.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 380px, 80vw"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/85 via-[#0f1419]/20 to-transparent" />
              {open ? <span className="pointer-events-none absolute inset-0 ring-2 ring-accent ring-inset" /> : null}
              <span className="relative font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-white/80">{group.code}</span>
              <span className="relative mt-1 text-sm font-semibold leading-tight tracking-[-0.02em]">{group.name}</span>
            </button>
          );
        })}
      </div>
      {selected ? (
        <div id={selected.id} className="panel-in scroll-mt-28 mt-4 overflow-hidden rounded-[2rem] border border-ink/10 bg-card px-5 py-8 sm:px-8">
          <p className="font-mono text-[0.75rem] font-semibold tracking-[0.14em] text-accent">{selected.code}</p>
          <h2 className="mt-2 text-[1.7rem] font-medium tracking-[-0.03em]">{selected.name}</h2>
          <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-relaxed text-ink-muted">{selected.summary}</p>
          <div className="mt-6 border-t border-line">
            {selected.specialties.map((specialty) => (
              <article key={specialty.name} className="border-b border-line py-5">
                <h3 className="text-[1.02rem] font-semibold tracking-[-0.012em]">{specialty.name}</h3>
                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-muted">{specialty.body}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {specialty.stack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.08em] text-ink uppercase"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M11 4.5 6.5 9 11 13.5" : "M7 4.5 11.5 9 7 13.5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
