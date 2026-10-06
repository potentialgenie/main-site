"use client";

import { Children, useRef, useState, type ReactNode } from "react";

function motion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

// Scroll-snap slider with the round pagination dots used across the page.
export function Carousel({ label, itemClassName, children }: { label: string; itemClassName: string; children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);

  function step() {
    const scroller = scrollerRef.current;
    const card = scroller?.firstElementChild as HTMLElement | null;
    if (!scroller || !card) return 0;
    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
    return card.offsetWidth + gap;
  }

  function readIndex() {
    const scroller = scrollerRef.current;
    const size = step();
    if (!scroller || !size) return;
    const atEnd = scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth - 2;
    setIndex(atEnd ? items.length - 1 : Math.round(scroller.scrollLeft / size));
  }

  function goTo(next: number) {
    scrollerRef.current?.scrollTo({ left: next * step(), behavior: motion() });
    setIndex(next);
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onScroll={readIndex}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(Math.min(items.length - 1, index + 1));
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(Math.max(0, index - 1));
          }
        }}
        className="flex snap-x snap-mandatory gap-[1.875rem] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, position) => (
          <div key={position} className={`shrink-0 snap-start ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-2.5">
        {items.map((_, dot) => (
          <button
            key={dot}
            type="button"
            aria-label={`Show item ${dot + 1}`}
            aria-current={dot === index}
            onClick={() => goTo(dot)}
            className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-line-strong"
          >
            <span className={`h-1.5 w-1.5 rounded-full transition-colors ${dot === index ? "bg-accent" : "bg-transparent"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
