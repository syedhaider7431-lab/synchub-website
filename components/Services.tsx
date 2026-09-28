import { Rocket, Code2, Plug, LifeBuoy, Megaphone, Sparkles } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Implementation",
    description:
      "New org or fresh start — we configure Salesforce around how your team actually sells, serves and fulfils, then migrate your data cleanly.",
    tags: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Order Management"],
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "When clicks aren't enough: Apex, Lightning Web Components and Flow built to be tested, maintainable and upgrade-safe.",
    tags: ["Apex", "LWC", "Flow", "Test Coverage"],
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect Salesforce to your ERP, storefront, payment gateways and internal tools so data moves without spreadsheets in between.",
    tags: ["REST / SOAP", "Connect API", "MuleSoft", "ERP"],
  },
  {
    icon: LifeBuoy,
    title: "Consulting & Managed Admin",
    description:
      "Org health checks, technical debt clean-up, release planning and ongoing admin support on a flexible monthly retainer.",
    tags: ["Health Checks", "Admin Support", "Roadmaps"],
  },
  {
    icon: Megaphone,
    title: "Marketing & Data Cloud",
    description:
      "Unify customer data and turn it into personalised journeys — with segmentation, consent and reporting set up properly from day one.",
    tags: ["Marketing Cloud", "Data Cloud", "Journeys"],
  },
  {
    icon: Sparkles,
    title: "Agentforce & AI",
    description:
      "Put AI agents and Einstein to work on real tasks — case deflection, lead qualification, summaries — grounded in your own data.",
    tags: ["Agentforce", "Einstein", "Prompt Builder"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Services</p>
          <h2 id="services-heading" className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-5">
            The full Salesforce lifecycle, <span className="text-gradient">under one roof.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Whether you’re launching your first org or untangling one that’s grown messy, we plan it,
            build it and keep it running.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, tags }) => (
            <article
              key={title}
              className="card group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_60px_-25px_rgba(56,189,248,0.45)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 border border-accent/20 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-muted text-[0.9375rem] leading-relaxed mb-6">{description}</p>
              <ul className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li key={tag} className="px-2.5 py-1 rounded-md bg-white/[0.05] text-white/70 text-xs font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
