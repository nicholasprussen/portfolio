/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cr-skills-chart-widget.azurewebsites.net",
      "cr-ss-service.azurewebsites.net"
    ]
  }
}

module.exports = nextConfig
