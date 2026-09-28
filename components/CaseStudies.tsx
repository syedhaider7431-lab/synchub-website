import { ArrowRight } from "lucide-react";

// Client names are withheld until you have permission to publish them.
const cases = [
  {
    industry: "Fashion retail · DTC",
    client: "Premium fashion brand",
    title: "Split-tender payments in Salesforce Order Management",
    challenge:
      "Orders from a Commerce Cloud storefront could be paid with a Shopify Gift Card and ShopPay together — and every capture and refund had to reconcile perfectly across both.",
    solution:
      "A custom Salesforce Payment Gateway Adapter with split-tender capture logic, reverse-order refund sequencing, and the full order lifecycle flowing from SFCC into OMS via Connect API.",
    results: [
      { metric: "5,000+", label: "Orders per day" },
      { metric: "3 mo", label: "To production" },
      { metric: "2", label: "Tenders per order" },
    ],
    tags: ["Order Management", "Commerce Cloud", "Apex", "Connect API"],
  },
  {
    industry: "Pet retail · E-commerce",
    client: "Online pet retailer",
    title: "Multi-location fulfilment with Oracle ERP",
    challenge:
      "A single order often had to be split across several warehouses based on live inventory, and ship in partial batches as stock became available.",
    solution:
      "Inventory-driven Fulfillment Order splitting, a suite of Flows for routing, partial shipments, status sync and cancellations, and structured updates back to Oracle ERP.",
    results: [
      { metric: "3 mo", label: "To production" },
      { metric: "Multi", label: "Location fulfilment" },
      { metric: "Live", label: "In production" },
    ],
    tags: ["Order Management", "Flow", "Oracle ERP", "Apex"],
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 lg:py-32" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Selected work</p>
          <h2 id="work-heading" className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-5">
            Hard problems, <span className="text-gradient">shipped to production.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            A look at the kind of Salesforce work we deliver — complex, integrated and live.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="card p-7 lg:p-9 flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-2">{c.industry}</p>
              <h3 className="font-display text-2xl lg:text-[1.75rem] font-semibold text-white leading-tight mb-1">{c.title}</h3>
              <p className="text-muted text-sm mb-7">{c.client}</p>

              <dl className="space-y-5 mb-8">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">Challenge</dt>
                  <dd className="text-text/85 text-[0.9375rem] leading-relaxed">{c.challenge}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1.5">Solution</dt>
                  <dd className="text-text/85 text-[0.9375rem] leading-relaxed">{c.solution}</dd>
                </div>
              </dl>

              <div className="grid grid-cols-3 gap-3 rounded-xl border border-line bg-white/[0.02] p-4 mb-6">
                {c.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="font-display text-2xl lg:text-3xl font-bold text-gradient tabular-nums leading-tight">{r.metric}</div>
                    <div className="text-muted text-xs mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {c.tags.map((tag) => (
                  <li key={tag} className="px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-accent hover:text-white transition-colors group">
            Have a tricky Salesforce problem? Let’s talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
