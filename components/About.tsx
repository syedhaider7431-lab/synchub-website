import { Users, FileCheck2, ShieldCheck, MessagesSquare } from "lucide-react";

const principles = [
  {
    icon: Users,
    title: "Senior people on your project",
    description: "The people you meet on the discovery call are the people who design and build your solution.",
  },
  {
    icon: FileCheck2,
    title: "Clear scope and pricing",
    description: "Fixed-scope proposals or a transparent monthly retainer — you always know what you're paying for.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description: "Tested Apex, documented Flows and best-practice architecture, so your org stays easy to change.",
  },
  {
    icon: MessagesSquare,
    title: "Plain-English communication",
    description: "Regular demos and updates without the jargon, so business and tech teams stay aligned.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface/50 border-y border-line" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-start">
          <div className="mb-12 lg:mb-0 lg:sticky lg:top-28">
            <p className="eyebrow mb-4">Why SyncHub</p>
            <h2 id="about-heading" className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              A focused team that <span className="text-gradient">lives in Salesforce.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-5">
              SyncHub is a Salesforce-only agency. We don’t split our attention across a dozen
              platforms — we go deep on one, from Apex and Flow to Order Management and AI.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Every engagement starts with your business goals, not a feature list. That’s how we
              deliver Salesforce your team actually uses long after go-live.
            </p>
            <a href="#contact" className="btn-ghost">
              Work with us
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card p-6">
                <Icon className="w-6 h-6 text-accent mb-5" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-muted text-[0.9375rem] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
