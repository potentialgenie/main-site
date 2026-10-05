const webWork = ["Web products", "Ecommerce", "APIs", "Design"];
const mobileWork = ["iOS", "Android", "Flutter", "React Native"];

export function HeroPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-raised">
      <div className="grid-paper relative px-6 py-7 sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-canvas" />
        <div className="relative grid gap-8 sm:grid-cols-2">
          <Column kicker="01" label="Web" items={webWork} featured />
          <Column kicker="02" label="Mobile" items={mobileWork} />
        </div>
        <div className="relative mt-8 rounded-lg border border-accent/40 bg-accent-wash px-4 py-4">
          <p className="font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-accent uppercase">03 · The order</p>
          <p className="mt-2 text-[0.98rem] font-semibold tracking-[-0.02em] text-ink">Developers on your brief</p>
          <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-muted">
            Scoped, staffed, and delivered. The industry changes the product. It does not change who is responsible for the build.
          </p>
        </div>
      </div>
    </div>
  );
}

function Column({
  kicker,
  label,
  items,
  featured = false,
}: {
  kicker: string;
  label: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
        <span className="text-accent">{kicker}</span>
        <span className="ml-2 text-ink-faint">{label}</span>
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, index) => (
          <li
            key={item}
            className={`flex h-10 items-center gap-3 rounded-md border px-3 ${
              featured && index === 0
                ? "border-accent-line bg-accent-wash text-accent"
                : "border-line bg-surface text-ink"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                featured && index === 0 ? "bg-accent" : "bg-line-strong"
              }`}
            />
            <span className="font-mono text-[0.68rem] font-medium tracking-[0.1em] uppercase">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
