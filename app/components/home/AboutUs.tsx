import React from 'react'
import Picture from '../common/Picture'
import AwesomeIcon from '../common/AwesomeIcon'
import { certificateIcon, checkIcon, hammerIcon, peopleGroupIcon, thumbsUpIcon } from '@/app/icons'
import Link from 'next/link'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface companyHightlightsProps {
  title: string
  text: string
  icon: IconDefinition
}

export const companyHighlights: companyHightlightsProps[] = [
  {
    title: 'U.S. Certified Contractors',
    text: 'At our North Shore construction company, we recognize the importance of creating spaces that meet the unique needs of our community. We are committed to delivering buildings that not only serve their purpose but also enhance the organizations and individuals who use them.',
    icon: certificateIcon
  },
  {
    title: 'Community-Focused Construction',
    text: 'We understand the challenges that come with developing high-quality environments that are both functional and efficient. Our experience allows us to navigate these challenges while ensuring that our projects contribute positively to the community.',
    icon: peopleGroupIcon
  },
  {
    title: 'Commitment to Quality',
    text: 'Our dedication extends beyond individual projects; we aim to improve the quality of life for everyone in our area. By prioritizing sustainable practices and local involvement, we strive to make a lasting impact in the communities we serve.',
    icon: thumbsUpIcon
  },
  {
    title: 'Expert Craftsmanship',
    text: 'With years of hands-on experience, our skilled team delivers exceptional workmanship on every project. We take pride in our attention to detail and strive to exceed expectations with each build.',
    icon: hammerIcon
  }
]

const AboutUs = () => {
  return (
    <div className="w-full pt-40 pb-52 bg-white relative h-fit">
      <div className="px-3">
        <div className="max-w-screen-xl mx-auto w-full relative">
          <Picture
            src="/images/abstract-5.png"
            alt=""
            className="hidden sm:block absolute z-0 -top-20 left-[-250px] w-full max-w-5xl full object-cover aspect-square"
            priority={false}
          />
          <Picture
            src="/images/rotating-circle-2.png"
            alt=""
            className="rotate absolute z-20 -bottom-12 sm:left-52 w-52 h-52 rounded-full object-cover"
            priority={false}
          />
          <Picture
            src="/images/logo-5.png"
            alt=""
            className="absolute z-20 bottom-[15px] left-16 sm:left-[271px] w-20 h-20 rounded-full object-cover"
            priority={false}
          />
          <div className="grid grid-cols-12 gap-y-8 sm:gap-x-16">
            <div className="col-span-12 md:col-span-6 order-2 sm:order-1">
              <div className="flex flex-col sm:flex-row items-center gap-y-5 sm:gap-10">
                <Picture
                  src="/images/home-card-1.jpg"
                  alt=""
                  className="w-full relative z-10 border-[6px] border-white h-96 max-w-72 object-cover rounded-tl-[69px] rounded-br-[69px]"
                  priority={false}
                />
                <div className="flex flex-col gap-y-10 relative z-10">
                  <Picture
                    src="/images/home-card-2.jpg"
                    alt=""
                    className="w-full border-[6px] border-white h-72 max-w-72 object-cover rounded-tl-[69px] rounded-br-[69px]"
                    priority={false}
                  />
                  <Picture
                    src="/images/home-card-3.jpg"
                    alt=""
                    className="w-full border-[6px] border-white h-72 max-w-72 object-cover rounded-tr-[69px] rounded-bl-[69px]"
                    priority={false}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center gap-y-10 order-1 sm:order-2 relative z-10">
              <div className="flex justify-center sm:justify-start items-center gap-x-3">
                <span className="hidden sm:block w-10 h-[2px] bg-sky-400"></span>
                <p className="text-sky-500 font-medium">About Us</p>
              </div>
              <h1 className="text-5xl font-semibold text-center sm:text-left">
                Where Quality Meets Local Expertise
              </h1>
              <p className="text-17 text-[#6a6a6a]">
                Proudly serving Boston with skilled craftsmanship and a commitment to excellence.
                Constructing reliable solutions for your unique needs.
              </p>

              <div className="grid grid-cols-12 gap-4">
                {companyHighlights.map((obj, i) => (
                  <div key={i} className="col-span-12 md:col-span-6 flex items-center gap-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-sky-400">
                      <AwesomeIcon icon={checkIcon} className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <p className="sm:text-[20px] font-bold">{obj.title}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/who-we-are"
                className="bg-sky-400 rounded-sm font-semibold text-white px-7 py-3 w-fit flex self-center"
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
