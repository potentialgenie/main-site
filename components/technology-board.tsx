"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Plus } from "@/components/icons";
import { technologyGroups } from "@/lib/site";

function motion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

const filters = [
  { label: "View All", ids: null },
  { label: "Development", ids: ["web-mobile-development", "desktop"] },
  { label: "UI UX Design", ids: ["ui-ux-design"] },
  { label: "Ecommerce", ids: ["ecommerce-development"] },
  { label: "AI & Automation", ids: ["ai-apps", "scripts-automation"] },
  { label: "Games", ids: ["games"] },
] as const;

export function TechnologyBoard() {
  const [active, setActive] = useState<string | null>(null);
  const [filter, setFilter] = useState(0);

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
      if (known) setFilter(0);
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

  const allowed = filters[filter].ids as readonly string[] | null;
  const visible = technologyGroups.filter((group) => !allowed || allowed.includes(group.id));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter practices">
        {filters.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={filter === index}
            onClick={() => setFilter(index)}
            className={`border px-4 py-2 text-[1rem] transition-colors ${
              filter === index ? "border-accent bg-accent font-medium text-white" : "border-line text-ink-muted hover:border-accent hover:bg-accent hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-16 grid gap-[1.875rem] md:grid-cols-2">
        {visible.map((group, index) => {
          const open = group.id === active;
          return (
            <button
              key={group.id}
              type="button"
              aria-expanded={open}
              aria-controls={group.id}
              onClick={() => choose(group.id)}
              className={`group relative block aspect-[7/5] overflow-hidden text-left ${visible.length % 2 && index === 0 ? "md:col-span-2 md:aspect-[14/5]" : ""} ${open ? "outline-2 outline-offset-4 outline-accent" : ""}`}
            >
              <Image src={group.image} alt="" fill sizes="(min-width: 768px) 620px, 100vw" className="photo-mono object-cover" />
              <span className="absolute inset-0 bg-[#131313]/25 transition-colors duration-500 group-hover:bg-transparent" />
              <span
                className={`absolute bottom-6 left-6 flex max-w-[calc(100%-3rem)] items-center gap-6 bg-canvas py-5 pr-5 pl-6 transition-all duration-500 ${
                  open ? "" : "lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100"
                }`}
              >
                <span>
                  <span className="block text-[0.9rem] text-ink-muted">Practice {group.code}</span>
                  <span className="font-display mt-1 block text-[1.35rem] leading-snug font-bold text-ink">{group.name}</span>
                </span>
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-white transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                  <Plus />
                </span>
              </span>
            </button>
          );
        })}
      </div>
      {selected ? (
        <div id={selected.id} className="panel-in mt-8 scroll-mt-32 border border-line border-t-4 border-t-accent bg-card px-6 py-9 sm:px-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow">Practice {selected.code}</p>
              <h3 className="mt-3 text-[2rem] font-bold">{selected.name}</h3>
              <p className="mt-3 max-w-[62ch] text-[0.98rem] leading-relaxed text-ink-muted">{selected.summary}</p>
            </div>
            <button
              type="button"
              onClick={() => choose(selected.id)}
              aria-label={`Close ${selected.name}`}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line-strong text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              <Plus className="h-4 w-4 rotate-45" />
            </button>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {selected.specialties.map((specialty) => (
              <article key={specialty.name} className="bg-card p-6">
                <h4 className="text-[1.15rem] font-bold">{specialty.name}</h4>
                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-muted">{specialty.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {specialty.stack.map((tool) => (
                    <li key={tool} className="bg-chip px-3 py-1.5 text-[0.8rem] text-ink">
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
