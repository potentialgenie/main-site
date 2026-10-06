import Link from "next/link";
import { Logo, Mark } from "@/components/logo";
import { footerColumns, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="text-white">
      <div className="relative overflow-hidden bg-[#181818] pt-[120px] pb-[90px]">
        <FooterArt />
        <div className="container-page relative grid gap-12 sm:grid-cols-3 lg:grid-cols-[526fr_196fr_196fr_196fr] lg:gap-x-[4.65%]">
          <div className="sm:col-span-3 lg:col-span-1">
            <Logo className="h-[42px] w-auto" />
            <h2 className="font-display mt-[100px] pt-[12px] text-[14px] leading-[62px] font-bold tracking-[4.2px] text-ink-muted uppercase">Contact</h2>
            <a href={`mailto:${site.email}`} className="group mt-0 flex max-w-[420px] items-center sm:max-w-none lg:max-w-[440px] gap-6 border-b border-[#333] pr-2 pb-3 pl-[15px]">
              <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-[1.25rem] leading-[48px] font-bold break-all text-[#e8e8e8] transition-colors group-hover:text-white sm:text-[1.75rem] sm:break-normal">
                {site.email}
              </span>
            </a>
            <ul className="mt-[34px] text-[1rem] leading-[26px] text-[#777]">
              <li>
                <span className="text-accent">S:</span>&nbsp;&nbsp;
                <a href={`mailto:${site.supportEmail}`} className="transition-colors hover:text-white">
                  {site.supportEmail}
                </a>
              </li>
              <li>
                <span className="text-accent">W:</span>&nbsp;&nbsp;makeit-real.world
              </li>
            </ul>
          </div>
          {footerColumns.map((column) => (
            <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
              <h2 id={`footer-${column.title}`} className="pb-[30px] text-[18px] leading-[21.6px] font-bold text-white">
                {column.title}
              </h2>
              <ul className="space-y-[10px]">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("/#") ? (
                      <a href={link.href} className="text-[1rem] leading-[26px] text-[#abadb7] transition-colors hover:text-accent">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[1rem] leading-[26px] text-[#abadb7] transition-colors hover:text-accent">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="bg-[#1a1a1a] py-[30px]">
        <div className="container-page flex items-center justify-between gap-6">
          <p className="text-[1rem] leading-[26px]">
            Copyright © {new Date().getFullYear()} <span className="text-accent">{site.name}</span>. All rights reserved.
          </p>
          <Mark className="h-8 w-auto" />
        </div>
      </div>
    </footer>
  );
}

// Background shapes laid out on the reference's 1920 x 664 artwork, anchored top left.
function FooterArt() {
  return (
    <div aria-hidden="true" className="pointer-events-none @container absolute top-0 left-0 aspect-[1920/664] w-[max(100%,1745px)]">
      <div className="absolute top-[33.13%] left-[-13.72%] aspect-square w-[52.45%] rounded-full border-[length:5.2cqw] border-[#101010]" />
      <div className="absolute inset-0 bg-[#202020] [clip-path:polygon(47.1%_0,60.2%_0,94.3%_100%,87%_100%,70%_49.7%,65.4%_49.7%)]" />
      <div className="absolute inset-0 bg-[#1d1d1d] [clip-path:polygon(60.9%_3%,68.3%_3%,85.1%_51.8%,85.1%_75.3%)]" />
      <div className="absolute inset-0 bg-[#1d1d1d] [clip-path:polygon(86.8%_68.7%,97.4%_100%,92%_100%,86.8%_85.8%)]" />
      <div className="dot-grid-sm absolute top-[9%] hidden lg:block left-[85.4%] h-[11.6%] w-[8.4%] text-white/35" />
    </div>
  );
}
