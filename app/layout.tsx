import type { Metadata } from 'next'
import './globals.css'
import './animations.css'
import './fonts.css'
import PageWrapper from './page-wrapper'

export const metadata: Metadata = {
  metadataBase: new URL('https://vattappara.com'),
  title: 'Vattappara Trading Corporation',
  description:
    'Quality construction materials suppliers in Kerala',
  keywords: [
    'Story Construction',
    'construction',
    'contractors',
    'construction services',
    'home builders',
    'commercial construction',
    'residential construction',
    'custom home builders',
    'remodeling services',
    'kitchen remodeling',
    'bathroom remodeling',
    'deck construction',
    'new home construction',
    'construction management',
    'licensed contractors',
    'insured contractors',
    'affordable construction',
    'construction near me',
    'construction in Lynn',
    'Lynn contractors',
    'Lynn construction services',
    'local construction companies',
    'best construction company in Lynn',
    'free construction estimates',
    'site development',
    'energy-efficient building',
    'project management',
    'architectural services',
    'landscape design',
    'home staging',
    'commercial tenant improvements',
    'historical building restoration',
    'smart home construction',
    'modular construction',
    'prefabricated homes',
    'construction consulting',
    'reliable contractors in Lynn',
    'trusted construction company in Lynn',
    'quality workmanship in construction',
    'steps to planning a home addition',
    'common mistakes in home construction projects'
  ],
  openGraph: {
    title: 'Vattappara Trading Corporation',
    description:
      'High quality branded construction materials suppliers in Kerala',
    url: 'https://vattappara.com',
    siteName: 'vattappara tradings',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fsc-rich-preview.png?alt=media&token=4a2c1366-2bba-4a91-83ad-197dc655b8c9',
        width: 1200,
        height: 630,
        alt: 'Story Construction logo'
      }
    ],
    videos: [
      {
        url: 'https://www.storyconstruction.info/videos/banner.mp4',
        width: 1280,
        height: 720,
        type: 'video/mp4'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  applicationName: 'Vattappara Trading Corporation',
  appleWebApp: {
    title: 'vattappara tradings',
    statusBarStyle: 'default',
    capable: true
  },
  alternates: {
    canonical: 'https://vattappara.com',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes', // Add this for legacy support
    'mobile-web-app-capable': 'yes' // This will explicitly cover modern cases
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="564568406325241" />
      </head>
      <body className={`antialiased`}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
