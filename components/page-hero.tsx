import { RevealTitle } from "@/components/reveal-title";

export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <section className="bg-canvas">
      <div className="container-page py-16 text-center sm:py-20 lg:py-24">
        <RevealTitle as="h1" className="display mx-auto max-w-[14em]">
          {title}
        </RevealTitle>
        <p className="lede mx-auto mt-6 max-w-[46ch]">{lede}</p>
      </div>
    </section>
  );
}
