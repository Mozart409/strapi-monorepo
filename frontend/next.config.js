const withPlugins = require('next-compose-plugins')
const { StatsWriterPlugin } = require('webpack-stats-plugin')
const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [4, 8, 16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'localhost',
      'beammeup-strapi-image-upload-bucket.s3.eu-central-1.amazonaws.com',
      's3-images-strapi-beammeup.s3.eu-central-1.amazonaws.com',
      's3-images-strapibeammeup.s3.eu-central-1.amazonaws.com',
    ],
  },
  async redirects() {
    return [
      /*  {
        source: '/cms',
        destination: '/',
        permanent: true,
      }, */
    ]
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCiAgentWebpackPlugin({
          stats: { excludeAssets: [/stats.json/] },
        })
      ),
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
    }
    config.plugins.push(
      new StatsWriterPlugin({
        filename: 'stats.json',
        stats: {
          context: './', // optional, will improve readability of the paths
          assets: true,
          entrypoints: true,
          chunks: true,
          modules: true,
        },
      })
    )
    return config
  },
}

module.exports = withPlugins(
  [
    [withBundleAnalyzer],

    // your other plugins here
  ],
  nextConfig
)
