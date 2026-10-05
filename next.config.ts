import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/opportunities", destination: "/help", permanent: false },
      { source: "/client-work", destination: "/help", permanent: false },
      { source: "/industries", destination: "/help", permanent: false },
      { source: "/how-it-works", destination: "/help", permanent: false },
      { source: "/submit", destination: "/help#contact", permanent: false },
      { source: "/contact", destination: "/help#contact", permanent: false },
      { source: "/partnerships", destination: "/#access", permanent: false },
      { source: "/devices", destination: "/#access", permanent: false },
      { source: "/capabilities", destination: "/technologies", permanent: false },
      { source: "/work", destination: "/help", permanent: false },
      { source: "/about", destination: "/team", permanent: false },
    ];
  },
};

export default nextConfig;
