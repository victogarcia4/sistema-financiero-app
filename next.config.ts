import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
    outputFileTracingExcludes: {
      '*': [
        'node_modules/mermaid/**',
        'node_modules/chart.js/**',
        'node_modules/@swc/core-linux-x64-gnu/**',
        'node_modules/@swc/core-linux-x64-musl/**',
        'node_modules/@swc/wasm/**',
      ],
    },
  },
}

export default nextConfig
