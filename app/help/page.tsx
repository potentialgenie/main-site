import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SubmitForm } from "@/components/submit-form";
import { clientStages, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we can help",
  description: "What Potential Genie’s developers can build for a client, and how to contact the team.",
};

const helpAreas = [
  { title: "A website or web application", body: "Front end, back end, full stack, or a CMS the client can edit." },
  { title: "A mobile app", body: "Native iOS, native Android, or one codebase in Flutter or React Native." },
  { title: "A store", body: "Shopify, WooCommerce, or a custom catalog and checkout." },
  { title: "The product around the code", body: "UX and UI, a prototype, AI inside the product, and testing of the release." },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="What we can help"
        title="Clients read the site, then ask the team to build."
        lede="Potential Genie helps with web and mobile client orders. You describe the product and the industry. The developers are staffed to that order, and work starts when the scope is agreed."
      />
      <section className="bg-surface py-18 sm:py-22">
        <div className="container-page">
          <h2 className="section-title max-w-[16ch]">What you can hire the team to do.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {helpAreas.map((area) => (
              <article key={area.title} className="border-t border-line-strong pt-5">
                <h3 className="font-semibold tracking-[-0.012em]">{area.title}</h3>
                <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-canvas py-18 sm:py-22">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Industries</p>
            <h2 className="section-title mt-4">The industries those orders come from.</h2>
            <p className="lede mt-5">
              These are the industries where clients on Upwork hire web and mobile developers. A client order names its industry so the product fits the people who use it.
            </p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.title} className="border-t border-line-strong pt-5">
                <h3 className="font-semibold tracking-[-0.012em]">{industry.title}</h3>
                <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">{industry.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-surface py-18 sm:py-22">
        <div className="container-page">
          <h2 className="section-title">How an order runs.</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {clientStages.map((stage) => (
              <li key={stage.step} className="border-t border-line-strong pt-5">
                <p className="font-mono text-[0.75rem] font-semibold tracking-[0.14em] text-accent">{stage.step}</p>
                <h3 className="mt-3 font-semibold tracking-[-0.012em]">{stage.title}</h3>
                <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="contact" className="scroll-mt-24 border-t border-line bg-canvas py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-4">Tell us the order.</h2>
            <p className="lede mt-5">
              Reviewing the site is the start. Send the product, who uses it, and whether it is web, mobile, or both. The form opens an email draft. Nothing is stored here until you send it.
            </p>
          </div>
          <SubmitForm />
        </div>
      </section>
    </>
  );
}
