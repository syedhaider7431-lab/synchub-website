import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

const description =
  "SyncHub is a Salesforce services agency. We implement, customise, integrate and support Salesforce — from Sales & Service Cloud to Order Management, Data Cloud and Agentforce.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "SyncHub | Salesforce Implementation, Development & Consulting",
  description,
  keywords: [
    "Salesforce consulting",
    "Salesforce implementation",
    "Salesforce development",
    "Apex",
    "Lightning Web Components",
    "Salesforce Order Management",
    "Marketing Cloud",
    "Data Cloud",
    "Agentforce",
  ],
  openGraph: {
    title: "SyncHub | Salesforce Services Agency",
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
