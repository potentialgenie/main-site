import { RevealTitle } from "@/components/reveal-title";
import { Rise } from "@/components/rise";
import { SubmitForm } from "@/components/submit-form";
import { TechnologyBoard } from "@/components/technology-board";
import { clientStages, faqs, industries } from "@/lib/site";

const helpAreas = [
  { title: "A website or web application", body: "Front end, back end, full stack, or a CMS the client can edit." },
  { title: "A mobile app", body: "Native iOS, native Android, or one codebase in Flutter or React Native." },
  { title: "A store", body: "Shopify, WooCommerce, or a custom catalog and checkout." },
  { title: "The product around the code", body: "UX and UI, a prototype, and AI inside the product." },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-canvas pt-16 pb-6 text-center sm:pt-20">
        <div className="container-page px-4">
          <RevealTitle as="h1" className="display mx-auto max-w-[12em] text-ink" mark="orders">
            Developers for client orders
          </RevealTitle>
          <p className="lede mx-auto mt-6 max-w-[38rem]">
            Need a website, a web app, or a mobile product? The team builds it. See what an order includes, then contact us to work together.
          </p>
          <a href="#contact" className="btn btn-primary mt-8">
            I need a build
          </a>
        </div>
      </section>

      <section id="help" className="scroll-mt-24 bg-surface py-18 sm:py-22">
        <div className="container-page">
          <RevealTitle as="h2" className="section-title">
            What we can help with
          </RevealTitle>
          <p className="lede mt-5 max-w-[62ch]">
            Potential Genie helps with web and mobile client orders. You describe the product and the industry. The developers are staffed to that order, and work starts when the scope is agreed.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpAreas.map((area, index) => (
              <Rise key={area.title} delay={index * 70} className="h-full">
                <article className="lift h-full rounded-3xl border border-ink/10 bg-white p-6">
                  <h3 className="font-semibold tracking-[-0.012em]">{area.title}</h3>
                  <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">{area.body}</p>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-line bg-sunken py-18 sm:py-22">
        <div className="container-page">
          <div className="text-center">
            <RevealTitle as="h2" className="section-title">
              How a client order works
            </RevealTitle>
            <p className="lede mx-auto mt-4 max-w-[42ch]">From the first note to a product you can run.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientStages.map((stage, index) => (
              <Rise key={stage.step} delay={index * 70} className="h-full">
                <article className="lift h-full rounded-3xl border border-ink/10 bg-white p-6">
                  <p className="font-mono text-sm font-semibold tracking-[0.14em] text-accent">{stage.step}</p>
                  <h3 className="mt-4 text-lg font-medium tracking-[-0.03em]">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stage.body}</p>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="scroll-mt-24 border-t border-line bg-canvas py-18 sm:py-22">
        <div className="container-page">
          <RevealTitle as="h2" className="section-title">
            Web and mobile specialties
          </RevealTitle>
          <p className="lede mt-5 max-w-[46ch]">Choose a category to see the specialties and the tools inside it.</p>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-ink/10">
            <TechnologyBoard />
          </div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-24 border-t border-line bg-surface py-18 sm:py-22">
        <div className="container-page">
          <RevealTitle as="h2" className="section-title">
            Where the client orders come from
          </RevealTitle>
          <p className="lede mt-5 max-w-[62ch]">
            The team takes client orders across these industries. The product changes with the field. The developers stay the same.
          </p>
          <ul className="mt-10 grid grid-cols-2 overflow-hidden rounded-[2rem] border border-ink/10 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <li
                key={industry.title}
                className="flex min-h-20 items-center border-r border-b border-ink/10 bg-white px-4 py-5 text-sm font-semibold leading-tight tracking-[-0.02em]"
              >
                {industry.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="access" className="scroll-mt-24 bg-canvas py-18 sm:py-22">
        <div className="container-page">
          <RevealTitle as="h2" className="section-title max-w-[12em]">
            We have an idea to make money together.
          </RevealTitle>
          <p className="lede mt-5 max-w-[36rem]">
            If money is tight and you want to earn, contact us. This is separate from hiring the developers.
          </p>
          <a href="/?intent=collaboration#contact" className="btn btn-primary mt-8">
            Contact us
          </a>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-line bg-canvas py-18 sm:py-22 lg:py-26">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <RevealTitle as="h2" className="section-title">
              Before you write.
            </RevealTitle>
          </div>
          <div className="border-t border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.02rem] font-semibold tracking-[-0.012em]">
                  {item.q}
                  <span className="font-mono text-sm text-ink-faint group-open:hidden" aria-hidden="true">
                    +
                  </span>
                  <span className="hidden font-mono text-sm text-ink-faint group-open:inline" aria-hidden="true">
                    –
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-5 text-[0.95rem] leading-relaxed text-ink-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-line bg-surface py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div>
            <RevealTitle as="h2" className="section-title">
              Tell us the order.
            </RevealTitle>
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
