"use client";

import { useEffect, useState } from "react";
import { technologyGroups } from "@/lib/site";

export function TechnologyBoard() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.replace("#", "");
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

  const selected = technologyGroups.find((group) => group.id === active);

  useEffect(() => {
    if (!active) return;
    document.getElementById(active)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {technologyGroups.map((group) => {
          const open = group.id === active;
          return (
            <button
              key={group.id}
              type="button"
              aria-expanded={open}
              aria-controls={group.id}
              onClick={() => choose(group.id)}
              className={`lift flex min-h-28 flex-col items-center justify-center gap-2 border-r border-b border-ink/10 px-3 py-5 text-center ${
                open ? "bg-accent text-white" : "bg-white text-ink hover:bg-accent-wash"
              }`}
            >
              <span className={`font-mono text-[0.7rem] font-semibold tracking-[0.14em] ${open ? "text-white/70" : "text-accent"}`}>
                {group.code}
              </span>
              <span className="max-w-[11rem] text-sm font-semibold leading-tight tracking-[-0.02em]">{group.name}</span>
            </button>
          );
        })}
      </div>
      {selected ? (
        <div id={selected.id} className="scroll-mt-28 border-t border-ink/10 bg-white px-5 py-8 sm:px-8">
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
