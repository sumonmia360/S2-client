import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // add other hostnames if needed
      },
    ],
    unoptimized: true, // disables server-side image optimization
    domains: ["stylolifestyle.com"],
  },
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
