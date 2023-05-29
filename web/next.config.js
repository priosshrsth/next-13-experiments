/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cloudflare-ipfs.com" },
      { hostname: "avatars.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
