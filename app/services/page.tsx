'use client'

import React from 'react'
import Banner from '../components/common/Banner'
import { RootState, useAppSelector } from '../redux/store'
import AwesomeIcon from '../components/common/AwesomeIcon'
import highlightText from '../utils/hightlightText'
import Head from 'next/head'

const Services = () => {
  const { servicesData, keyword } = useAppSelector((state: RootState) => state.header)

  return (
    <>
      <Head>
        <title>Services | Story Construction</title>
        <meta
          name="description"
          content="Explore the construction services offered by Story Construction, including residential, commercial, and custom building services."
        />
        <meta
          name="keywords"
          content="construction services, residential construction, commercial construction, custom building services, home renovations, remodeling, new construction, building contractors"
        />
        <meta property="og:title" content="Services | Story Construction" />
        <meta
          property="og:description"
          content="Discover the professional construction services provided by Story Construction, specializing in residential, commercial, and custom projects."
        />
        <meta property="og:url" content="https://storyconstruction.vercel.app/services" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fstory-logo.png?alt=media&token=f3684c62-7df3-49cf-8bc3-6c8c7364ad77"
        />
        <meta name="robots" content="index, follow" />
      </Head>
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
