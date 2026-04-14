import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/**",
      },
    ],
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/Practice",
        destination: "/practice",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
