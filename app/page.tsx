import Link from "next/link";
import { clientStages, developers, faqs, industries, site, technologyGroups } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-canvas">
        <div className="dot-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative px-4 py-16 text-center sm:py-20 lg:py-28">
          <p className="eyebrow">Web and mobile development</p>
          <h1 className="display mx-auto mt-6 max-w-[12em] text-ink">Developers for the order you already have.</h1>
          <p className="lede mx-auto mt-6 max-w-[38rem]">
            Need a website, a web app, or a mobile product? The team builds it. Review the technologies, then contact us to work together.
          </p>
          <div className="mx-auto mt-8 inline-flex rounded-full border border-ink/10 bg-white p-1 shadow-subtle">
            <Link href="/help#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
              I need a build
            </Link>
            <Link href="/team" className="rounded-full px-5 py-2.5 text-sm font-medium text-ink/70">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-canvas pb-18 sm:pb-22">
        <div className="container-page text-center">
          <h2 className="section-title">Explore by technology</h2>
          <p className="lede mx-auto mt-4 max-w-[46ch]">
            The same groups Upwork uses for Web, Mobile & Software Dev. Open a category to see every specialty and the tools inside it.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 text-left">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {technologyGroups.map((group) => (
                <Link
                  key={group.id}
                  href={`/technologies#${group.id}`}
                  className="flex min-h-32 flex-col items-center justify-center gap-2 border-r border-b border-ink/10 bg-white px-4 py-6 text-center transition-colors hover:bg-sunken"
                >
                  <span className="font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-ink/45">{group.code}</span>
                  <span className="max-w-[12rem] text-sm font-semibold leading-tight tracking-[-0.02em]">{group.upwork}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sunken py-18 sm:py-22">
        <div className="container-page">
          <div className="text-center">
            <h2 className="section-title">How a client order works</h2>
            <p className="lede mx-auto mt-4 max-w-[42ch]">From the first note to a product you can run.</p>
          </div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientStages.map((stage) => (
              <li key={stage.step} className="rounded-3xl border border-ink/10 bg-white p-6">
                <p className="font-mono text-sm font-semibold tracking-[0.14em] text-ink/45">{stage.step}</p>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.03em]">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-canvas py-18 sm:py-22 lg:py-26">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">The developers</p>
            <h2 className="section-title mt-4">The people who take the work.</h2>
            <p className="lede mt-5 max-w-[58ch]">
              The team is introduced by practice. Each group is who you are hiring when a client order needs that part of a web or mobile product.
            </p>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {developers.map((developer) => (
              <article key={developer.title} className="border-t border-line-strong pt-5">
                <h3 className="text-[1.02rem] font-semibold tracking-[-0.012em]">{developer.title}</h3>
                <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-muted">{developer.body}</p>
              </article>
            ))}
          </div>
          <Link href="/team" className="mt-10 inline-flex text-[0.95rem] font-medium text-ink underline decoration-line-strong underline-offset-4 hover:text-accent hover:decoration-accent">
            Read the team in full
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-18 sm:py-22 lg:py-26">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="section-title mt-4">Where the client orders come from.</h2>
            <p className="lede mt-5">
              Upwork’s clients hire web and mobile developers across these industries. The team takes orders in the same spread.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-2.5">
            {industries.map((industry) => (
              <li key={industry.title} className="rounded-md border border-line bg-canvas px-3.5 py-2.5 text-[0.925rem] text-ink">
                {industry.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="access" className="bg-canvas py-18 sm:py-22">
        <div className="container-page">
          <p className="eyebrow">One other kind of help</p>
          <h2 className="section-title mt-4 max-w-[18ch]">Laptops and PCs for people in financial difficulty.</h2>
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

      <section id="faq" className="border-t border-line bg-canvas py-18 sm:py-22 lg:py-26">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="section-title mt-4">Before you write.</h2>
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

      <section className="border-t border-line bg-canvas py-18 sm:py-22 lg:py-26">
        <div className="container-page">
          <p className="eyebrow">Next step</p>
          <h2 className="section-title mt-4 max-w-[16ch]">Have an order for the team?</h2>
          <p className="lede mt-5 max-w-[48ch]">
            Describe the product, who uses it, and whether it is web, mobile, or both.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/help#contact" className="btn btn-primary">
              Contact us
              <Arrow />
            </Link>
            <Link href="/help" className="btn btn-secondary">
              What we can help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m12 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
