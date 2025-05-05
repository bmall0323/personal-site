/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['malleyanalytics.com'],
  },
  output: 'standalone',
}

module.exports = nextConfig
