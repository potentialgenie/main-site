import { PageHero } from "@/components/page-hero";

export function LegalPage({
  title,
  lede,
  sections,
}: {
  title: string;
  lede: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero title={title} lede={lede} />
      <section className="bg-surface py-16 sm:py-20">
        <div className="container-page max-w-none">
          <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-xl font-semibold tracking-[-0.02em]">{section.heading}</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-muted">{section.body}</p>
            </article>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
