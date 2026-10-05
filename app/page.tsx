import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { HashLink } from "@/components/hash-link";
import { OrderTrack } from "@/components/order-track";
import { RevealTitle } from "@/components/reveal-title";
import { Rise } from "@/components/rise";
import { SubmitForm } from "@/components/submit-form";
import { TechnologyBoard } from "@/components/technology-board";
import { clientStages, faqs, industries } from "@/lib/site";

const webChips = ["React", "Next.js", "Swift", "Kotlin", "Flutter"];
const storeChips = ["WooCommerce", "Magento", "Medusa"];

export default function HomePage() {
  return (
    <>
      <section className="bg-canvas pt-4 pb-2 sm:pt-6">
        <div className="container-page">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] sm:min-h-[40rem]">
            <Image
              src="/images/HERO.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1240px) 1240px, 100vw"
              className="hero-photo object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1419]/88 via-[#0f1419]/55 to-[#0f1419]/15" />
            <div className="relative flex min-h-[34rem] flex-col justify-center px-6 py-16 sm:min-h-[40rem] sm:px-12 lg:px-16">
              <RevealTitle as="h1" className="display max-w-[9em] font-bold text-white" mark="orders">
                Developers for client orders
              </RevealTitle>
              <Rise delay={180}>
                <p className="mt-6 max-w-[32rem] text-[1.15rem] leading-relaxed text-white/80">
                  Need a website, a web app, or a mobile product? We design and build it. See what an order includes, then tell us about yours.
                </p>
              </Rise>
              <Rise delay={280}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#contact" className="btn btn-primary">
                    I need a build
                  </a>
                  <a
                    href="#help"
                    className="btn btn-secondary border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10"
                  >
                    What we help with
                  </a>
                </div>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      <section id="help" className="scroll-mt-24 bg-surface py-18 sm:py-22">
        <div className="container-page">
          <RevealTitle as="h2" className="section-title">
            What we help with
          </RevealTitle>
          <Rise>
            <p className="lede mt-5 max-w-[46rem]">
              An order is a site and app, a store, or the design and AI around them. Open a card to see the tools. The steps below are how that order starts.
            </p>
          </Rise>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            <Rise className="h-full lg:col-span-3">
              <HashLink
                href="#web-mobile-development"
                className="help-sheen lift group flex h-full flex-col rounded-[2rem] border border-ink/10 bg-card p-7 sm:p-9"
              >
                <p className="font-mono text-sm font-semibold tracking-[0.14em] text-accent">01</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Web & Mobile Development</h3>
                <p className="mt-3 max-w-[40ch] text-[0.98rem] leading-relaxed text-ink-muted">
                  Sites and apps belong in one order. Front end, back end, full stack, a CMS you can edit, and iOS, Android, or one shared mobile codebase.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {webChips.map((chip, index) => (
                    <li
                      key={chip}
                      className="chip-in rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.08em] text-ink uppercase"
                      style={{ transitionDelay: `${180 + index * 70}ms` }}
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-accent">
                  See the specialties
                  <Arrow />
                </span>
              </HashLink>
            </Rise>
            <div className="grid gap-4 lg:col-span-2">
              <Rise delay={80} className="h-full">
                <HashLink href="#ecommerce-development" className="lift group flex h-full flex-col rounded-[2rem] border border-ink/10 bg-card p-6">
                  <p className="font-mono text-sm font-semibold tracking-[0.14em] text-accent">02</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">A store</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Catalog, checkout, and customer accounts. Not a brochure site.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {storeChips.map((chip, index) => (
                      <li
                        key={chip}
                        className="chip-in rounded-md border border-line bg-canvas px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.08em] text-ink uppercase"
                        style={{ transitionDelay: `${220 + index * 70}ms` }}
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    See ecommerce
                    <Arrow />
                  </span>
                </HashLink>
              </Rise>
              <Rise delay={150} className="h-full">
                <article className="lift flex h-full flex-col rounded-[2rem] border border-ink/10 bg-card p-6">
                  <p className="font-mono text-sm font-semibold tracking-[0.14em] text-accent">03</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">Design and AI</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    The product needs a shape before the code, and sometimes a model inside it. Each path opens its own specialties.
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    <HashLink href="#ui-ux-design" className="group inline-flex items-center justify-between rounded-2xl border border-line bg-canvas px-4 py-3 text-sm font-medium">
                      UI UX Design
                      <Arrow />
                    </HashLink>
                    <HashLink href="#ai-apps" className="group inline-flex items-center justify-between rounded-2xl border border-line bg-canvas px-4 py-3 text-sm font-medium">
                      AI Apps & Integration
                      <Arrow />
                    </HashLink>
                  </div>
                </article>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-line bg-sunken py-18 sm:py-22">
        <div className="container-page">
          <div className="text-center">
            <RevealTitle as="h2" className="section-title">
              How a client order works
            </RevealTitle>
            <Rise>
              <p className="lede mx-auto mt-4 max-w-[36rem]">Four steps from the note above to a product you can run.</p>
            </Rise>
          </div>
          <OrderTrack>
            <div className="relative z-10 grid gap-4 pl-4 sm:grid-cols-2 sm:pl-0 lg:grid-cols-4">
              {clientStages.map((stage, index) => (
                <Rise key={stage.step} delay={index * 90} className="h-full">
                  <article className="lift h-full rounded-3xl border border-ink/10 bg-card p-6">
                    <p
                      className="step-index inline-flex bg-card pr-2 font-mono text-sm font-semibold tracking-[0.14em] text-accent"
                      style={{ transitionDelay: `${index * 140}ms` }}
                    >
                      {stage.step}
                    </p>
                    <h3 className="mt-4 text-lg font-medium tracking-[-0.03em]">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{stage.body}</p>
                  </article>
                </Rise>
              ))}
            </div>
          </OrderTrack>
          <Rise delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <HashLink href="#technologies" className="btn btn-secondary">
                See the specialties
              </HashLink>
              <HashLink href="#contact" className="btn btn-primary">
                Tell us the order
              </HashLink>
            </div>
          </Rise>
        </div>
      </section>

      <section id="technologies" className="scroll-mt-24 border-t border-line bg-canvas py-18 sm:py-22">
        <div className="container-page">
          <RevealTitle as="h2" className="section-title">
            What we build
          </RevealTitle>
          <Rise>
            <p className="lede mt-5 max-w-[42rem]">Open a category to see the work and the tools inside it. The cards above land on this same list.</p>
          </Rise>
          <div className="mt-10">
            <TechnologyBoard />
          </div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-24 border-t border-line bg-surface py-18 sm:py-22">
        <div className="container-page">
          <RevealTitle as="h2" className="section-title">
            Industries we work in
          </RevealTitle>
          <Rise>
            <p className="lede mt-5 max-w-[62ch]">
              The product changes with the industry. The developers do not.
            </p>
          </Rise>
          <ul className="mt-10 grid grid-cols-2 overflow-hidden rounded-[2rem] border border-ink/10 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <li key={industry.title} className="border-r border-b border-ink/10 bg-card">
                <Rise delay={index * 40} className="flex min-h-20 items-center px-4 py-5 text-sm font-semibold leading-tight tracking-[-0.02em]">
                  {industry.title}
                </Rise>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="access" className="scroll-mt-24 bg-canvas py-18 sm:py-22">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <RevealTitle as="h2" className="section-title max-w-[12em]">
              We have an idea to make money together.
            </RevealTitle>
            <Rise>
              <p className="lede mt-5 max-w-[36rem]">
                If money is tight and you want to earn, contact us. This is separate from hiring us to build a product.
              </p>
            </Rise>
            <Link href="/?intent=collaboration#contact" className="btn btn-primary mt-8">
              Contact us
            </Link>
          </div>
          <Rise className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/handshake.jpg"
              alt="Two people shaking hands"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </Rise>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-line bg-canvas py-18 sm:py-22 lg:py-26">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <div>
            <RevealTitle as="h2" className="section-title">
              Before you get in touch.
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
            <Rise>
              <p className="lede mt-5">
                Send the product, who uses it, and whether it is web, mobile, or both. The form opens an email draft. Nothing is stored on this site until you send it.
              </p>
            </Rise>
          </div>
          <Suspense fallback={null}>
            <SubmitForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="arrow-nudge h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m12 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
