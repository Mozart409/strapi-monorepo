const withPlugins = require("next-compose-plugins")
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const { RelativeCiAgentWebpackPlugin } = require("@relative-ci/agent")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [4, 8, 16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "localhost",
      "s3-images-strapibeammeup.s3.eu-central-1.amazonaws.com",
      "images.unsplash.com",
      "s3-images-idealcoachingfargate.s3.eu-central-1.amazonaws.com",
    ],
  },
  async redirects() {
    return []
  },
  async headers() {
    // XXX We need to embed our website into external websites for the NRN demo, but you might want to disable this
    const DISABLE_IFRAME_EMBED_FROM_3RD_PARTIES = true;

    const headers = [
      {
        // Make all fonts immutable and cached for one year
        'source': '/static/fonts/(.*?)',
        'headers': [
          {
            'key': 'Cache-Control',
            // See https://www.keycdn.com/blog/cache-control-immutable#what-is-cache-control-immutable
            // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#browser_compatibility
            'value': `public, max-age=31536000, immutable`,
          },
        ],
      },
      {
        // Make all other static assets immutable and cached for one hour
        'source': '/static/(.*?)',
        'headers': [
          {
            'key': 'Cache-Control',
            // See https://www.keycdn.com/blog/cache-control-immutable#what-is-cache-control-immutable
            // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#browser_compatibility
            'value': `public, max-age=3600, immutable`,
          },
        ],
      },
      {
        source: '/(.*?)', // Match all paths, including "/" - See https://github.com/vercel/next.js/discussions/17991#discussioncomment-112028
        headers: [
          // This directive helps protect against some XSS attacks
          // See https://infosec.mozilla.org/guidelines/web_security#x-content-type-options
          {
            key: 'X-Content-Type-Options',
            value: `nosniff`,
          },
        ],
      },
      {
        source: '/(.*?)', // Match all paths, including "/" - See https://github.com/vercel/next.js/discussions/17991#discussioncomment-112028
        headers: [
          // This directive helps protect user's privacy and might avoid leaking sensitive data in urls to 3rd parties (e.g: when loading a 3rd party asset)
          // See https://infosec.mozilla.org/guidelines/web_security#referrer-policy
          // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
          // See https://scotthelme.co.uk/a-new-security-header-referrer-policy/
          {
            key: 'Referrer-Policy',
            // "no-referrer-when-downgrade" is the default behaviour
            // XXX You might want to restrict even more the referrer policy
            value: `no-referrer-when-downgrade`,
          },
        ],
      },
    ];

    /**
     * Because the NRN demo uses Stacker provider to show our app as an embedded iframe, we need to allow our pages to be embedded by other websites.
     *
     * In staging, we don't want to allow any website to embed our app by default, to avoid customers mistakenly use our preview URL in their production app.
     * Although, we want to allow Stacker to do it, so we can preview our website from Stacker (quick-preview).
     *
     * In production, we want to allow any website to embed our app by default, because we don't want to manage the list of websites that might embed our content.
     * Alternatively, we could also generate the CSP dynamically by pre-fetching the allowed websites from our CMS/API.
     */
    if (!DISABLE_IFRAME_EMBED_FROM_3RD_PARTIES && process.env.NEXT_PUBLIC_APP_STAGE !== 'production') {
      headers.push({
        source: '/(.*?)', // Match all paths, including "/" - See https://github.com/vercel/next.js/discussions/17991#discussioncomment-112028
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors *.stacker.app *.airportal.app', // Airportal is the former name of Stacker
          },
        ],
      });
    }

    // When 3rd party embeds are forbidden, only allow same origin to embed iframe by default
    // This is a stronger default, if you don't to embed your site in any external website
    if (DISABLE_IFRAME_EMBED_FROM_3RD_PARTIES) {
      headers.push({
        // This directive's "ALLOW-FROM" option is deprecated in favor of "Content-Security-Policy" "frame-ancestors"
        // So, we use a combination of both the CSP directive and the "X-Frame-Options" for browser that don't support CSP
        // See https://infosec.mozilla.org/guidelines/web_security#x-frame-options
        key: 'X-Frame-Options',
        value: `SAMEORIGIN`,
      });
      headers.push({
        source: '/(.*?)', // Match all paths, including "/" - See https://github.com/vercel/next.js/discussions/17991#discussioncomment-112028
        // See https://infosec.mozilla.org/guidelines/web_security#x-frame-options
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `frame-ancestors 'self`,
          },
        ],
      });
    }

    console.info('Using headers:', JSON.stringify(headers, null, 2));

    return headers;
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCiAgentWebpackPlugin({
          stats: { excludeAssets: [/stats.json/] },
        })
      ),
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        })
    }
    config.plugins.push(
      new StatsWriterPlugin({
        filename: "stats.json",
        stats: {
          context: "./", // optional, will improve readability of the paths
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
