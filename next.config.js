/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'services.ultradatagroup.ir',
        port: '',
        pathname: '/files/**',
      },
    ],
  },
}

module.exports = nextConfig
