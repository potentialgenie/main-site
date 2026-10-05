export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="bg-canvas">
      <div className="container-page py-16 text-center sm:py-20 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mx-auto mt-6 max-w-[14em]">{title}</h1>
        <p className="lede mx-auto mt-6 max-w-[46ch]">{lede}</p>
      </div>
    </section>
  );
}
