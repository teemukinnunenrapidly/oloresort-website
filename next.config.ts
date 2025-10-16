import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow production builds to succeed even if there are lint or type errors.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
