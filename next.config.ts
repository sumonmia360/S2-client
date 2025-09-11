import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {},
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
