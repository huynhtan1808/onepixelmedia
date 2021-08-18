import React from "react"

const BASE_URL = "https://onepixelmedia.com/"
const DATA_URL = process.env.DATA_URL || "http://localhost:1337/pages"

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map(({ slug, updated_at }) => {
            return `
                    <url>
                        <loc>${`${BASE_URL}${slug}`}</loc>
                        <lastmod>${updated_at}</lastmod>
                        <priority>1.0</priority>
                    </url>
                `
          })
          .join("")}
    </urlset>
    `

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(DATA_URL)
    const posts = await request.json()

    res.setHeader("Content-Type", "text/xml")
    res.write(createSitemap(posts))
    res.end()
  }
}

export default Sitemap
