import Image from "next/image";
import { Suspense, type ReactNode } from "react";
import { HashLink } from "@/components/hash-link";
import { ArrowUpRight, Burst, Plus } from "@/components/icons";
import { Mark } from "@/components/logo";
import { RevealTitle } from "@/components/reveal-title";
import { Rise } from "@/components/rise";
import { Carousel } from "@/components/carousel";
import { SubmitForm } from "@/components/submit-form";
import { TechnologyBoard } from "@/components/technology-board";
import { clientStages, faqs, industries, promises, site, specialists, technologyGroups } from "@/lib/site";

const marquee = ["Web Apps", "Mobile Apps", "UI UX Design", "Ecommerce", "AI Integration", "Automation", "Desktop"];

const orderPoints = [
  { label: "One team", body: "Design, front end, back end, and mobile stay on the same order." },
  { label: "Scope first", body: "What will be built, and how it is paid, is written down before code." },
  { label: "Web and mobile", body: "Websites, apps, stores, and AI features, built as a product you can run." },
  { label: "A note is enough", body: "Tell us the product and who uses it. A finished specification is not required." },
];

const stageMeta = [
  { label: "Discover", image: "/images/handshake.jpg" },
  { label: "Design", image: "/images/design.jpg" },
  { label: "Build", image: "/images/mobile-image.webp" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#131313] pt-28 pb-16 text-white">
        <Image src="/images/hero-image.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(19_19_19/0.92)_0%,rgb(19_19_19/0.84)_45%,rgb(19_19_19/0.9)_100%)] lg:bg-[linear-gradient(90deg,rgb(19_19_19/0.94)_0%,rgb(19_19_19/0.84)_28%,rgb(19_19_19/0.66)_58%,rgb(19_19_19/0.56)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/20 [clip-path:polygon(40.5%_0,57.5%_0,100%_58%,100%_88%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/25 [clip-path:polygon(57.5%_0,69%_0,94%_60%,94%_100%,86%_100%,100%_88%,100%_58%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/15 [clip-path:polygon(69%_0,77%_0,100%_31%,100%_47%)]" />
        <div className="container-page relative">
          <RevealTitle as="h1" className="display max-w-[9.6em] text-white" mark="real">
            We make your ideas real.
          </RevealTitle>
          <Rise delay={160}>
            <p className="relative mt-6 max-w-[40rem] text-[1rem] leading-[1.625rem] text-ink-muted">
              Make It Real designs and builds websites, web apps, mobile products, stores, and AI features. One team takes your order from the first note to launch.
            </p>
          </Rise>
          <Rise delay={260}>
            <HashLink href="#contact" className="btn btn-primary mt-8 h-[62px]">
              Start a project
              <ArrowUpRight />
            </HashLink>
          </Rise>
        </div>
      </section>

      {/* How an order works, in brief */}
      <section aria-label="How an order works" className="bg-canvas py-20 lg:py-24">
        <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {orderPoints.map((item, index) => (
            <Rise key={item.label} delay={index * 90}>
              <div className="flex items-center gap-4">
                <span className="font-display relative inline-flex h-12 w-12 shrink-0 items-center justify-center text-[1.2rem] font-semibold">
                  <span aria-hidden="true" className="absolute inset-0 -rotate-45 rounded-full border-2 border-line border-t-accent border-l-accent" />
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[1.35rem] leading-tight font-bold">{item.label}</h2>
              </div>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-muted">{item.body}</p>
            </Rise>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative scroll-mt-24 overflow-hidden bg-raised py-30">
        <Scribbles />
        <div aria-hidden="true" className="absolute -top-40 right-[-10%] h-[44rem] w-[44rem] rounded-full border-[7rem] border-ink/[0.025]" />
        <div className="container-page relative grid items-center gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)] lg:gap-16">
          <Rise className="relative aspect-[550/610] w-full max-w-[46rem] lg:max-w-none">
            <div aria-hidden="true" className="absolute right-[2%] bottom-[18%] h-[46%] w-[46%] rounded-full bg-accent/20" />
            <div className="absolute top-0 left-0 h-[72%] w-[75.6%] overflow-hidden rounded-[1.5rem]">
              <Image src="/images/about-1.webp" alt="The team working together around a table" fill sizes="(min-width: 1024px) 560px, 80vw" className="object-cover object-[45%_center]" />
              <span aria-hidden="true" className="absolute inset-0 bg-[#131313]/30" />
            </div>
            <div aria-hidden="true" className="dot-grid absolute top-[16%] -right-[2%] h-20 w-32 text-ink/20" />
            <div className="absolute right-0 bottom-0 h-[72%] w-[60%] overflow-hidden rounded-[1.5rem]">
              <Image src="/images/about-2.webp" alt="The team celebrating with a high five" fill sizes="(min-width: 1024px) 440px, 70vw" className="object-cover object-[35%_center]" />
              <span aria-hidden="true" className="absolute inset-0 bg-[#131313]/30" />
            </div>
            <div className="absolute bottom-0 left-0 flex h-[28%] w-[40%] items-center justify-center bg-raised">
              <Burst className="h-[78%] w-auto text-accent" />
            </div>
          </Rise>
          <div>
            <Eyebrow>About Make It Real</Eyebrow>
            <RevealTitle as="h2" className="title-md mt-6">
              We Turn Your Ideas Into Working Software
            </RevealTitle>
            <Rise>
              <p className="font-display mt-8 border-b border-line pb-6 text-[1.125rem] leading-relaxed font-semibold text-ink-muted">
                A web and mobile development team. Clients hire us to design and build products across {industries.length} industries.
              </p>
              <p className="mt-6 text-[1rem] leading-relaxed text-ink-muted">
                We take an order from the first note to a product you can run: the screens, the code behind them, and the notes you need to keep it going after launch.
              </p>
            </Rise>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <AboutPoint number="01" title="One Team For The Build">
                Design, front end, back end, and mobile in the same order.
              </AboutPoint>
              <AboutPoint number="02" title="Scope Before Code">
                We agree what will be built and how it is paid before work starts.
              </AboutPoint>
            </div>
            <Rise delay={150}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <HashLink href="#process" className="btn btn-outline">
                  How We Work
                  <ArrowUpRight />
                </HashLink>
                <HashLink href="#contact" className="btn btn-primary">
                  Start a project
                  <ArrowUpRight />
                </HashLink>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="technologies" className="scroll-mt-24 bg-canvas py-28">
        <div className="container-page">
          <CenterHead title="What We Build">
            {technologyGroups.length} practices, one team. Open a practice to see the specialties and tools inside it.
          </CenterHead>
          <div className="mt-12">
            <TechnologyBoard />
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="marquee-band relative overflow-hidden bg-canvas py-24">
        <div className="absolute inset-x-[-5%] top-1/2 h-24 -translate-y-1/2 rotate-[2.5deg] bg-ghost/70" />
        <div className="relative -mx-[5%] -rotate-[2.5deg] bg-card py-7">
          <div className="marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {marquee.map((item, index) => (
                  <span key={item} className="flex items-center gap-4 pr-20 text-[2rem] font-semibold whitespace-nowrap">
                    <Asterisk className={index % 4 === 1 ? "text-accent" : "text-ink-faint"} />
                    <span className={["text-ink", "text-accent", "text-ghost-outline", "text-ink/15"][index % 4]}>{item}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What we do */}
      <section id="industries" className="scroll-mt-24 bg-canvas py-24 lg:py-[120px]">
        <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-[54px]">
          <Rise className="relative mx-auto aspect-[677/695] w-full max-w-[636px]">
            <WhatWeDoArt />
          </Rise>
          <div>
            <Eyebrow>What Do We Do</Eyebrow>
            <RevealTitle as="h2" className="font-display mt-5 text-[clamp(2.2rem,3.6vw,3.25rem)] leading-[1.2] font-bold">
              Software for the way your industry works.
            </RevealTitle>
            <Rise>
              <p className="mt-6 text-[1rem] leading-[26px] text-ink-muted">
                Portals, booking flows, stores, and internal tools. The product changes with the industry. The developers do not.
              </p>
            </Rise>
            <Rise delay={120}>
              <HashLink href="#contact" className="btn btn-primary mt-10 h-[62px]">
                Start a project
                <ArrowUpRight />
              </HashLink>
            </Rise>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section id="promises" className="scroll-mt-24 bg-canvas pb-28">
        <div className="container-page">
          <CenterHead title="What Clients Can Expect?">
            Four commitments that hold for every order, whether it is a website, a store, or a mobile app.
          </CenterHead>
          <div className="mt-14">
            <Carousel label="What clients can expect" itemClassName="w-[92%] md:w-[calc((100%-1.875rem)/2)]">
              {promises.map((item) => (
                <article key={item.title} className="relative h-full overflow-hidden rounded-[1.5rem] bg-card px-8 py-10 sm:px-10">
                  <div aria-hidden="true" className="absolute inset-0 bg-white/[0.025] [clip-path:polygon(36%_0,62%_0,100%_68%,100%_100%,94%_100%)]" />
                  <div aria-hidden="true" className="absolute inset-0 bg-white/[0.02] [clip-path:polygon(70%_0,86%_0,100%_25%,100%_45%)]" />
                  <div className="relative flex items-center gap-5">
                    <span className="relative h-[5.3rem] w-[5.3rem] shrink-0 overflow-hidden rounded-full">
                      <Image src={item.image} alt="" fill sizes="85px" className="object-cover grayscale" />
                    </span>
                    <div>
                      <h3 className="text-[1.4rem] font-bold">{item.title}</h3>
                      <p className="mt-2 flex items-center gap-3 text-[0.9rem] text-accent">
                        <span aria-hidden="true" className="h-0.5 w-8 bg-accent" />
                        {item.tag}
                      </p>
                    </div>
                  </div>
                  <p className="relative mt-8 text-[1.3rem] leading-relaxed text-ink-muted sm:text-[1.45rem]">{item.body}</p>
                  <div className="relative mt-9 flex items-center gap-6">
                    <Image src="/images/mir-logo.webp" alt="" width={996} height={158} className="h-7 w-auto opacity-80" />
                    <span aria-hidden="true" className="h-px flex-1 bg-line-strong" />
                    <QuoteIcon />
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Specialists (team layout)
      <section id="team" className="scroll-mt-24 bg-canvas py-28">
        <div className="container-page">
          <CenterHead title="Our Specialist Team">
            The roles that work on your order. Each practice brings the people who build in that stack every day.
          </CenterHead>
          <div className="mt-14">
            <Carousel label="Our specialist team" itemClassName="w-[82%] sm:w-[calc((100%-1.875rem)/2)] lg:w-[calc((100%-3.75rem)/3)]">
              {specialists.map((person) => (
                <article key={person.role} className="group relative h-full pt-14">
                  <div aria-hidden="true" className="absolute inset-x-0 top-14 bottom-0 rounded-[1.5rem] bg-card transition-colors duration-300 group-hover:bg-raised" />
                  <div className="relative px-6 pb-8">
                    <div className="relative -mt-14 aspect-[335/372] overflow-hidden rounded-[1.5rem]">
                      <Image src={person.image} alt="" fill sizes="(min-width: 1024px) 360px, 80vw" className="photo-mono object-cover" />
                      <span aria-hidden="true" className="absolute inset-0 bg-[#131313]/30" />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[1.5rem] leading-tight font-bold">{person.role}</h3>
                        <p className="mt-2 text-[1rem] text-ink-muted">{person.stack}</p>
                      </div>
                      <HashLink
                        href="#contact"
                        aria-label={`Work with our ${person.role.toLowerCase()}`}
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
                      >
                        <ArrowUpRight />
                      </HashLink>
                    </div>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      */}

      {/* CTA */}
      <section aria-labelledby="cta-title" className="bg-canvas pb-28">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-accent px-8 py-16 sm:px-12 lg:py-20">
            <svg aria-hidden="true" viewBox="0 0 480 300" preserveAspectRatio="none" className="absolute inset-y-0 left-[33%] hidden h-full w-[36%] md:block">
              <path d="M0 0h130l230 240v60H300L0 0Z" fill="#131313" />
              <path d="M130 0h80l270 270v30H360V240L130 0Z" fill="#1b1b1b" />
            </svg>
            <span aria-hidden="true" className="dot-grid absolute top-5 right-6 h-16 w-16 text-[#131313]" />
            <Burst className="absolute -bottom-8 left-6 h-36 w-36 text-[#131313]/15" />
            <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <h2 id="cta-title" className="max-w-[12em] text-[clamp(2rem,4vw,3.4rem)] leading-tight font-bold text-white">
                Have An Idea? Let&rsquo;s Make It Real Now.
              </h2>
              <HashLink href="#contact" className="btn btn-dark shrink-0 md:mr-10">
                Start A Project
                <ArrowUpRight />
              </HashLink>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 bg-canvas py-28">
        <div className="container-page">
          <CenterHead title="How A Client Order Works">
            Three steps from the first workshop to a product you can run.
          </CenterHead>
          <ol className="mt-14 flex flex-col gap-4">
            {clientStages.map((stage, index) => (
              <li key={stage.step} className="rounded-[1.5rem] bg-card">
                <Rise className="grid items-center gap-6 px-6 py-8 sm:px-8 md:grid-cols-[6rem_8rem_minmax(0,1fr)] lg:grid-cols-[7rem_10rem_minmax(0,1.1fr)_minmax(0,1fr)_10rem] lg:gap-8">
                  <span className="font-display w-fit rounded-2xl bg-canvas px-5 py-4 text-[1rem] leading-snug">
                    Step
                    <span className="block">{stage.step}</span>
                  </span>
                  <span className="relative hidden h-28 w-28 overflow-hidden rounded-full md:block">
                    <Image src={stageMeta[index].image} alt="" fill sizes="112px" className="object-cover" />
                  </span>
                  <div>
                    <p className="text-[0.95rem] text-ink-muted">{stageMeta[index].label}</p>
                    <h3 className="mt-2 text-[1.65rem] leading-snug font-bold">{stage.title}</h3>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-ink-muted md:col-span-3 lg:col-span-1">{stage.body}</p>
                  {index === 0 ? (
                    <HashLink href="#contact" className="btn btn-outline btn-compact w-fit lg:justify-self-end">
                      Start Here
                      <ArrowUpRight />
                    </HashLink>
                  ) : null}
                </Rise>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-raised py-28">
        <div className="container-page">
          <CenterHead title="Before You Get In Touch">Short answers to what clients ask first. Anything else, write to us.</CenterHead>
          <div className="mx-auto mt-14 flex max-w-[56rem] flex-col gap-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-[1.25rem] border border-line bg-canvas transition-colors open:border-accent">
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-6 text-[1.15rem] font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-chip transition-[transform,background-color,color] group-open:rotate-45 group-open:bg-accent group-open:text-white"
                    aria-hidden="true"
                  >
                    <Plus />
                  </span>
                </summary>
                <p className="max-w-[62ch] px-7 pb-7 text-[1rem] leading-relaxed text-ink-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-canvas py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <RevealTitle as="h2" className="title-md mt-6">
              Tell Us The Order.
            </RevealTitle>
            <Rise>
              <p className="mt-6 text-[1rem] leading-relaxed text-ink-muted">
                Send the product, who uses it, and whether it is web, mobile, or both. The form opens an email draft. Nothing is stored on this site until you send it.
              </p>
            </Rise>
            <ul className="mt-10 space-y-5">
              <ContactLine label="New projects" value={site.email} />
              <ContactLine label="Support" value={site.supportEmail} />
            </ul>
          </div>
          <Suspense fallback={null}>
            <SubmitForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}

function CenterHead({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-[54rem] text-center">
      <Rise>
        <Mark className="mx-auto block h-9 w-auto" />
      </Rise>
      <RevealTitle as="h2" className="section-title mt-5">
        {title}
      </RevealTitle>
      {children ? (
        <Rise delay={120}>
          <p className="lede mx-auto mt-5 max-w-[52rem]">{children}</p>
        </Rise>
      ) : null}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Rise>
      <p className="eyebrow">
        <Mark className="h-[1.1rem] w-auto" />
        {children}
      </p>
    </Rise>
  );
}

function AboutPoint({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <Rise>
      <div className="flex items-center gap-4">
        <span className="font-display relative inline-flex h-12 w-12 shrink-0 items-center justify-center text-[1.2rem] font-semibold">
          <span aria-hidden="true" className="absolute inset-0 -rotate-45 rounded-full border-2 border-line border-t-accent border-l-accent" />
          {number}
        </span>
        <h3 className="text-[1.5rem] leading-tight font-bold">{title}</h3>
      </div>
      <p className="mt-4 text-[1rem] leading-relaxed text-ink-muted">{children}</p>
    </Rise>
  );
}

function SpinText({
  id,
  text,
  className,
  size,
  weight = 600,
  fit = false,
}: {
  id: string;
  text: string;
  className?: string;
  size: number;
  weight?: number;
  fit?: boolean;
}) {
  return (
    <svg viewBox="0 0 200 200" className={`spin-slow ${className ?? ""}`} aria-hidden="true">
      <defs>
        <path id={id} d="M100 100m-80 0a80 80 0 1 1 160 0a80 80 0 1 1-160 0" />
      </defs>
      <text fill="currentColor" fontSize={size} fontWeight={weight} letterSpacing="5" className="font-display">
        <textPath href={`#${id}`} textLength={fit ? 500 : undefined} lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
  );
}

function Scribbles() {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 160" className="absolute top-6 left-4 hidden h-40 w-40 text-ink/25 lg:block" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 18 22 32M22 18 8 32" />
      <path d="M52 8l6 6-6 6 6 6-6 6" transform="rotate(-40 55 20)" />
      <path d="M86 52l10 10M96 52 86 62" />
      <path d="M8 66h12M14 60v12" />
      <path d="M50 66l28 28M44 72l28 28" />
      <path d="M8 120 18 110l10 10 10-10 10 10" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 52 44" className="h-11 w-12 shrink-0" aria-hidden="true">
      <path d="M26 2C12.7 2 2 10.6 2 21.2c0 6 3.4 11.4 8.8 14.9L8 42l10-4.6c2.5.6 5.2.9 8 .9 13.3 0 24-8.6 24-19.1S39.3 2 26 2Z" fill="#df2919" />
      <path d="M16 26c3-1 4.5-3.6 4.5-7.4V15h-6v6h2.6c0 1.8-.9 3-2.6 3.5ZM29 26c3-1 4.5-3.6 4.5-7.4V15h-6v6h2.6c0 1.8-.9 3-2.6 3.5Z" fill="#fff" />
    </svg>
  );
}

function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-7 w-7 shrink-0 ${className ?? ""}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7" strokeLinecap="round" />
    </svg>
  );
}

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <li>
      <a href={`mailto:${value}`} className="group flex items-center gap-4">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="text-[0.9rem] text-ink-muted">
          {label}
          <span className="font-display block text-[1.05rem] font-semibold text-ink">{value}</span>
        </span>
      </a>
    </li>
  );
}

// Built on the reference's 677 x 695 artwork; every position is a share of that box.
function WhatWeDoArt() {
  return (
    <div className="@container absolute inset-0">
      <div className="absolute inset-y-0 left-[10.5%] w-[81.1%] overflow-hidden rounded-[1.75rem] bg-[#1c1c1c]">
        <div aria-hidden="true" className="absolute top-[18%] -left-[55%] aspect-square w-[150%] rounded-full border-[length:7cqw] border-[#171717]" />
        <svg aria-hidden="true" viewBox="71 0 549 695" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M71 42H205L615 418H552L71 64Z" fill="#df2919" />
          <path d="M232 64H272L462 244H422Z" fill="#b81f12" />
        </svg>
        <span aria-hidden="true" className="dot-grid-sm absolute top-[2%] left-[81%] h-[7%] w-[16%] text-white/20" />
        <div className="absolute bottom-0 left-[2%] aspect-[799/1445] w-[66%]">
          <Image src="/images/about-team.webp" alt="Four members of the team" fill sizes="(min-width: 1024px) 400px, 65vw" className="object-contain object-bottom brightness-[0.72]" />
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 677 695" className="absolute inset-0 h-full w-full">
        <path d="M620 371 615 418H552L548 415Z" fill="#df2919" />
      </svg>
      {/* Card on the right */}
      <div className="absolute top-[12.5%] left-[63.2%] h-[42.2%] w-[36%] rounded-[1.5rem] bg-[#1a1a1a] p-[5%]">
        <p className="font-display text-[clamp(0.85rem,2.66cqw,1.125rem)] leading-[1.2] font-bold text-white">
          One team for {industries.length} industries.
        </p>
        <HashLink href="#contact" className="group mt-[8%] inline-flex items-center gap-2 text-[clamp(0.8rem,2.36cqw,1rem)] text-ink-muted hover:text-accent">
          Talk to us
          <ArrowUpRight className="h-3.5 w-3.5" />
        </HashLink>
        <span aria-hidden="true" className="dot-grid-sm absolute bottom-[8%] left-[5%] h-[22%] w-[36%] text-white/20" />
        <div aria-hidden="true" className="absolute right-[6%] bottom-[8%] aspect-square w-[50%]">
          <SpinText id="wwd-badge" text="MAKE IT REAL • SOFTWARE TEAM • " className="h-full w-full text-white/60" size={14} weight={400} />
          <Mark className="absolute inset-0 m-auto h-auto w-[36%]" />
        </div>
      </div>
      <span aria-hidden="true" className="absolute top-[12%] left-[62.5%] aspect-square w-[3%] rounded-full bg-accent" />
      <span aria-hidden="true" className="absolute top-[52.5%] left-[97%] aspect-square w-[3%] rounded-full bg-accent" />
      {/* Practices card */}
      <div className="absolute top-[62.2%] left-0 flex h-[18.4%] w-[50.2%] items-center gap-[6%] rounded-[clamp(12px,3.2cqw,22px)] bg-white px-[4%] shadow-raised">
        <div className="flex -space-x-[3.5cqw]">
          {technologyGroups.slice(0, 5).map((group, index) => (
            <span
              key={group.id}
              className="relative aspect-square w-[7.7cqw] overflow-hidden rounded-full border-[length:0.6cqw] border-white"
              style={{ boxShadow: `0 0 0 0.45cqw ${["#7eb6f2", "#7fd0a8", "#9fb6d9", "#f0a3a3", "#f3c16b"][index]}` }}
            >
              <Image src={group.image} alt="" fill sizes="52px" className="object-cover" />
            </span>
          ))}
        </div>
        <span className="font-display text-[clamp(1rem,3.3cqw,1.5rem)] font-medium text-[#131313]">+{technologyGroups.length}</span>
      </div>
    </div>
  );
}

