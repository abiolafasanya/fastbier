/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['images.pexels.com', 'img.freepik.com'],
  },
};

module.exports = nextConfig;
