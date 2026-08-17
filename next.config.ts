import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/curriculo",
        destination: "/curriculo-ats-thiago-andrade.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
