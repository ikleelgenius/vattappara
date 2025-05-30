import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { clipboardCheckIcon, commentsIcon, draftingCompassIcon, hammerIcon } from '../icons'
import AwesomeIcon from './common/AwesomeIcon'
import Picture from './common/Picture'

interface OurWorkingProcessProps {
  step: string
  icon: IconDefinition
  title: string
  text: string
}

const ourWorkingProcess: OurWorkingProcessProps[] = [
  {
    step: '01',
    icon: commentsIcon,
    title: 'Consult & Plan',
    text: 'We discuss your vision and outline a personalized plan to set your requirements on the right track.'
  },
  {
    step: '02',
    icon: draftingCompassIcon,
    title: 'Budget Planning',
    text: 'Make a plan of your budget and timeline, ensuring we align with your expectations and project needs'
  },
  {
    step: '03',
    icon: hammerIcon,
    title: 'Product listing',
    text: 'Make the right choice with our expert guidance, selecting the best products for your project needs.'
  },
  {
    step: '04',
    icon: clipboardCheckIcon,
    title: 'Get Delivered',
    text: 'Get assured to receive your products on time, with our reliable delivery service ensuring everything arrives as planned.'
  }
]

const OurWorkingProcess = () => {
  return (
    <div className="px-3 lg:px-0 py-32">
      <div className="max-w-screen-xl md:max-w-screen-md xl:max-w-screen-xl mx-auto w-full ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-x-3 mb-5">
            <span className="w-10 h-[2px] bg-sky-400"></span>
            <p className="text-sky-500 font-medium text-lg">What We Do</p>
            <span className="w-10 h-[2px] bg-sky-400"></span>
          </div>
          <h1 className="text-5xl font-semibold text-center">Quality Products, Trusted Brands</h1>
        </div>
        <div className="grid grid-cols-12 gap-y-12 sm:gap-12 py-32 relative">
          {ourWorkingProcess.map((obj, i) => (
            <div
              key={i}
              className={`group col-span-12 sm:col-span-6 xl:col-span-3 relative z-10 flex flex-col items-center px-10 ${
                i === 0 || i === 2 ? 'xl:mt-8' : ''
              }`}
            >
              <div
                className="relative z-10 w-36 h-36 rounded-full bg-white flex items-center justify-center mb-9 sm:mb-12 shadow-[0px_0px_60px_rgba(21,24,27,0.1)]
                border-b-[5.5px] border-b-sky-400
              "
              >
                <span className="absolute top-2 right-2 bg-zinc-800 text-white font-bold rounded-full w-9 h-9 text-lg flex items-center justify-center duration-300 group-hover:bg-sky-400">
                  {obj.step}
                </span>
                <AwesomeIcon icon={obj.icon} className="w-12 h-12 text-zinc-800" />
              </div>
              <h2 className="font-bold text-2xl mb-5 text-center group-hover:text-sky-400 duration-300">
                {obj.title}
              </h2>
              <p className="text-[#6a6a6a] text-17 text-center max-w-56">{obj.text}</p>
            </div>
          ))}
          <Picture
            src="/images/curve.png"
            alt=""
            className="curvy-dotted-line hidden xl:block w-full max-w-[1280px] h-auto absolute top-1/4 left-0 z-0 rotate-[-7deg]"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}

export default OurWorkingProcess
