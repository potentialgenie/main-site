import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/opportunities", destination: "/#technologies", permanent: false },
      { source: "/client-work", destination: "/#technologies", permanent: false },
      { source: "/industries", destination: "/#industries", permanent: false },
      { source: "/how-it-works", destination: "/#technologies", permanent: false },
      { source: "/submit", destination: "/#contact", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/partnerships", destination: "/collaborate", permanent: false },
      { source: "/devices", destination: "/collaborate", permanent: false },
      { source: "/capabilities", destination: "/#technologies", permanent: false },
      { source: "/work", destination: "/#technologies", permanent: false },
      { source: "/about", destination: "/#contact", permanent: false },
      { source: "/team", destination: "/#contact", permanent: false },
      { source: "/technologies", destination: "/#technologies", permanent: false },
      { source: "/help", destination: "/#technologies", permanent: false },
    ];
  },
};

export default nextConfig;
