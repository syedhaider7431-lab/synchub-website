import { ArrowRight, CheckCircle2 } from "lucide-react";

const assurances = ["Free 30-minute discovery call", "Fixed-scope proposals", "Support after go-live"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Glow + grid backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(56,189,248,0.22) 0%, transparent 70%), radial-gradient(40% 40% at 85% 70%, rgba(129,140,248,0.16) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 lg:pt-48 lg:pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line bg-white/[0.04] text-sm text-muted mb-8">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
          </span>
          Taking on new Salesforce projects
        </div>

        <h1 className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[5.25rem] font-bold tracking-tight text-white mb-7">
          Make Salesforce
          <br />
          <span className="text-gradient">work the way you do.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed mb-10">
          SyncHub implements, customises and integrates Salesforce for growing businesses — from
          Sales and Service Cloud to Order Management, Data Cloud and Agentforce.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <a href="#contact" className="btn-primary w-full sm:w-auto">
            Book a free discovery call
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="#services" className="btn-ghost w-full sm:w-auto">
            Explore services
          </a>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {assurances.map((a) => (
            <li key={a} className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
