/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "spotlight.tailwindui.com",
      "scontent-atl3-1.xx.fbcdn.net",
      "www.chriswarren.tech",
    ],
  },
};

module.exports = nextConfig;
