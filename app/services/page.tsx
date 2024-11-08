'use client'

import React from 'react'
import Banner from '../components/common/Banner'
import { RootState, useAppSelector } from '../redux/store'
import AwesomeIcon from '../components/common/AwesomeIcon'
import highlightText from '../utils/hightlightText'

const Services = () => {
  const { servicesData, keyword } = useAppSelector((state: RootState) => state.header)

  return (
    <>
      <Banner src="/images/services.jpg" breadcrumb="Services" title="Services" />
      <div className="px-3 md:px-28 xl:px-0 py-32">
        <div className="max-w-screen-xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-x-3 mb-5">
              <span className="w-10 h-[2px] bg-sky-400"></span>
              <p className="text-sky-500 font-medium text-lg">What We Do</p>
              <span className="w-10 h-[2px] bg-sky-400"></span>
            </div>
            <h1 className="text-5xl font-semibold">Quality Construction, Done Right</h1>
          </div>
          <div className=" grid grid-cols-12 gap-6 py-32">
            {servicesData.map((obj, i) => (
              <div
                key={i}
                className="card col-span-12 sm:col-span-6 xl:col-span-4 flex flex-col justify-center px-9 py-6 border-[1px] border-gray-200 rounded-xl"
              >
                <div className="relative z-10">
                  <AwesomeIcon icon={obj.icon} className="w-12 h-12 text-sky-400 mb-7" />
                  <h2 className="font-bold text-2xl mb-5">{highlightText(obj.title, keyword)}</h2>
                  <p className="text-[#6a6a6a] text-17">{highlightText(obj.text, keyword)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
