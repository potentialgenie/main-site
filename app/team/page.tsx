import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { developers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description: "The web and mobile developers at Potential Genie, introduced by the work they take on.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The developers, by the work they do."
        lede="Potential Genie is a web and mobile development team. This page introduces them by practice, which is how a client order gets staffed. Individual names are added when a person is on your order, not as a stock portrait."
      />
      <section className="bg-surface py-18 sm:py-22">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          {developers.map((developer, index) => (
            <article key={developer.title} className="rounded-xl border border-line bg-canvas p-7">
              <p className="font-mono text-[0.75rem] font-semibold tracking-[0.14em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{developer.title}</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{developer.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-line bg-canvas py-16">
        <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
            A client order names the practice it needs. That is who gets staffed.
          </p>
          <Link href="/help#contact" className="btn btn-primary shrink-0">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
