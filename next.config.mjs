/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-us.exoticca.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
