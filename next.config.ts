import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        // Match /docs and any subpath (e.g., /docs/inboxes, /docs/foo/bar, etc.)
        source: '/docs/:path*',
        destination: 'https://docs.distranmail.com/:path*'
      }
    ];
  }
};

export default nextConfig;
