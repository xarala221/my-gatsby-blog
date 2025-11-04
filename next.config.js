const { withPayload } = require('@payloadcms/next/withPayload')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    reactCompiler: false,
  },
}

module.exports = withPayload(nextConfig)
