/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.thecocktaildb.com",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_SECRET: process.env.API_SECRET
  }
};

module.exports = nextConfig;
