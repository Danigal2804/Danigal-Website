import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.spotifycdn.com" },
      { protocol: "https", hostname: "i.scdn.co" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/%D7%94%D7%A7%D7%9E%D7%AA-%D7%90%D7%95%D7%9C%D7%A4%D7%9F",
        destination: "/studio-setup",
      },
    ];
  },
};

export default nextConfig;
