/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e-jam.vercel.app'
      }
    ]
  }
}

module.exports = nextConfig
