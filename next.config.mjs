/** @type {import('next').NextConfig} */
// import runtimeCaching from "next-pwa/cache";
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  // runtimeCaching,
  register: true,
  disable: process.env.NODE_ENV === "development",
});

export default withPWA({
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

// export default nextConfig;
