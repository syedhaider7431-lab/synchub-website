const steps = [
  {
    title: "Discover",
    description:
      "A free call to understand your goals, your current org and what's getting in the way. You leave with clear next steps either way.",
  },
  {
    title: "Design",
    description:
      "We map the solution, data model and integrations, then send a fixed-scope proposal with timeline and price — no surprises later.",
  },
  {
    title: "Build",
    description:
      "Short sprints in a sandbox with regular demos, so you see progress early and can steer before anything goes live.",
  },
  {
    title: "Launch & support",
    description:
      "Tested deployment, user training and documentation — then ongoing support so your org keeps improving after go-live.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-surface/50 border-y border-line" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">How we work</p>
          <h2 id="process-heading" className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
            A simple process, <span className="text-gradient">built for momentum.</span>
          </h2>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <li key={step.title} className="card relative p-7 overflow-hidden">
              <span
                className="absolute -top-4 -right-1 font-display text-[7rem] leading-none font-bold text-white/[0.04] select-none"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="font-display text-sm font-semibold text-accent">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl font-semibold text-white mt-3 mb-3">{step.title}</h3>
              <p className="text-muted text-[0.9375rem] leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
