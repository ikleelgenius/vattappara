import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import './animations.css'
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
  title: 'Story Construction',
  description:
    'A modern web app for showcasing construction projects with a home page and an about section, built with Next.js.'
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
