import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | SyncHub",
  description: "How SyncHub collects and uses personal information submitted through synchub.digital.",
  alternates: { canonical: "/privacy/" },
};

const updated = "30 September 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-36 pb-24 lg:pt-44">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-muted leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-accent [&_a:hover]:underline [&_strong]:text-text">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">Privacy Policy</h1>
          <p className="text-sm">Last updated: {updated}</p>

          <p>
            This policy explains how {site.name} (“we”, “us”) handles personal information when you visit{" "}
            <a href={site.url}>{site.url.replace("https://", "")}</a> or contact us. We keep it simple: we only
            collect what you choose to send us, and we use it only to respond to you.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Contact form:</strong> your name, email address, company name, the service you’re interested
              in, and your message.
            </li>
            <li>
              <strong>Email:</strong> anything you include when you email us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </li>
            <li>
              <strong>Technical data:</strong> like any website, our hosting provider automatically receives your IP
              address and browser details when you load a page, for security and delivery purposes.
            </li>
          </ul>
          <p>
            We don’t use analytics, advertising trackers or cookies on this website.
          </p>

          <h2>How we use it</h2>
          <p>
            We use the information you send us to reply to your enquiry, discuss a potential project, and — if we
            work together — to manage that relationship. We never sell your information or use it for unrelated
            marketing.
          </p>

          <h2>Services we rely on</h2>
          <ul>
            <li><strong>GitHub Pages</strong> hosts this website.</li>
            <li><strong>Web3Forms</strong> delivers contact-form submissions to our inbox.</li>
            <li><strong>Zoho Mail</strong> provides our email.</li>
            <li><strong>Google Fonts</strong> serves the fonts used on this site, which means your browser requests them from Google.</li>
          </ul>
          <p>Each of these providers processes data under its own privacy policy.</p>

          <h2>How long we keep it</h2>
          <p>
            We keep enquiries for as long as needed to respond and follow up, and client correspondence for as long as
            required for the engagement and our legal and accounting obligations. You can ask us to delete your
            information at any time.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask to access, correct or delete the personal information we hold about you, or object to how we
            use it. Email <a href={`mailto:${site.email}`}>{site.email}</a> and we’ll respond within 30 days. If you’re
            in the UK or EU, you also have the right to complain to your local data protection authority.
          </p>

          <h2>Changes</h2>
          <p>If we update this policy, we’ll change the date at the top of this page.</p>

          <h2>Contact</h2>
          <p>
            Questions about privacy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
