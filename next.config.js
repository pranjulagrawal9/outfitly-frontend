/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.myntassets.com",
      },
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "images.bewakoof.com",
      },
    ],
  },
};

module.exports = nextConfig;
