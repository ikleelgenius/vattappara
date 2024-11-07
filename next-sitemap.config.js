const config = {
  siteUrl: 'https://storyconstruction.vercel.app', // Replace with your site's URL
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  additionalPaths: async () => {
    return [
      '/', // Home page
      '/who-we-are', // About page
      '/services', // Services page
      '/our-work', // Portfolio / Work page
      '/contact-us' // Contact page
    ]
  }
}

export default config
