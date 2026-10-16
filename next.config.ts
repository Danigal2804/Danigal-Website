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
      {
        source: "/%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA",
        destination: "/accessibility",
      },
      {
        source: "/%D7%9E%D7%93%D7%99%D7%A0%D7%99%D7%95%D7%AA-%D7%A4%D7%A8%D7%98%D7%99%D7%95%D7%AA",
        destination: "/privacy",
      },
    ];
  },
};

export default nextConfig;
