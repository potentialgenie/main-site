"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "@/components/carousel";
import { Plus } from "@/components/icons";
import { technologyGroups } from "@/lib/site";

function motion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function TechnologyBoard() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const raw = window.location.hash.replace("#", "");
      const id =
        raw === "web-development" || raw === "mobile-development"
          ? "web-mobile-development"
          : raw === "web-mobile-design"
            ? "ui-ux-design"
            : raw;
      const known = technologyGroups.some((group) => group.id === id);
      setActive(known ? id : null);
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

  const selected = technologyGroups.find((group) => group.id === active);

  useEffect(() => {
    if (!active) return;
    document.getElementById(active)?.scrollIntoView({ block: "nearest", behavior: motion() });
  }, [active]);

  return (
    <div>
      <Carousel label="What we build" itemClassName="w-[88%] lg:w-[calc((100%-3.75rem)/3)]">
        {technologyGroups.map((group) => {
          const open = group.id === active;
          return (
            <button
              key={group.id}
              type="button"
              aria-expanded={open}
              aria-controls={group.id}
              onClick={() => choose(group.id)}
              className={`group relative block w-full overflow-hidden rounded-[1.75rem] text-left ${open ? "outline-2 outline-offset-4 outline-accent" : ""}`}
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image src={group.image} alt="" fill sizes="(min-width: 1024px) 33vw, 88vw" className="photo-mono object-cover" />
              <span aria-hidden="true" className="absolute inset-0 bg-[#131313]/45 transition-colors duration-500 group-hover:bg-[#131313]/20" />
              <span
                className={`absolute bottom-6 left-6 flex max-w-[calc(100%-3rem)] items-center gap-6 rounded-2xl bg-canvas py-5 pr-5 pl-6 transition-all duration-500 ${
                  open ? "" : "lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100"
                }`}
              >
                <span className="font-display block text-[1.35rem] leading-snug font-bold text-ink">{group.name}</span>
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                  <Plus />
                </span>
              </span>
            </button>
          );
        })}
      </Carousel>
      {selected ? (
        <div id={selected.id} className="panel-in mt-8 scroll-mt-32 overflow-hidden rounded-[1.5rem] border border-line border-t-4 border-t-accent bg-card px-6 py-9 sm:px-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-[2rem] font-bold">{selected.name}</h3>
              <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-relaxed text-ink-muted">{selected.summary}</p>
            </div>
            <button
              type="button"
              onClick={() => choose(selected.id)}
              aria-label={`Close ${selected.name}`}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <Plus className="h-4 w-4 rotate-45" />
            </button>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {selected.specialties.map((specialty) => (
              <article key={specialty.name} className="bg-card p-6">
                <h4 className="text-[1.15rem] font-bold">{specialty.name}</h4>
                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-muted">{specialty.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {specialty.stack.map((tool) => (
                    <li key={tool} className="rounded-full bg-chip px-3 py-1.5 text-[0.8rem] text-ink">
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
