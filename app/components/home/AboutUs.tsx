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
    title: 'Authorised and Certified',
    text: 'We are Authorised and Certified by leading construction material suppliers, ensuring that our products meet the highest standards of quality and safety',
    icon: certificateIcon
  },
  {
    title: 'First in the Market',
    text: 'We are more focused to bring the latest and most innovative materials first to the market',
    icon: peopleGroupIcon
  },
  {
    title: 'Commitment to Quality',
    text: 'We value our customers and make sure the products we supply will last as much our relation with the customers',
    icon: thumbsUpIcon
  },
  {
    title: 'Expert Materials Handling',
    text: 'With years of hands-on experience, our skilled team delivers exceptional products for every project right to match  your need and time',
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
            className="hidden xl:block absolute z-0 -top-20 left-[-250px] w-full max-w-5xl full object-cover aspect-square"
            priority={false}
          />
          <Picture
            src="/images/rotating-circle-2.png"
            alt=""
            className="rotate absolute z-20 -bottom-12 md:left-52 w-52 h-52 rounded-full object-cover"
            priority={false}
          />
          <Picture
            src="/images/logo-5.png"
            alt=""
            className="absolute z-20 bottom-[15px] left-16 md:left-[271px] w-20 h-20 rounded-full object-cover"
            priority={false}
          />
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 xl:col-span-6 col-start-1 sm:col-start-2 lg:col-start-3 xl:col-start-1 order-2 xl:order-1">
              <div className="flex flex-col sm:flex-row items-center gap-y-5 md:gap-10">
                <Picture
                  src="/images/home-card-1.jpg"
                  alt=""
                  className="w-full relative z-10 border-[6px] border-white h-72 sm:h-96 max-w-72 object-cover rounded-tl-[69px] rounded-br-[69px]"
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
            <div className="col-span-12 col-start-1  sm:col-span-9 xl:col-span-6 sm:col-start-3 xl:col-start-7 flex flex-col justify-center xl:items-start items-center gap-y-10 order-1 xl:order-2 relative z-10">
              <div className="flex justify-center xl:justify-start items-center gap-x-3">
                <span className="hidden xl:block w-10 h-[2px] bg-sky-400"></span>
                <p className="text-sky-500 font-medium">About Us</p>
              </div>
              <h1 className="text-5xl font-semibold text-center xl:text-left">
                Where Quality Meets Years of Experience
              </h1>
              <p className="text-17 text-[#6a6a6a] text-center xl:text-left">
                we are in the field of construction material supply for more than 20 years, providing top-notch quality and 
                value materials to our clients. Our Experience is blended with the history of Evolving construction industry and Standards
              </p>

              <div className="grid grid-cols-12 gap-4">
                {companyHighlights.map((obj, i) => (
                  <div key={i} className="col-span-12 md:col-span-6 flex items-center gap-x-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-sky-400">
                      <AwesomeIcon icon={checkIcon} className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <p className="xl:text-[20px] font-bold">{obj.title}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/who-we-are"
                className="bg-sky-400 rounded-sm font-semibold text-white px-7 py-3 w-fit flex self-center xl:self-start"
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
