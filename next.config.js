// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  basePath: '/nicele08',
}

module.exports = nextConfig
