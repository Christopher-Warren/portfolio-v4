/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["spotlight.tailwindui.com"],
  },
};

module.exports = nextConfig;
