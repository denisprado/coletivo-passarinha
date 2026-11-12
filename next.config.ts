import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/keystatic",
        permanent: false,
      },
      {
        source: "/admin/:path*",
        destination: "/keystatic/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
