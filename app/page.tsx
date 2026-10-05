import Image from "next/image";
import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import { HashLink } from "@/components/hash-link";
import { ArrowUpRight, Burst, Plus } from "@/components/icons";
import { Mark } from "@/components/logo";
import { RevealTitle } from "@/components/reveal-title";
import { Rise } from "@/components/rise";
import { Carousel } from "@/components/carousel";
import { ServiceSlider } from "@/components/service-slider";
import { SubmitForm } from "@/components/submit-form";
import { TechnologyBoard } from "@/components/technology-board";
import { clientStages, faqs, industries, promises, site, specialists, technologyGroups } from "@/lib/site";

const stack = ["React", "Next.js", "Flutter", "Node.js", "Figma", "OpenAI"];

const marquee = ["Web Apps", "Mobile Apps", "UI UX Design", "Ecommerce", "AI Integration", "Automation", "Desktop", "Games"];

const stageMeta = [
  { label: "Start", image: "/images/design.jpg" },
  { label: "Team", image: "/images/web.jpg" },
  { label: "Scope", image: "/images/handshake.jpg" },
  { label: "Launch", image: "/images/desktop.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-canvas pt-[6.625rem] xl:h-[69.25rem] xl:pt-0">
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <div aria-hidden="true" className="hero-shape absolute inset-0 hidden [clip-path:polygon(41.6%_0,66%_0,100%_38%,100%_63%)] xl:block" />
        <div aria-hidden="true" className="dot-grid absolute top-[194px] left-[calc(72.94vw-652px)] hidden h-[73px] w-[157px] text-ink/15 xl:block" />
        <div aria-hidden="true" className="dot-grid absolute top-[549px] left-[calc(11.9vw-81px)] hidden h-[73px] w-[157px] text-ink/15 xl:block" />
        <span aria-hidden="true" className="float-y absolute top-[436px] left-[calc(11.9vw-21px)] z-20 hidden h-[47px] w-[47px] rounded-full bg-[#1fd47a] xl:block" />

        <div className="container-page relative z-20 pt-14 xl:px-3 xl:pt-[12.5rem]">
          <RevealTitle as="h1" className="display max-w-[9.6em]" mark="real">
            We make your ideas real.
          </RevealTitle>
          <div className="relative mt-6 max-w-[46.6rem] xl:pl-[6.25rem]">
            <Rise delay={160}>
              <p className="relative text-[1rem] leading-[1.625rem] text-ink-muted">
                Make It Real designs and builds websites, web apps, mobile products, stores, and AI features. One team takes your order from the first note to launch.
              </p>
            </Rise>
            <Rise delay={260}>
              <div className="mt-8 flex items-center gap-[1.9rem]">
                <span aria-hidden="true" className="h-px w-24 bg-accent sm:w-[16.1rem]" />
                <HashLink href="#contact" className="group font-display inline-flex items-center gap-3 text-[1rem] font-semibold text-ink">
                  Discover Now
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                </HashLink>
              </div>
            </Rise>
          </div>
        </div>

        <HeroArt />
      </section>

      {/* Tool strip */}
      <section aria-label="Tools we build with" className="bg-canvas">
        <div className="container-page grid grid-cols-2 items-center gap-y-8 py-20 sm:grid-cols-3 lg:grid-cols-6">
          {stack.map((name) => (
            <span key={name} className="font-display text-center text-[2.1rem] font-extrabold tracking-[-0.04em] text-ghost transition-colors hover:text-ink-muted">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="help" className="scroll-mt-24 bg-canvas pt-12 pb-28">
        <div className="container-page">
          <CenterHead title="Our Best Services">
            An order is a site or app, a store, or the design and AI around them. Each card opens the specialties and tools inside that practice.
          </CenterHead>
          <div className="mt-14">
            <ServiceSlider />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative scroll-mt-24 overflow-hidden bg-raised py-30">
        <Scribbles />
        <div aria-hidden="true" className="absolute -top-40 right-[-10%] h-[44rem] w-[44rem] rounded-full border-[7rem] border-ink/[0.025]" />
        <div className="container-page relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Rise className="relative mx-auto aspect-[550/610] w-full max-w-[34rem]">
            <div aria-hidden="true" className="absolute right-[2%] bottom-[18%] h-[46%] w-[46%] rounded-full bg-accent/20" />
            <div className="absolute top-0 left-0 h-[72%] w-[75.6%] overflow-hidden">
              <Image src="/images/about-1.webp" alt="The team working together around a table" fill sizes="420px" className="object-cover object-[45%_center] grayscale" />
            </div>
            <div aria-hidden="true" className="dot-grid absolute top-[16%] -right-[2%] h-20 w-32 text-ink/20" />
            <div className="absolute right-0 bottom-0 h-[72%] w-[60%] overflow-hidden">
              <Image src="/images/about-2.webp" alt="The team celebrating with a high five" fill sizes="330px" className="object-cover object-[35%_center] grayscale" />
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
              <div className="mt-10 flex items-center gap-5">
                <HashLink href="#process" className="btn btn-outline">
                  How We Work
                  <ArrowUpRight />
                </HashLink>
                <HashLink href="#contact" className="btn-square" aria-label="Start a project">
                  <PlayIcon />
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
            Seven practices, one team. Filter by type, then open a practice to see the specialties and tools inside it.
          </CenterHead>
          <div className="mt-12">
            <TechnologyBoard />
          </div>
        </div>
      </section>

      {/* Marquee */}
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
        <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-[54px] xl:px-3">
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
                Healthcare, education, finance, retail, logistics, and {industries.length - 5} more industries. Portals, booking flows, stores, and internal tools: the product changes with the industry, the developers do not.
              </p>
            </Rise>
            <div className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              <SkillBar label="Scope agreed before work" value={100} />
              <SkillBar label="Product handed over to you" value={100} />
            </div>
            <Rise delay={120}>
              <HashLink href="#contact" className="btn btn-primary mt-10 h-[62px]">
                Discover More
                <ArrowUpRight />
              </HashLink>
            </Rise>
          </div>
        </div>
      </section>

      {/* Promises (testimonial layout) */}
      <section id="promises" className="scroll-mt-24 bg-canvas pb-28">
        <div className="container-page">
          <CenterHead title="What Clients Can Expect?">
            Four commitments that hold for every order, whether it is a website, a store, or a mobile app.
          </CenterHead>
          <div className="mt-14">
            <Carousel label="What clients can expect" itemClassName="w-[92%] md:w-[calc((100%-1.875rem)/2)]">
              {promises.map((item) => (
                <article key={item.title} className="relative h-full overflow-hidden bg-card px-8 py-10 sm:px-10">
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

      {/* Collaborate (video band layout) */}
      <section id="access" className="relative scroll-mt-24 overflow-hidden bg-[#131313] py-24 text-white lg:py-[150px]">
        <Image src="/images/collab-bg.webp" alt="" fill sizes="100vw" className="object-cover object-[center_35%] opacity-60 grayscale" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgb(19_19_19/0.82)_0%,rgb(19_19_19/0.6)_30%,rgb(19_19_19/0.42)_60%,rgb(19_19_19/0.4)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-white/[0.07] [clip-path:polygon(40.5%_0,57.5%_0,100%_58%,100%_88%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/30 [clip-path:polygon(57.5%_0,69%_0,94%_60%,94%_100%,86%_100%,100%_88%,100%_58%)]" />
        <div aria-hidden="true" className="absolute inset-0 bg-white/[0.06] [clip-path:polygon(69%_0,77%_0,100%_31%,100%_47%)]" />
        <div className="container-page relative grid items-start gap-14 lg:grid-cols-[minmax(0,746px)_minmax(0,1fr)] lg:gap-6 xl:px-3">
          <div className="relative">
            <Mark className="relative mb-4 h-auto w-[86px] opacity-95 lg:absolute lg:-top-2 lg:left-[-53px] lg:mb-0 lg:w-[129px]" />
            <Burst className="absolute top-[389px] left-[-173px] hidden h-[200px] w-[200px] text-accent lg:block" />
            <RevealTitle as="h2" className="display relative text-white">
              We Have An Idea To Make Money Together.
            </RevealTitle>
            <Rise>
              <p className="relative mt-[30px] text-[1rem] leading-[26px] tracking-[4.8px] text-ink-muted uppercase">If money is tight and you want to earn</p>
            </Rise>
            <Rise delay={120}>
              <div className="relative mt-[30px] flex items-center gap-[19px]">
                <Link href="/?intent=collaboration#contact" className="btn btn-dark h-[62px] border border-[#131313]">
                  Contact Us
                  <ArrowUpRight />
                </Link>
                <Link
                  href="/?intent=collaboration#contact"
                  className="btn-square h-[61px] w-[60px] bg-[#131313]"
                  aria-label="Start a collaboration request"
                >
                  <PlayIcon />
                </Link>
              </div>
            </Rise>
          </div>
          <div className="hidden justify-center pt-10 lg:flex">
            <div className="relative h-[406px] w-[406px] rounded-full bg-[#1a1a1a]">
              <SpinText id="collab-badge" text="COLLABORATE • MAKE IT REAL • " className="absolute inset-[18px] text-white/75" size={15} weight={300} fit />
              <span aria-hidden="true" className="dot-grid absolute top-[52%] left-[23%] h-[58px] w-[78px] text-white/20" />
              <svg viewBox="0 0 100 100" className="absolute inset-[27%] text-accent" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <path d="M14 20 20 14 76 70 70 76Z" strokeLinejoin="round" />
                <path d="M84 36v50H34v-6h44V36Z" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists (team layout) */}
      <section id="team" className="scroll-mt-24 bg-canvas py-28">
        <div className="container-page">
          <CenterHead title="Our Specialist Team">
            The roles that work on your order. Each practice brings the people who build in that stack every day.
          </CenterHead>
          <div className="mt-14">
            <Carousel label="Our specialist team" itemClassName="w-[82%] sm:w-[calc((100%-1.875rem)/2)] lg:w-[calc((100%-3.75rem)/3)]">
              {specialists.map((person) => (
                <article key={person.role} className="group relative h-full pt-14">
                  <div aria-hidden="true" className="absolute inset-x-0 top-14 bottom-0 bg-card transition-colors duration-300 group-hover:bg-raised" />
                  <div className="relative px-6 pb-8">
                    <div className="relative -mt-14 aspect-[335/372] overflow-hidden">
                      <Image src={person.image} alt="" fill sizes="(min-width: 1024px) 360px, 80vw" className="photo-mono object-cover" />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[1.5rem] leading-tight font-bold">{person.role}</h3>
                        <p className="mt-2 text-[1rem] text-ink-muted">{person.stack}</p>
                      </div>
                      <HashLink
                        href="#contact"
                        aria-label={`Work with our ${person.role.toLowerCase()}`}
                        className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-line text-ink-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
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

      {/* CTA */}
      <section aria-labelledby="cta-title" className="bg-canvas pb-28">
        <div className="container-page">
          <div className="relative overflow-hidden bg-accent px-8 py-16 sm:px-12 lg:py-20">
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
            Four steps from the first note to a product you can run. A finished specification is not required to start.
          </CenterHead>
          <ol className="mt-14 border-t border-line">
            {clientStages.map((stage, index) => (
              <li key={stage.step} className="border-b border-line">
                <Rise className="grid items-center gap-6 py-10 md:grid-cols-[6rem_8rem_minmax(0,1fr)] lg:grid-cols-[7rem_10rem_minmax(0,1.1fr)_minmax(0,1fr)_10rem] lg:gap-8">
                  <span className="font-display w-fit bg-card px-5 py-4 text-[1rem] leading-snug">
                    Step
                    <span className="block">{stage.step}</span>
                  </span>
                  <span className="relative hidden h-28 w-28 overflow-hidden rounded-full md:block">
                    <Image src={stageMeta[index].image} alt="" fill sizes="112px" className="object-cover grayscale" />
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
              <details key={item.q} className="group border border-line bg-canvas transition-colors open:border-accent">
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-6 text-[1.15rem] font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-chip transition-[transform,background-color,color] group-open:rotate-45 group-open:bg-accent group-open:text-white"
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
            <Eyebrow>Get Contact</Eyebrow>
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

// The hero artwork is laid out on a 1920 x 1100 canvas that scales like a cover
// background, centred, so every shape keeps its place at any screen width.
function HeroArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative mt-10 aspect-square overflow-hidden sm:aspect-[16/10] xl:absolute xl:inset-0 xl:mt-0 xl:aspect-auto">
      <div className="@container absolute right-[-6%] bottom-0 aspect-[1920/1100] w-[165%] xl:top-0 xl:right-auto xl:bottom-auto xl:left-1/2 xl:w-[max(100%,1934px)] xl:-translate-x-1/2">
        {/* Red ring rising from the bottom left */}
        <div className="absolute top-[69.45%] left-[8.125%] aspect-square w-[51.875%] rounded-full border-[length:5.104cqw] border-accent" />
        {/* Round photo on the ring, with red play marks */}
        <div className="absolute top-[62.2%] left-[22.1%] z-10 aspect-square w-[15.6%] overflow-hidden rounded-full">
          <Image src="/images/hero-circle.jpg" alt="" fill sizes="300px" className="object-cover object-[62%_center] grayscale" />
        </div>
        <svg viewBox="0 0 60 100" className="absolute top-[63.8%] left-[18.3%] z-10 w-[3.1%]">
          <path d="M34 0 60 26 34 52Z" fill="#df2919" />
          <path d="M2 42 14 50 2 58Z" fill="#df2919" />
          <path d="M14 66 30 77 14 88Z" fill="#df2919" />
        </svg>
        {/* Red disc */}
        <div className="absolute top-[14.36%] left-[62.81%] aspect-square w-[24.27%] rounded-full bg-[linear-gradient(135deg,#e53524_0%,#e53524_47%,#df2919_47%,#d92616_100%)]" />
        {/* Orange quarter */}
        <div className="absolute top-[17.8%] left-[58.2%] aspect-square w-[4.1%] rounded-tl-full bg-accent-soft" />
        {/* Main person behind the laptop, with the logo on the lid */}
        <div className="absolute top-[18.2%] left-[51.3%] z-10 aspect-[1084/1075] w-[47.2%]">
          <Image src="/images/hero-main.webp" alt="" fill priority sizes="(min-width: 1280px) 860px, 80vw" className="object-contain object-bottom grayscale contrast-[1.05]" />
        </div>
        <Mark className="absolute top-[86.6%] left-[71.6%] z-10 h-auto w-[8.2%] opacity-90" />
        {/* Blue quarters on the right */}
        <div className="absolute top-[48.2%] left-[87.8%] z-20 aspect-square w-[6.56%] rounded-tl-full bg-[#5a5cf6]" />
        <div className="absolute top-[60%] left-[94.6%] z-20 aspect-square w-[3.44%] rounded-br-full bg-[#7fd0fb]" />
      </div>
      {/* Person on the far left, anchored to the screen edge like the reference */}
      <div className="absolute bottom-0 left-[clamp(0px,calc((100vw-1440px)*0.12),60px)] z-20 hidden aspect-[1051/1012] w-[400px] xl:block">
        <Image src="/images/hero-left.webp" alt="" fill sizes="400px" className="object-contain object-bottom grayscale" />
      </div>
      {/* Spinning badge, top right */}
      <div className="absolute top-[188px] right-[44px] z-30 hidden h-[127px] w-[127px] xl:block">
        <span className="absolute inset-[30%] rounded-full bg-[#f5c518] opacity-70 blur-md" />
        <svg viewBox="0 0 100 100" className="absolute inset-[38%] text-[#f5c518]">
          <path d="M30 18 82 50 30 82Z" fill="currentColor" />
        </svg>
        <SpinText id="hero-badge" text="CREATIVE SOFTWARE • MAKE IT REAL • " className="relative h-full w-full text-white/70" size={13} weight={400} />
      </div>
    </div>
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

function ContactLine({ label, value }: { label: string; value: string }) {
  return (
    <li>
      <a href={`mailto:${value}`} className="group flex items-center gap-4">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center bg-card text-accent transition-colors group-hover:bg-accent group-hover:text-white">
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

function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-7 w-7 shrink-0 ${className ?? ""}`} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M7 4.5v15l12-7.5Z" />
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

// Built on the reference's 677 x 695 artwork; every position is a share of that box.
function WhatWeDoArt() {
  return (
    <div className="@container absolute inset-0">
      <div className="absolute inset-y-0 left-[10.5%] w-[81.1%] overflow-hidden bg-[#1c1c1c]">
        <div aria-hidden="true" className="absolute top-[18%] -left-[55%] aspect-square w-[150%] rounded-full border-[length:7cqw] border-[#171717]" />
        <svg aria-hidden="true" viewBox="71 0 549 695" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M71 42H205L615 418H552L71 64Z" fill="#df2919" />
          <path d="M232 64H272L462 244H422Z" fill="#b81f12" />
        </svg>
        <span aria-hidden="true" className="dot-grid-sm absolute top-[2%] left-[81%] h-[7%] w-[16%] text-white/20" />
        <div className="absolute bottom-0 left-[2%] aspect-[799/1445] w-[66%]">
          <Image src="/images/about-team.webp" alt="Four members of the team" fill sizes="(min-width: 1024px) 400px, 65vw" className="object-contain object-bottom grayscale contrast-[1.05]" />
        </div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 677 695" className="absolute inset-0 h-full w-full">
        <path d="M620 371 615 418H552L548 415Z" fill="#df2919" />
      </svg>
      {/* Card on the right */}
      <div className="absolute top-[12.5%] left-[63.2%] h-[42.2%] w-[36%] bg-[#1a1a1a] p-[5%]">
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
      <span aria-hidden="true" className="absolute top-[12%] left-[62.5%] aspect-square w-[3%] bg-accent" />
      <span aria-hidden="true" className="absolute top-[52.5%] left-[97%] aspect-square w-[3%] bg-accent" />
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

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <Rise>
      <p className="font-display text-[18px] leading-[26px] font-semibold text-white">
        {label} {value}%
      </p>
      <div className="relative mt-[15px] h-5 bg-[#333]">
        <div className="skill-fill relative h-full bg-white/15" style={{ width: `${value}%` }} />
      </div>
    </Rise>
  );
}
