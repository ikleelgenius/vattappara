import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Apply to all bots
      allow: ['/'] // Allow bots to crawl the homepage
    },
    sitemap: ['https://storyconstruction.vercel.app/sitemap.xml'],
    host: 'https://storyconstruction.vercel.app'
  }
}
