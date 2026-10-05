import Link from "next/link";
import { SubmitForm } from "@/components/submit-form";
import { clientStages, developers, faqs, industries, site, technologyGroups } from "@/lib/site";

const helpAreas = [
  { title: "A website or web application", body: "Front end, back end, full stack, or a CMS the client can edit." },
  { title: "A mobile app", body: "Native iOS, native Android, or one codebase in Flutter or React Native." },
  { title: "A store", body: "Shopify, WooCommerce, or a custom catalog and checkout." },
  { title: "The product around the code", body: "UX and UI, a prototype, AI inside the product, and testing of the release." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-canvas">
        <div className="dot-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative px-4 py-16 text-center sm:py-20 lg:py-28">
          <h1 className="display mx-auto max-w-[12em] text-ink">Developers for client orders</h1>
          <p className="lede mx-auto mt-6 max-w-[38rem]">
            Need a website, a web app, or a mobile product? The team builds it. Review the technologies, then contact us to work together.
          </p>
          <div className="mx-auto mt-8 inline-flex rounded-full border border-ink/10 bg-white p-1 shadow-subtle">
            <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
              I need a build
            </a>
            <a href="#team" className="rounded-full px-5 py-2.5 text-sm font-medium text-ink/70">
              Meet the team
            </a>
          </div>
        </div>
      </section>

      <section id="help" className="scroll-mt-24 bg-surface py-18 sm:py-22">
        <div className="container-page">
          <h2 className="section-title max-w-[16ch]">What we can help with</h2>
          <p className="lede mt-5 max-w-[62ch]">
            Potential Genie helps with web and mobile client orders. You describe the product and the industry. The developers are staffed to that order, and work starts when the scope is agreed.
          </p>
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

      <section id="technologies" className="scroll-mt-24 bg-canvas py-18 sm:py-22">
        <div className="container-page text-center">
          <h2 className="section-title">Web and mobile specialties</h2>
          <p className="lede mx-auto mt-4 max-w-[46ch]">
            Every specialty is listed, with the tools the team uses to build it.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 text-left">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {technologyGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="flex min-h-32 flex-col items-center justify-center gap-2 border-r border-b border-ink/10 bg-white px-4 py-6 text-center transition-colors hover:bg-sunken"
                >
                  <span className="font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-ink/45">{group.code}</span>
                  <span className="max-w-[12rem] text-sm font-semibold leading-tight tracking-[-0.02em]">{group.name}</span>
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
                <h2 className="mt-3 text-[1.7rem] font-medium tracking-[-0.03em]">{group.name}</h2>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-muted">{group.summary}</p>
              </div>
              <div className="border-t border-line">
                {group.specialties.map((specialty) => (
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
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-sunken py-18 sm:py-22">
        <div className="container-page">
          <div className="text-center">
            <h2 className="section-title">How a client order works</h2>
            <p className="lede mx-auto mt-4 max-w-[42ch]">From the first note to a product you can run.</p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientStages.map((stage) => (
              <li key={stage.step} className="rounded-3xl border border-ink/10 bg-white p-6">
                <p className="font-mono text-sm font-semibold tracking-[0.14em] text-ink/45">{stage.step}</p>
                <h3 className="mt-4 text-lg font-medium tracking-[-0.03em]">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-t border-line bg-canvas py-18 sm:py-22 lg:py-26">
        <div className="container-page">
          <h2 className="section-title">Meet the developers</h2>
          <p className="lede mt-5 max-w-[62ch]">
            Potential Genie is a web and mobile development team. They are introduced by practice, which is how a client order gets staffed. Individual names are added when a person is on your order, not as a stock portrait.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {developers.map((developer, index) => (
              <article key={developer.title} className="rounded-xl border border-line bg-canvas p-7">
                <p className="font-mono text-[0.75rem] font-semibold tracking-[0.14em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{developer.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{developer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-24 border-t border-line bg-surface py-18 sm:py-22">
        <div className="container-page">
          <h2 className="section-title">Where the client orders come from</h2>
          <p className="lede mt-5 max-w-[62ch]">
            The team takes client orders across these industries. The product changes with the field. The developers stay the same.
          </p>
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

      <section id="access" className="scroll-mt-24 bg-canvas py-18 sm:py-22">
        <div className="container-page">
          <h2 className="section-title max-w-[18ch]">Laptops and PCs for people in financial difficulty.</h2>
          <p className="lede mt-5 max-w-[68ch]">
            Some people need a working computer for daily life and cannot buy one. Potential Genie can rent a laptop or a desktop PC. The arrangement is a share of profit or revenue, agreed before the machine goes out. It is not a client order, and it is not free equipment.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-ink/10 bg-sunken p-6">
              <h3 className="font-semibold tracking-[-0.012em]">Who it is for</h3>
              <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">
                People facing financial difficulty in daily life: work, study, applications, a job search, or a small activity that needs a computer. Buying the machine outright is not possible right now.
              </p>
            </article>
            <article className="rounded-3xl border border-ink/10 bg-sunken p-6">
              <h3 className="font-semibold tracking-[-0.012em]">What is rented</h3>
              <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">
                A working laptop or desktop PC, in an agreed condition. It is a rental. It is not a gift, not a cash loan, and not a reason to hand over passwords or bank access.
              </p>
            </article>
            <article className="rounded-3xl border border-ink/10 bg-sunken p-6">
              <h3 className="font-semibold tracking-[-0.012em]">How the share works</h3>
              <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">
                Instead of the full price up front, both sides share the profit or revenue the computer helps produce. There is no single percentage on this site. The split is written for that person.
              </p>
            </article>
          </div>
          <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em]">What is written down first</h3>
            <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-ink-muted">
              <li>Which laptop or PC, and what it will be used for.</li>
              <li>Which profit or revenue is shared, the split, and for how long.</li>
              <li>Whether the machine is returned or can be purchased later.</li>
              <li>That the share does not change after handover unless both sides agree.</li>
            </ul>
          </div>
          <p className="mt-8 text-[0.95rem] leading-relaxed text-ink-muted">
            To ask about a computer, write to{" "}
            <a href={`mailto:${site.email}`} className="text-ink underline decoration-line-strong underline-offset-4 hover:text-accent hover:decoration-accent">
              {site.email}
            </a>
            . Hiring the developers is separate, on the contact form.
          </p>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-line bg-canvas py-18 sm:py-22 lg:py-26">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <h2 className="section-title">Before you write.</h2>
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

      <section id="contact" className="scroll-mt-24 border-t border-line bg-canvas py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div>
            <h2 className="section-title">Tell us the order.</h2>
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
