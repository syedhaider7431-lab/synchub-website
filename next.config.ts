import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the site to /out,
  // which can be hosted anywhere (Netlify, GoDaddy cPanel, etc.).
  output: "export",
};

export default nextConfig;
