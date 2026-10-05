import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { technologyGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technologies",
  description: "Potential Genie’s web and mobile work, structured with Upwork’s Web, Mobile & Software Dev categories and specialties.",
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="Upwork’s Web, Mobile & Software Dev category, in full."
        lede="Clients hire this team inside the same category tree Upwork uses: subcategory, then specialty, then the technologies that specialty is built with. Twelve subcategories. Every specialty is listed."
      />
      <section className="bg-canvas pb-8">
        <div className="container-page text-center">
          <div className="mt-4 overflow-hidden rounded-3xl border border-ink/10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {technologyGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="flex min-h-28 flex-col items-center justify-center gap-2 border-r border-b border-ink/10 bg-white px-3 py-5 text-center hover:bg-sunken"
                >
                  <span className="font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-ink/45">{group.code}</span>
                  <span className="max-w-[11rem] text-sm font-semibold leading-tight tracking-[-0.02em]">{group.upwork}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      {technologyGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 border-t border-line py-16 sm:py-20 ${index % 2 === 0 ? "bg-canvas" : "bg-surface"}`}
        >
          <div className="container-page">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
              <div>
                <p className="font-mono text-[0.75rem] font-semibold tracking-[0.14em] text-accent">{group.code}</p>
                <h2 className="mt-3 text-[1.7rem] font-semibold tracking-[-0.03em]">{group.upwork}</h2>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-muted">{group.summary}</p>
              </div>
              <div className="border-t border-line">
                {group.specialties.map((specialty) => (
                  <article key={specialty.name} className="border-b border-line py-5">
                    <h3 className="text-[1.02rem] font-semibold tracking-[-0.012em]">{specialty.name}</h3>
                    <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-muted">{specialty.body}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {specialty.stack.map((tool) => (
                        <li key={tool} className="rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.08em] text-ink uppercase">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="border-t border-line bg-canvas py-16">
        <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
            If your order sits in one of these specialties, tell the team which one and what the first release has to do.
          </p>
          <Link href="/help#contact" className="btn btn-primary shrink-0">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
