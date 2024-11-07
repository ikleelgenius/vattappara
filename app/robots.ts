import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Apply to all bots
        allow: ['/'], // Allow bots to crawl the homepage
        disallow: ['/search?q='] // Disallow search pages (if applicable)
      }
    ],
    sitemap: ['https://storyconstruction.vercel.app/sitemap.xml'],
    host: 'https://storyconstruction.vercel.app'
  }
}
