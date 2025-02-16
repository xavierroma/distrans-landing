import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://distrans.mintlify.app',
        permanent: false,
        basePath: false
      }
    ];
  }
};

export default nextConfig;
