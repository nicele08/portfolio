// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  basePath: '/portfolio',
}

module.exports = nextConfig
