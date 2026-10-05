"use client";

import { type ReactNode } from "react";
import { Carousel } from "@/components/carousel";
import { HashLink } from "@/components/hash-link";
import { ArrowUpRight, Ribbon } from "@/components/icons";
import { technologyGroups } from "@/lib/site";

type GroupId = (typeof technologyGroups)[number]["id"];

const blurbs: Record<GroupId, string> = {
  "web-mobile-development": "Front end, back end, a CMS you can edit, and iOS or Android apps in one order.",
  "ui-ux-design": "Flows, interfaces, and clickable prototypes, so the product has a shape before the code.",
  "ecommerce-development": "Catalog, checkout, and accounts on WooCommerce, Magento, Medusa, or custom.",
  "ai-apps": "Assistants and model features inside your product, built on your own documents.",
  "scripts-automation": "Imports, reports, and repetitive steps handled by Make, n8n, Zapier, or a script.",
  desktop: "Windows, macOS, or Linux tools when the work does not belong in a browser.",
  games: "A game built as its own product with Unity, Unreal Engine, or Godot.",
};

export function ServiceSlider() {
  return (
    <Carousel label="Our services" itemClassName="w-[86%] sm:w-[calc((100%-1.875rem)/2)] lg:w-[calc((100%-5.625rem)/4)]">
      {technologyGroups.map((group) => (
        <article
          key={group.id}
          className="group relative flex h-full flex-col overflow-hidden border border-line bg-canvas px-8 pt-12 pb-12 transition-colors duration-300 hover:border-accent"
        >
          <div className="relative h-28">
            <span aria-hidden="true" className="dot-grid absolute top-[-0.5rem] left-14 h-20 w-24 text-ink/15" />
            <ServiceIcon id={group.id} />
          </div>
          <h3 className="mt-10 text-[1.75rem] leading-tight font-bold">{group.name.replace(" Development", "")}</h3>
          <p className="mt-5 text-[1rem] leading-relaxed text-ink-muted">{blurbs[group.id]}</p>
          <div className="relative z-10 mt-auto pt-11">
            <HashLink href={`#${group.id}`} className="btn btn-chip">
              Read More
              <ArrowUpRight />
            </HashLink>
          </div>
          <Ribbon />
        </article>
      ))}
    </Carousel>
  );
}

function ServiceIcon({ id }: { id: GroupId }) {
  const shapes: Record<GroupId, ReactNode> = {
    "web-mobile-development": (
      <>
        <rect x="4" y="10" width="62" height="44" />
        <path d="M4 20h62M14 15h2M20 15h2M26 15h2" />
        <path d="m28 31-7 6 7 6M44 31l7 6-7 6M39 28l-6 18" />
        <rect x="70" y="24" width="22" height="40" />
        <path d="M78 58h6" />
      </>
    ),
    "ui-ux-design": (
      <>
        <path d="M48 6 86 76H10Z" />
        <path d="M48 26 74 76" />
        <path d="M30 42h36" />
        <circle cx="48" cy="6" r="3" />
      </>
    ),
    "ecommerce-development": (
      <>
        <path d="M30 18h48l-4 30H34Z" />
        <path d="M8 8h14l12 52h44" />
        <circle cx="40" cy="72" r="5" />
        <circle cx="70" cy="72" r="5" />
        <path d="M44 28v10M56 28v10M66 28v10" />
      </>
    ),
    "ai-apps": (
      <>
        <rect x="24" y="22" width="44" height="44" />
        <rect x="36" y="34" width="20" height="20" />
        <path d="M34 8v14M46 8v14M58 8v14M34 66v14M46 66v14M58 66v14M10 32h14M10 44h14M10 56h14M68 32h14M68 44h14M68 56h14" />
      </>
    ),
    "scripts-automation": (
      <>
        <circle cx="46" cy="40" r="14" />
        <path d="M46 14v8M46 58v8M20 40h8M64 40h8M27.6 21.6l5.7 5.7M58.7 52.7l5.7 5.7M27.6 58.4l5.7-5.7M58.7 27.3l5.7-5.7" />
        <path d="M6 76h20l8-10M86 76H66l-8-10" />
      </>
    ),
    desktop: (
      <>
        <rect x="8" y="8" width="76" height="50" />
        <path d="M8 48h76M36 58l-4 14M56 58l4 14M26 72h40" />
        <rect x="18" y="18" width="24" height="20" />
        <path d="M50 20h24M50 28h18M50 36h22" />
      </>
    ),
    games: (
      <>
        <path d="M24 24h44c10 0 16 10 18 22s2 24-8 24c-8 0-10-12-18-12H32c-8 0-10 12-18 12-10 0-10-12-8-24s8-22 18-22Z" />
        <path d="M26 36v14M19 43h14" />
        <circle cx="62" cy="38" r="3" />
        <circle cx="70" cy="47" r="3" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 92 84" className="relative h-24 w-auto text-ink/70" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {shapes[id]}
    </svg>
  );
}
