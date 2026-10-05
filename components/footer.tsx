import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerColumns, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <Logo tone="white" />
            <p className="mt-4 text-[0.925rem] leading-relaxed text-white/70">
              A web and mobile team for client orders across industries.
            </p>
            <div className="mt-6">
              <Link href="/#contact" className="btn btn-primary border-white bg-white text-[#14161a] hover:bg-white/90">
                Contact us
                <Arrow />
              </Link>
            </div>
            <div className="mt-6 flex flex-col gap-1.5 text-[0.9rem]">
              <a
                href={`mailto:${site.email}`}
                className="w-fit text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                {site.email}
              </a>
              <a
                href={`mailto:${site.supportEmail}`}
                className="w-fit text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                {site.supportEmail}
              </a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-labelledby={`footer-${column.title}`}>
                <h2
                  id={`footer-${column.title}`}
                  className="text-[0.7rem] font-semibold tracking-[0.16em] text-white/45 uppercase"
                >
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      {link.href.startsWith("/#") ? (
                        <a href={link.href} className="text-[0.925rem] text-white/70 transition-colors hover:text-white">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-[0.925rem] text-white/70 transition-colors hover:text-white">
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
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-[0.825rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Potential Genie. All rights reserved.</p>
          <p>makeit-real.world</p>
        </div>
      </div>
    </footer>
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
