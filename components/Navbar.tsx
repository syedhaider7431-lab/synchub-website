"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    // Arriving from another page (e.g. /privacy/ → /#services): jump to the section once rendered.
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        open
          ? "bg-bg border-b border-line"
          : scrolled
            ? "bg-bg/85 backdrop-blur-xl border-b border-line"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-18">
          <Link href="/" aria-label="SyncHub home">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Link href="/#contact" className="hidden md:inline-flex btn-primary py-2.5 px-5 text-sm">
            Book a free call
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden p-2 -mr-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-6 pt-2 border-t border-line">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-base font-medium text-text hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-full mt-4">
              Book a free call
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
