'use client'

import {  treeIcon } from '@/app/icons'
import { faBath, IconDefinition,faHammer,faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import Link from 'next/link'
import useAnimateOnScroll from '@/app/hooks/useAnimateOnScroll'

interface CommitmentInEveryProjectProps {
  icon: IconDefinition
  title: string
  text: string
}

const whoWeAre: CommitmentInEveryProjectProps[] = [
  {
    icon: faHammer,
    title: 'Construction Materials',
    text: `We supply Cements,steels,TMT bars,GI pipes,Meshes and all other materials needed for construction`
  },
  {
    icon: faPeopleRoof,
    title: 'Roofing Solutions',
    text: 'We are leading suppliers of All major branded roofing sheets and accessories, ensuring quality and durability for your projects.'
  },
  {
    icon: treeIcon,
    title: 'Landscaping Services',
    text: 'From parks to gardens, we create landscapes that enhance the beauty of the outdoors, crafted to meet your requirements and vision, we have a dedicated team of experts for landscaping works'
  }
]

const WhoWeAre = () => {
  const { refs, visibleItems } = useAnimateOnScroll()
  return (
    <div className="w-full py-20">
      <div className="px-3">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-y-10">
          <div className="flex items-center justify-center sm:justify-start gap-x-3">
            <span className="hidden sm:block w-10 h-[2px] bg-sky-400"></span>
            <p className="text-sky-500 font-medium text-lg">What We Deliver</p>
          </div>
          <h1 className="text-5xl font-semibold text-center sm:text-left">
            Bring innovation and quality to every project
          </h1>
          <div className="grid grid-cols-12 gap-6">
            {whoWeAre.map((obj, i) => (
              <Link
                ref={(el) => {
                  if (el) refs.current[i] = el
                }}
                href="/products"
                key={i}
                className={`col-span-12 md:col-span-4 transition-all duration-700 transform flex flex-col bg-white h-full rounded-lg border-[1px] border-gray-200 p-7 group relative overflow-hidden
                    ${
                      visibleItems.has(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }
                  `}
              >
                <div className="absolute bottom-0 left-0 h-full w-full bg-black/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-20"></div>
                <div className="w-16 h-16 rounded-full bg-sky-200 flex items-center justify-center mb-5 relative z-10">
                  <AwesomeIcon icon={obj.icon} className="w-6 h-6 text-sky-500" />
                </div>
                <h2 className="text-2xl font-bold mb-5 relative z-30 duration-500 group-hover:delay-200 group-hover:-translate-y-20 group-hover:text-white ease-[cubic-bezier(0.3,1.5,0.5,1)]">
                  {obj.title}
                </h2>
                <p className="text-[#6a6a6a] relative z-30 duration-500 group-hover:delay-200 group-hover:-translate-y-20 group-hover:text-white ease-[cubic-bezier(0.3,1.5,0.5,1)]">
                  {obj.text}
                </p>
                <span className="text-white opacity-0 group-hover:opacity-100 absolute group-hover:font-bold group-hover:-bottom-16 group-hover:left-7 z-30 duration-500 group-hover:delay-200 group-hover:-translate-y-20 group-hover:text-white ease-[cubic-bezier(0.3,1.5,0.5,1)]">
                  View Details
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
