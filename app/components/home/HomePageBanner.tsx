'use client'

import React, { useState } from 'react'
import useVideo from '@/app/hooks/useVideo'
import Video from '../common/Video'
import Link from 'next/link'
import Picture from '../common/Picture'

const HomePageBanner = () => {
  const { videoRef } = useVideo()
  const [loading, setLoading] = useState(true)

  return (
    <div className="relative w-full min-h-screen sm:min-h-fit sm:h-[950px] -mt-20 sm:-mt-32">
      <div className="absolute top-0 left-0 right-0 h-full">
        {loading && (
          <Picture
            alt=""
            src="/images/loading-home-01.png"
            className="w-full h-full object-cover"
            priority={true}
          />
        )}
        <Video setLoading={setLoading} videoRef={videoRef} src="/videos/banner.mp4" />
      </div>
      <div className="min-h-screen sm:min-h-fit sm:h-[950px] px-3 absolute top-0 left-1/2 -translate-x-1/2 flex-col w-full flex justify-center">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col">
          <div className="w-full">
            <div className="slide-left text-white">
              <div className="py-4 flex flex-col">
                <h4 className="uppercase text-2xl tracking-wide font-semibold mb-5">
                  Let&apos;s work together
                </h4>
                <h1 className="mb-2 text-5xl sm:text-7xl uppercase font-black sm:tracking-widest max-w-screen-lg w-full">
                  Building Legacies that Last
                </h1>
                <h5 className="hidden sm:block text-xl font-medium max-w-lg w-full">
                  Crafting enduring structures with quality, integrity, and a commitment to
                  excellence
                </h5>
              </div>
            </div>
            <div className="slide-right text-white w-full flex items-center mt-3">
              <Link
                href="/contact-us"
                className="bg-sky-400 w-fit px-7 py-4 rounded-sm font-semibold hover:opacity-70 duration-200"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageBanner
