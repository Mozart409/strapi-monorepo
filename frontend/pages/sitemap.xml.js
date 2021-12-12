import React from 'react'

// const EXTERNAL_DATA_URL = 'https://ibexion.bike'

const createSitemap = (pages) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(({ slug }) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
                    </url>
                `
          })
          .join('')}
                   
    </urlset>
    `
class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    /* const request = await fetch(
      'https://docker-strapi-ibexion.3iondl2h16bmc.eu-central-1.cs.amazonlightsail.com/pages?status=published'
    )
    const pages = await request.json() */

    res.setHeader('Content-Type', 'text/xml')
    res.write(createSitemap(pages))
    res.end()
  }
}

export default Sitemap

{
  /* <url>
<loc>${`${EXTERNAL_DATA_URL}/impressum`}</loc>
</url>
<url>
<loc>${`${EXTERNAL_DATA_URL}/datenschutz`}</loc>
</url>
<url>
<loc>${`${EXTERNAL_DATA_URL}/kontakt`}</loc>
</url>
<url>
<loc>${`${EXTERNAL_DATA_URL}/seminar-reservierung`}</loc>
</url>
<url>
<loc>${`${EXTERNAL_DATA_URL}`}</loc>
</url> */
}
