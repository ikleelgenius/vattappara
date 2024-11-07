import React from 'react'
import Picture from '../common/Picture'
import AwesomeIcon from '../common/AwesomeIcon'
import { chevronRightIcon } from '@/app/icons'
import Link from 'next/link'

const latestProjects = [
  {
    src: '/images/gallery-1.JPG',
    div: 'col-span-12 sm:col-span-4 row-span-6'
  },
  {
    src: '/images/gallery-4.JPG',
    div: 'col-span-12 sm:col-span-4 row-span-5'
  },
  {
    src: '/images/gallery-6.JPG',
    div: 'col-span-12 sm:col-span-4 row-span-6'
  },
  {
    src: '/images/gallery-8.JPG',
    div: 'col-span-12 sm:row-start-7 sm:col-span-4 row-span-4'
  },
  {
    src: '/images/gallery-11.jpeg',
    div: 'col-span-12 sm:row-start-6 sm:col-start-5 sm:col-span-4 row-span-5'
  },
  {
    src: '/images/home-card-1.jpg',
    div: 'col-span-12 sm:row-start-7 sm:col-start-9 sm:col-span-4 row-span-4'
  }
]

const LatestProjects = () => {
  return (
    <div className="w-full py-40 relative">
      <div className="px-3">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-y-10">
          <div className="flex items-center justify-center sm:justify-start gap-x-3">
            <span className="hidden sm:block w-10 h-[2px] bg-sky-400"></span>
            <p className="text-sky-500 font-medium text-lg">Latest Projects</p>
          </div>
          <h1 className="text-5xl font-semibold max-w-screen-sm w-full text-center sm:text-left">
            Discover What We&apos;ve Been Creating for Our Clients
          </h1>
          <div className="grid grid-cols-12 gap-4 md:gap-4 xl:gap-8 dynamic-grid-rows">
            {latestProjects.map((obj, i) => (
              <Link
                href="/our-work"
                key={i}
                className={`${obj.div} relative cursor-pointer overflow-hidden group rounded-2xl`}
              >
                <Picture
                  src={obj.src}
                  alt="Story Construction"
                  className="w-full h-full aspect-video md:aspect-auto object-cover duration-300 group-hover:scale-150"
                  priority={false}
                />
                <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center font-bold absolute -translate-x-16 bottom-7 group-hover:translate-x-8 duration-300">
                  <AwesomeIcon icon={chevronRightIcon} className="w-5 h-5 text-sky-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestProjects
