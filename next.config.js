/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  // basePath: "/nextjs-github-pages",
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
