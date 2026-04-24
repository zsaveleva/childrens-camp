import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/childrens-camp',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
