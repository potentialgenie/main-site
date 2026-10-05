import Link from "next/link";
import { RevealTitle } from "@/components/reveal-title";

export default function NotFound() {
  return (
    <section className="bg-canvas py-24">
      <div className="container-page max-w-xl">
        <RevealTitle as="h1" className="display">
          Page not found
        </RevealTitle>
        <p className="lede mt-5">The address may be mistyped, or the page may have moved.</p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to the start
        </Link>
      </div>
    </section>
  );
}
