/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "https://outfitly-backend-production.up.railway.app",
      },
    ],
  },
};

module.exports = nextConfig;
