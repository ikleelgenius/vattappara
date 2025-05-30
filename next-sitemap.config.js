const config = {
  siteUrl: 'https://vattappara.com',
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  additionalPaths: async () => {
    return ['/', '/who-we-are', '/services', '/our-work', '/contact-us']
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search?q=']
      }
    ],
    additionalSitemaps: ['https://vattappara.com/sitemap.xml']
  }
}

export default config
