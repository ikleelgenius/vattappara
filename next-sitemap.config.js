const config = {
  siteUrl: 'https://storyconstruction.info',
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
    additionalSitemaps: ['https://storyconstruction.info/sitemap.xml']
  }
}

export default config
