import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"], qualities: [75] },
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
  async redirects() {
    return [
      // links antigos/compartilhados no formato do protótipo
      {
        source: "/exploracao",
        has: [{ type: "query", key: "p", value: "(?<slug>.*)" }],
        destination: "/exploracoes/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
