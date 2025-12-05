import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'http' if you need to support non-secure connections
        hostname: "**", // This wildcard allows all hostnames
        port: "", // Leave empty to match any port
        pathname: "**", // This wildcard allows all paths
      },
    ],
  },
};

export default nextConfig;
