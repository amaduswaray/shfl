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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-lhr8-1.xx.fbcdn.net",
        pathname: "**",
      },
      /* {
        protocol: "https",
        hostname: "nabostylisten.s3.amazonaws.com",
        pathname: "**",
      }, */
      // process.env[`S3_BASE_URL_${process.env.APP_ENV}`],
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

// export default nextConfig;
