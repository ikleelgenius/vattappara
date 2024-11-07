import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import './animations.css'
import './fonts.css'
import PageWrapper from './page-wrapper'

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
  title: 'Story Construction - Building Your Dreams',
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
    title: 'Story Construction - Building Your Dreams',
    description:
      'Quality construction services for residential and commercial projects. Your local construction experts.',
    url: 'https://yourwebsite.com/', // Replace with your actual URL
    siteName: 'Story Construction',
    images: [
      {
        url: 'https://yourwebsite.com/images/construction-banner.jpg', // Replace with your image URL
        width: 1200,
        height: 630,
        alt: 'Quality construction work by Story Construction'
      }
    ],
    type: 'website'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
