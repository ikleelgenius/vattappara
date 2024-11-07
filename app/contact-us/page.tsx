import React from 'react'
import Banner from '../components/common/Banner'
import LocationMap from '../components/LocationMap'
import { envelopeIcon, locationDotIcon, phoneIcon } from '../icons'
import AwesomeIcon from '../components/common/AwesomeIcon'
import Link from 'next/link'

const contactUs = [
  {
    icon: locationDotIcon,
    title: 'Our Location',
    text: 'Lynn, MA 01901',
    url: ''
  },
  {
    icon: envelopeIcon,
    title: 'Email Address',
    text: 'grant.story.builds@gmail.com',
    url: 'mailto:grant.story.builds@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.'
  },
  {
    icon: phoneIcon,
    title: 'Phone Number',
    text: '(781) 367 7809',
    url: 'tel:(781)3677809'
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
        <LocationMap latitude={42.4668} longitude={-70.9495} />
      </div>
    </div>
  )
}

export default ContactUs
