import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/childrens-camp',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
