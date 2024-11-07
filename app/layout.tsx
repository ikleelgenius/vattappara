import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import './animations.css'
import './fonts.css'
import PageWrapper from './page-wrapper'
import Head from 'next/head'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://storyconstruction.vercel.app'),
  title: 'Story Construction',
  description:
    'Story Construction specializes in residential and commercial construction services, delivering quality workmanship and customer satisfaction. Your trusted partner in construction projects.',
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
    title: 'Story Construction',
    description:
      'Quality construction services for residential and commercial projects. Your local construction experts.',
    url: 'https://storyconstruction.vercel.app/',
    siteName: 'Story Construction',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fstory-logo.png?alt=media&token=f3684c62-7df3-49cf-8bc3-6c8c7364ad77',
        width: 1200,
        height: 630,
        alt: 'Quality construction work by Story Construction'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true, // `true` to allow indexing, `false` to disallow
    follow: true, // `true` to allow following links, `false` to disallow
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  applicationName: 'Story Construction',
  appleWebApp: {
    title: 'Story Construction',
    statusBarStyle: 'default',
    capable: true
  },
  alternates: {
    canonical: 'https://storyconstruction.vercel.app'
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Story Construction',
              url: 'https://storyconstruction.vercel.app',
              logo: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fstory-logo.png?alt=media&token=f3684c62-7df3-49cf-8bc3-6c8c7364ad77',
              description:
                'Story Construction specializes in residential and commercial construction services...',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-781-367-7809',
                contactType: 'Customer Service',
                areaServed: 'US',
                availableLanguage: 'en'
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lynn',
                addressRegion: 'MA',
                postalCode: '01901',
                addressCountry: 'US'
              }
            })
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
