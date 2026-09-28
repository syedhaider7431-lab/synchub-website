import Logo from "@/components/Logo";
import { site } from "@/lib/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#04070E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <Logo />
            <p className="text-muted text-sm leading-relaxed mt-4">
              Salesforce implementation, development and consulting for teams that want their CRM to
              actually move the business forward.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
              {site.email}
            </a>
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <p className="mt-6 text-xs text-white/25">
          Salesforce, Sales Cloud, Service Cloud, Agentforce and related marks are trademarks of Salesforce, Inc. {site.name} is an independent services provider.
        </p>
      </div>
    </footer>
  );
}
