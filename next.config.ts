import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://docs.distranmail.com',
        permanent: true,
        basePath: false
      }
    ];
  }
};

export default nextConfig;
