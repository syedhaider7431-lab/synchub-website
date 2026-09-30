import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes the site to /out,
  // which can be hosted anywhere (Netlify, GoDaddy cPanel, etc.).
  output: "export",
  // Emit /privacy/index.html so clean URLs work on any static host.
  trailingSlash: true,
};

export default nextConfig;
