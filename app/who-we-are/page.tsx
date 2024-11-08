import React from 'react'
import Banner from '../components/common/Banner'
import AboutUs from '../components/home/AboutUs'
import OurWorkingProcess from '../components/OurWorkingProcess'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who We Are | Story Construction',
  description: 'Learn about Story Construction and our dedicated team of experts.',
  keywords: [
    'about us',
    'our team',
    'construction experts',
    'Story Construction',
    'team of experts',
    'construction company',
    'construction services'
  ],
  openGraph: {
    title: 'Who We Are | Story Construction',
    description: 'Meet the team behind Story Construction and discover our expertise.',
    url: 'https://storyconstruction.vercel.app/who-we-are',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fstory-logo.png?alt=media&token=f3684c62-7df3-49cf-8bc3-6c8c7364ad77',
        width: 1200,
        height: 630,
        alt: 'Story Construction Team'
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

const WhoWeAre = () => {
  return (
    <div>
      <Banner src="/images/who-we-are.jpg" breadcrumb="Who We Are" title="Who We Are" />
      <OurWorkingProcess />
      <AboutUs />
    </div>
  )
}

export default WhoWeAre
