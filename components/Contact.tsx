"use client";
import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle2, CalendarClock } from "lucide-react";
import { site } from "@/lib/site";

// Submissions are emailed to you by Web3Forms (https://web3forms.com),
// using the access key in lib/site.ts.

const services = [
  "Implementation",
  "Custom Development",
  "Integrations",
  "Consulting & Managed Admin",
  "Marketing & Data Cloud",
  "Agentforce & AI",
  "Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-xl border bg-white/[0.03] text-white text-[0.9375rem] placeholder:text-white/30 outline-none transition-colors focus:border-accent focus:bg-white/[0.05]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errs: Record<string, string> = {};
    if (!String(data.get("name")).trim()) errs.name = "Please enter your name.";
    const email = String(data.get("email")).trim();
    if (!email) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email address.";
    if (!String(data.get("message")).trim()) errs.message = "Tell us a little about your project.";
    if (data.get("botcheck")) return;
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      if (!site.web3formsKey) throw new Error("Missing Web3Forms access key");
      data.append("access_key", site.web3formsKey);
      data.append("subject", `New enquiry from ${data.get("name")} via ${site.name} website`);
      data.append("from_name", `${site.name} website`);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message ?? String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const fieldBorder = (name: string) => (errors[name] ? "border-red-400/70" : "border-line");

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="contact-heading">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(50% 60% at 20% 40%, rgba(56,189,248,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="mb-12 lg:mb-0">
            <p className="eyebrow mb-4">Contact</p>
            <h2 id="contact-heading" className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Let’s talk about <span className="text-gradient">your Salesforce goals.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Starting fresh or fixing what’s there, tell us where you’re headed. We’ll reply within
              one business day to set up a free discovery call.
            </p>

            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl border border-line bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">Email</span>
                  <a href={`mailto:${site.email}`} className="text-muted text-sm hover:text-accent transition-colors">
                    {site.email}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl border border-line bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                  <CalendarClock className="w-5 h-5 text-accent" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">Response time</span>
                  <span className="text-muted text-sm">Within one business day</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl border border-line bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">Location</span>
                  <span className="text-muted text-sm">{site.location}</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="card p-7 sm:p-9 bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
            {status === "sent" ? (
              <div className="flex flex-col items-center text-center py-10" role="status">
                <div className="w-16 h-16 rounded-full bg-emerald-400/15 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">Message received</h3>
                <p className="text-muted">Thanks for reaching out — we’ll be in touch within one business day.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-labelledby="form-heading"
              >
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <h3 id="form-heading" className="font-display text-2xl font-semibold text-white mb-6">
                  Book a free discovery call
                </h3>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                      Full name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`${inputClass} ${fieldBorder("name")}`}
                      placeholder="Jane Smith"
                    />
                    {errors.name && <p id="name-error" className="mt-1.5 text-red-400 text-xs">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                      Work email <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`${inputClass} ${fieldBorder("email")}`}
                      placeholder="jane@company.com"
                    />
                    {errors.email && <p id="email-error" className="mt-1.5 text-red-400 text-xs">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={`${inputClass} border-line`}
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1.5">
                      What do you need?
                    </label>
                    <select id="service" name="service" defaultValue="" className={`${inputClass} border-line cursor-pointer`}>
                      <option value="" className="bg-surface">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-surface">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                    About your project <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClass} ${fieldBorder("message")} resize-none`}
                    placeholder="Goals, current setup, timeline…"
                  />
                  {errors.message && <p id="message-error" className="mt-1.5 text-red-400 text-xs">{errors.message}</p>}
                </div>

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === "sending" ? "Sending…" : (
                    <>
                      Send message
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>

                {status === "error" ? (
                  <p className="text-red-400 text-sm text-center mt-4" role="alert">
                    Something went wrong sending your message. Please email us at{" "}
                    <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
                  </p>
                ) : (
                  <p className="text-white/40 text-xs text-center mt-4">We reply within one business day. No spam, ever.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
