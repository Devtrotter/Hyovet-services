import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  sassOptions: {
    // Permet `@use "abstracts" as *;` depuis n'importe quel module SCSS.
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    deviceSizes: [640, 828, 1080, 1440, 1920, 2560],
    imageSizes: [64, 128, 256, 384, 480, 640],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  experimental: {
    // CSS total ~8 Ko : inliné dans le <head>, supprime les requêtes bloquantes (FCP / LCP).
    inlineCss: true,
    optimizePackageImports: ["react-icons"],
  },

  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
