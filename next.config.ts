import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // allow https
        hostname: "**", // allow all hostnames
      },
      {
        protocol: "http", // allow http
        hostname: "**", // allow all hostnames
      },
    ],
    // disables server-side image optimization (good for debugging)
    domains: ["stylolifestyle.com"], // keep your custom domain just in case
  },
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
