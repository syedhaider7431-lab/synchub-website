const platforms = [
  "Sales Cloud",
  "Service Cloud",
  "Experience Cloud",
  "Order Management",
  "Commerce Cloud",
  "Marketing Cloud",
  "Data Cloud",
  "Agentforce",
  "MuleSoft",
  "Tableau",
];

export default function Platforms() {
  return (
    <section className="border-y border-line bg-surface/60 py-8" aria-labelledby="platforms-heading">
      <h2 id="platforms-heading" className="sr-only">
        Salesforce products we work with
      </h2>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-12 pr-12">
          {[...platforms, ...platforms].map((p, i) => (
            <li
              key={i}
              aria-hidden={i >= platforms.length}
              className="font-display text-lg sm:text-xl font-semibold text-white/40 whitespace-nowrap"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
