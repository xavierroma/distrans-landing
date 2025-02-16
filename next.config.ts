import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: 'https://distrans.mintlify.app',
      }
    ];
  }
};

export default nextConfig;
