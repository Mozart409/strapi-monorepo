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

    return [
      {
        source: "/fuehrungskraefteentwicklung",
        destination: "/coaching-und-beratung",
        permanent: true,
      },
      {
        source: "/projektteams",
        destination: "/team-entwicklung",
        permanent: true,
      },
      {
        source: "/persoenliche-entwicklung",
        destination: "/training",
        permanent: true,
      },

      {
        source: "/projektteams",
        destination: "/team-entwicklung",
        permanent: true,
      },
      {
        source: "/team-entwicklung",
        destination: "/projekt-performance",
        permanent: true,
      },

      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uber-mich",
        destination: "/ueber-mich",
        permanent: true,
      },
      {
        source: "/Kontakt/kontakt.html",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/html/-_nlp-master.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Leistungen/leistungen.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/einsatzfelder-coaching/feed",
        destination: "/fuehrungskraefteentwicklung",
        permanent: true,
      },
      {
        source: "/2019/06",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/quality_management.html",
        destination: "/projektteams",
        permanent: true,
      },
      {
        source: "/html/standard_as_a_benefit.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/added_value_of_pm.html",
        destination: "/projektteams",
        permanent: true,
      },
      {
        source: "/html/time_management.html",
        destination: "/projektteams",
        permanent: true,
      },
      {
        source: "/html/scope_management.html",
        destination: "/projektteams",
        permanent: true,
      },
      {
        source: "/uber-mich/uber-mich.html",
        destination: "/ueber-mich",
        permanent: true,
      },
      {
        source:
          "/wp-content/plugins/borlabs-cookie/images/borlabs-cookie-logo.svg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/-_menschenkenntnis.html",
        destination: "/alfred-adler-seminare",
        permanent: true,
      },
      {
        source: "/html/cost_management.html",
        destination: "/projektteams",
        permanent: true,
      },
      {
        source: "/triple-one-seminare",
        destination: "/alfred-adler-seminare",
        permanent: true,
      },
      {
        source: "/[slug]",
        destination: "/",
        permanent: true,
      },
      {
        source: "/link",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Kontakt_Np_Regular.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/impulse-um-pain-points-zu-loesen/pain-points-der-methodik",
        destination: "/",
        permanent: true,
      },
      {
        source: "/einstieg/willkommen-zu-ideal-coaching-de",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/ressourcenplanung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2020/04/26/beratung-ihrer-projektlandschaft/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/projektplattform",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/tag/beratung-excellence-qualifikation-strukturen-das_miteinander",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2020/04/26/beratung-ihrer-projektlandschaft",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/teamentwicklung",
        destination: "/projekt-performance",
        permanent: true,
      },
      {
        source: "/teamentwicklung",
        destination: "/projekt-performance",
        permanent: true,
      },
      {
        source: "/beratung-ihrer-projektlandschaft",
        destination: "/",
        permanent: true,
      },
      {
        source: "/etur-sadipscing-e",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/uber_mich.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/-ber-mich_Np_Regular.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/impulse-durch-umfangliche-unterstutzung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/impulse-durch-qualifizierung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/projektteams",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/individuelles-coaching",
        destination: "/",
        permanent: true,
      },
      {
        source: "/einstieg/highly-crafted-themes",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/morbio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2020/04/26/individuelle-begleitung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about__trashed/impulse-durch-umfangliche-unterstutzung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/basiswissen-der-individualpsychologie",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projektteams/fuhrungskrafte",
        destination: "/fuehrungskraefteentwicklung",
        permanent: true,
      },

      {
        source: "/Konfliktlösungen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/impulse-um-pain-points-zu-loesen/pain-points-der-projektfuehrung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2020/04/26/beratung-ihrer-projektlandschaft",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/c_o_a_c_h_i_n_g.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/impressum.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/customer_satisfaction.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/standard_als_nutzen.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/meine-rolle-in-der-supervision",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/zusammen/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/impulse-durch-on-boarding-linienmanagement",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about__trashed/impulse-durch-erfahrung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/impulse-durch-erfahrung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about__trashed/impulse-durch-on-boarding-linienmanagement",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about/impulse-durch-erfahrung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/r-suscipit-lobor",
        destination: "/",
        permanent: true,
      },
      {
        source: "/2019/08",
        destination: "/",
        permanent: true,
      },
      {
        source: "/einsatzfelder-fuer-supervision",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/psychologische-beratung",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/mehrwert.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2019/06/IC_Logo.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/das-miteinander",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2019/06/IC_Logo.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/high-performance-teams",
        destination: "/projekt-performance",
        permanent: true,
      },
      {
        source: "/fuhrungskrafte",
        destination: "/fuehrungskraefteentwicklung",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/R_Morbio-32.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ads.txt",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/vorbereitungsseminar.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/ziele/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/methoden-und-techniken",
        destination: "/",
        permanent: true,
      },
      {
        source: "/das-eigene-leben-gestalten",
        destination: "/lebensfreude",
        permanent: true,
      },

      {
        source: "/individualpsychologie-im-alltag",
        destination: "/menschenkenntnis",
        permanent: true,
      },
      {
        source: "/about/experts-team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/.well-known/assetlinks.json",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/individualpsychologie-im-alltag",
        destination: "/",
        permanent: true,
      },
      {
        source: "/experts-team",
        destination: "/experten-netzwerk",
        permanent: true,
      },
      {
        source: "/html/gelegenheiten.html",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/impulse-um-pain-points-zu-loesen/pain-points-der-kommunikation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/impulse-um-pain-points-zu-loesen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/coaching-mehr-als-nur-ein-begriff",
        destination: "/",
        permanent: true,
      },
      {
        source: "/html/risk_management.html",
        destination: "/",
        permanent: true,
      },

      {
        source: "/datenschutzerklarung",
        destination: "/datenschutz",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/ueber-mich",
        permanent: true,
      },

      {
        source: "/die-kreative-partnerschaft",
        destination: "/meine-beziehung-beleben",
        permanent: true,
      },
      {
        source: "/gelungene-kommunikation",
        destination: "/gute-kommunikation",
        permanent: true,
      },
      {
        source: "/ich-und-du-fur-mehr-kreativitat-in-meinen-beziehungen",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fuhrungskrafteentwicklung",
        destination: "/fuehrungskraefteentwicklung",
        permanent: true,
      },
      {
        source: "/personliche-entwicklung",
        destination: "/mentale-gesundheit-persoenliche-entwicklung",
        permanent: true,
      },
      {
        source: "/persoenliche-entwicklung",
        destination: "/mentale-gesundheit-persoenliche-entwicklung",
        permanent: true,
      },
      {
        source: "/konflikte-losen",
        destination: "/persoenliche-entwicklung",
        permanent: true,
      },
      {
        source: "/konflikte-loesen",
        destination: "/persoenliche-entwicklung",
        permanent: true,
      },
      {
        source: "/seminare",
        destination: "/",
        permanent: true,
      },
      {
        source: "/seminar-reservierung",
        destination: "/",
        permanent: true,
      },

      {
        source: "/lebensfreude",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gute-kommunikation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/raus-aus-der-opferrolle",
        destination: "/",
        permanent: true,
      },
      {
        source: "/menschenkenntnis",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mentale-gesundheit-persoenliche-entwicklung",
        destination: "/",
        permanent: true,
      },

      {
        source: "/meine-beziehung-beleben",
        destination: "/persoenliche-entwicklung",
        permanent: true,
      },
      {
        source: "/individualpsychologie",
        destination: " /menschenkenntnis",
        permanent: true,
      },
      {
        source: "/projektteam-performance",
        destination: " /projekt-performance",
        permanent: true,
      },
      {
        source: "/alfred-adler-seminare",
        destination: " /seminare",
        permanent: true,
      },
      {
        source: "/individuelle-begleitung",
        destination: " /",
        permanent: true,
      },
      {
        source: "/ideal-coaching.com/datenschutz",
        destination: " /datenschutz",
        permanent: true,
      },
      {
        source: "/about/service",
        destination: " /",
        permanent: true,
      },
      {
        source: "/category/pm-beratung",
        destination: " /",
        permanent: true,
      },
      {
        source: "/category/qualifizierung",
        destination: " /",
        permanent: true,
      },
      {
        source: "/strukturen/feed",
        destination: " /",
        permanent: true,
      },
      {
        source: "/2020/04",
        destination: " /",
        permanent: true,
      },
      {
        source: "/seminare/seminare.html",
        destination: " /",
        permanent: true,
      },
      {
        source: "/Impressum/impressum.html",
        destination: " /",
        permanent: true,
      },
      {
        source: "/.well-known/apple-app-site-association",
        destination: " /",
        permanent: true,
      },
      {
        source: "/apple-app-site-association",
        destination: " /",
        permanent: true,
      },
      {
        source: "/tag/entscheidungsvorlage",
        destination: " /",
        permanent: true,
      },
      {
        source: "/html/kontakt.html",
        destination: " /",
        permanent: true,
      },
      {
        source: "/tag/terminplanung",
        destination: " /",
        permanent: true,
      },
      {
        source: "/about__trashed/experts-team",
        destination: " /",
        permanent: true,
      },
      {
        source: "/category/seminare",
        destination: " /",
        permanent: true,
      },
      {
        source: "/category/beratung",
        destination: " /",
        permanent: true,
      },
      {
        source: "/html/nonverbales.html",
        destination: " /",
        permanent: true,
      },

      {
        source: "/seminare/seminare.html",
        destination: " /",
        permanent: true,
      },
      {
        source: "/Impressum/impressum.html",
        destination: " /",
        permanent: true,
      },
      {
        source: "/.well-known/apple-app-site-association",
        destination: " /",
        permanent: true,
      },
      {
        source: "/apple-app-site-association",
        destination: " /",
        permanent: true,
      },
      {
        source: "/tag/entscheidungsvorlage",
        destination: " /",
        permanent: true,
      },
      {
        source: "/html/kontakt.html",
        destination: " /",
        permanent: true,
      },

      {
        source: "/tag/terminplanung",
        destination: " /",
        permanent: true,
      },
      {
        source: "/about__trashed/experts-team",
        destination: " /",
        permanent: true,
      },
      {
        source: "/category/seminare",
        destination: " /",
        permanent: true,
      },
      {
        source: "/html/nonverbales.html",
        destination: " /",
        permanent: true,
      },
      {
        source: "/category/beratung",
        destination: " /",
        permanent: true,
      },
      {
        source: "/menschenkenntnis",
        destination: " /",
        permanent: true,
      },
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
