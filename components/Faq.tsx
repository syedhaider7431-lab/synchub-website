const faqs = [
  {
    q: "What size of business do you work with?",
    a: "Mostly small and mid-sized companies, plus larger teams that need specialist help on a specific Salesforce project. If you use Salesforce — or are about to — we can help.",
  },
  {
    q: "Can you fix an existing Salesforce org rather than start from scratch?",
    a: "Yes. Many projects start with an org health check: we review your configuration, automation and code, then give you a prioritised plan to clean it up.",
  },
  {
    q: "How is pricing structured?",
    a: "Projects are quoted as a fixed scope with a fixed price after discovery. Ongoing admin and development support is available as a monthly retainer.",
  },
  {
    q: "How long does an implementation take?",
    a: "Focused projects can go live in a few weeks. Larger implementations with integrations — like Order Management with an ERP — typically take around three months.",
  },
  {
    q: "Do you work with teams in other time zones?",
    a: "Yes. We're remote-first and schedule regular overlap hours, demos and updates around your working day.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-24 lg:py-32" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 id="faq-heading" className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card group px-6 py-5 open:border-accent/30">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none font-display text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full border border-line flex items-center justify-center text-accent transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="text-muted leading-relaxed mt-4">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
