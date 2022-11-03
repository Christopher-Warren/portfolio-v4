/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: [
  //     "spotlight.tailwindui.com",
  //     "scontent-atl3-1.xx.fbcdn.net",
  //     "www.chriswarren.tech",
  //   ],
  // },

  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "http://blog.localhost:3000",
      },
    ];
  },
};

module.exports = withPlaiceholder({ ...nextConfig });
