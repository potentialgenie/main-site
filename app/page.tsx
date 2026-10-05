import Image from "next/image";
import { RevealTitle } from "@/components/reveal-title";
import { Rise } from "@/components/rise";
import { SubmitForm } from "@/components/submit-form";
import { TechnologyBoard } from "@/components/technology-board";
import { clientStages, faqs, industries } from "@/lib/site";

const helpAreas = [
  { title: "A website or web application", body: "Front end, back end, full stack, or a CMS you can edit." },
  { title: "A mobile app", body: "Native iOS, native Android, or one codebase in Flutter or React Native." },
  { title: "A store", body: "Shopify, WooCommerce, or a custom catalog and checkout." },
  { title: "Design and AI", body: "UX, UI, a prototype, and AI features inside the product." },
];

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
            <p className="lede mt-5 max-w-[62ch]">
              Describe the product and the industry. We assign developers to that order. Work starts when the scope is agreed.
            </p>
          </Rise>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpAreas.map((area, index) => (
              <Rise key={area.title} delay={index * 70} className="h-full">
                <article className="lift h-full rounded-3xl border border-ink/10 bg-card p-6">
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
            <Rise>
              <p className="lede mx-auto mt-4 max-w-[42ch]">From the first note to a product you can run.</p>
            </Rise>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {clientStages.map((stage, index) => (
              <Rise key={stage.step} delay={index * 70} className="h-full">
                <article className="lift h-full rounded-3xl border border-ink/10 bg-card p-6">
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
            What we build
          </RevealTitle>
          <Rise>
            <p className="lede mt-5 max-w-[46ch]">Choose a category to see the work inside it, and the tools we use.</p>
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
            <a href="/?intent=collaboration#contact" className="btn btn-primary mt-8">
              Contact us
            </a>
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
          <SubmitForm />
        </div>
      </section>
    </>
  );
}
