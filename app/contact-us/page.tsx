import React from 'react'
import Banner from '../components/common/Banner'
import LocationMap from '../components/LocationMap'
import { envelopeIcon, locationDotIcon, phoneIcon } from '../icons'
import AwesomeIcon from '../components/common/AwesomeIcon'
import Link from 'next/link'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Vattappara.com',
  description:
    'Get in touch with Story Vattappara traders for consultations, quotes, and project inquiries.',
  keywords: [
    'contact Vattappara.com',
    'construction materials',
    'construction quotes',
    'project inquiries',
    'contact us',
    'construction products inquiry',
    'construction project quotes'
  ],
  openGraph: {
    title: 'Contact Us | Vattappara.com',
    description: 'Reach out to Vattappara traders for your next construction project.',
    url: 'https://vattappara.com/contact-us',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fstory-logo.png?alt=media&token=f3684c62-7df3-49cf-8bc3-6c8c7364ad77',
        width: 1200,
        height: 630,
        alt: 'Vattappara Traders'
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
}

const contactUs = [
  {
    icon: locationDotIcon,
    title: 'Our Location',
    text: 'Edavannappara',
    url: ''
  },
  {
    icon: envelopeIcon,
    title: 'Email Address',
    text: 'vattapparaonline@gmail.com',
    url: 'mailto:vattapparaonline@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.'
  },
  {
    icon: phoneIcon,
    title: 'Phone Number',
    text: '+91 9387889912',
    url: 'tel:+91 9387889912'
  }
]

const ContactUs = () => {
  return (
    <div>
      <Banner src="/images/contact-us.jpg" breadcrumb="Contact Us" title="Contact Us" />
      <div className="px-3 md:px-28 xl:px-0">
        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-12 gap-6 py-32">
          {contactUs.map((obj, i) =>
            obj.url ? (
              <Link
                key={i}
                href={obj.url}
                className="col-span-12 sm:col-span-6 xl:col-span-4 flex flex-col items-center justify-center py-16 border-[1px] border-gray-200 rounded-xl"
              >
                <AwesomeIcon icon={obj.icon} className="w-12 h-12 text-sky-400 mb-7" />
                <h2 className="font-bold text-2xl mb-5">{obj.title}</h2>
                <p className="text-[#6a6a6a] text-17">{obj.text}</p>
              </Link>
            ) : (
              <div
                key={i}
                className="col-span-12 sm:col-span-6 xl:col-span-4 flex flex-col items-center justify-center py-16 border-[1px] border-gray-200 rounded-xl"
              >
                <AwesomeIcon icon={obj.icon} className="w-12 h-12 text-sky-400 mb-7" />
                <h2 className="font-bold text-2xl mb-5">{obj.title}</h2>
                <p className="text-[#6a6a6a] text-17">{obj.text}</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="relative w-full h-[500px]">
        , 
        <LocationMap latitude={11.241827228757654} longitude={75.97658212019064} />
      </div>
    </div>
  )
}

export default ContactUs
