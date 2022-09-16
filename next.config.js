/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    domains: ["ipfs.io", "tailwindui.com"],
  },
};

module.exports = nextConfig;
