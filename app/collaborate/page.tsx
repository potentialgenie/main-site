import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Burst } from "@/components/icons";
import { Mark } from "@/components/logo";
import { RevealTitle } from "@/components/reveal-title";
import { Rise } from "@/components/rise";

export const metadata: Metadata = {
  title: "Collaborate",
  robots: { index: false, follow: false },
};

export default function CollaboratePage() {
  return (
    <section className="relative overflow-hidden bg-[#131313] pt-36 pb-24 text-white lg:pt-44 lg:pb-[150px]">
      <Image src="/images/collab-bg.webp" alt="" fill sizes="100vw" className="object-cover object-[center_35%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(19_19_19/0.92)_0%,rgb(19_19_19/0.84)_45%,rgb(19_19_19/0.9)_100%)] lg:bg-[linear-gradient(90deg,rgb(19_19_19/0.94)_0%,rgb(19_19_19/0.84)_28%,rgb(19_19_19/0.66)_58%,rgb(19_19_19/0.56)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/20 [clip-path:polygon(40.5%_0,57.5%_0,100%_58%,100%_88%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/25 [clip-path:polygon(57.5%_0,69%_0,94%_60%,94%_100%,86%_100%,100%_88%,100%_58%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/15 [clip-path:polygon(69%_0,77%_0,100%_31%,100%_47%)]" />
      <div className="container-page relative grid items-start gap-14 lg:grid-cols-[minmax(0,746px)_minmax(0,1fr)] lg:gap-6">
        <div className="relative">
          <Mark className="relative mb-4 h-auto w-[86px] opacity-95 lg:absolute lg:-top-2 lg:left-[-53px] lg:mb-0 lg:w-[129px]" />
          <Burst className="absolute top-[389px] left-[-173px] hidden h-[200px] w-[200px] text-accent lg:block" />
          <RevealTitle as="h1" className="display relative text-white">
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
