import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
