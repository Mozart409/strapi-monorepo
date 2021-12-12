/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <script
            id="usercentrics-cmp"
            data-settings-id="JhKKW9-rX"
            src="https://app.usercentrics.eu/browser-ui/latest/bundle.js"
            defer
          ></script> */}

          {/* <script
            data-usercentrics="Google Tag Manager"
            type="text/plain"
            async
            defer
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-TRCDQTC');
              `,
            }}
          /> */}
          <link rel="preload" href="/fonts/inter-var-latin.woff2"></link>

          <link rel="preload" href="/fonts/fira/FiraSans-Bold.woff" />
          <link rel="preload" href="/fonts/fira/FiraSans-Bold.woff2" />

          <link
            rel="preconnect"
            href="https://aggregator.service.usercentrics.eu"
          ></link>
          <link rel="preconnect" href="https://api.usercentrics.eu"></link>
        </Head>

        <body>
          <noscript>
            {/* <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TRCDQTC"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            /> */}
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
