import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/pic',
        destination: 'https://pic.quatrolympic.com',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
