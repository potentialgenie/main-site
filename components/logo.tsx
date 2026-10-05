import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// The "MiR" monogram on its own, used beside headings and as a decorative mark.
export function Mark({ className = "h-8 w-auto" }: { className?: string }) {
  return <Image src="/images/mir-mark.png" alt="" width={443} height={158} aria-hidden="true" className={`${className} shrink-0`} />;
}

// Full logo: the monogram followed by the "make it real" wordmark.
export function Logo({ className = "h-10 w-auto sm:h-11" }: { className?: string }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image src="/images/mir-logo.webp" alt={site.name} width={996} height={158} priority className={className} />
    </Link>
  );
}
