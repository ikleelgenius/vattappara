'use client'

import React from 'react'
import useVideo from '@/app/hooks/useVideo'
import Video from '../common/Video'
import Link from 'next/link'

const HomePageBanner = () => {
  const { videoRef } = useVideo()

  return (
    <div className="relative w-full aspect-video mt-[-120px]">
      <div className="absolute top-0 left-0 right-0 h-[650px]">
        <Video
          videoRef={videoRef}
          src="https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/videos%2Fsc-banner-video-4.mp4?alt=media&token=0649afc7-6d21-492b-a0ec-8db22af366f3"
        />
      </div>
      <div className="h-[650px] px-3 absolute top-0 left-1/2 -translate-x-1/2 flex-col w-full flex justify-center bg-black/50">
        <div className="max-w-screen-xl mx-auto w-full flex flex-col">
          <div className="w-full cursor-pointer">
            <div className="slide-left text-white">
              <div className="px-6 py-4 flex flex-col items-center justify-center">
                <h1 className="mb-2 text-7xl uppercase font-semibold block hover:text-yellow-400">
                  Welcome
                </h1>
                <h4 className="uppercase font-bold text-xl">
                  Laying Foundations for a Brighter Tomorrow
                </h4>
              </div>
            </div>
            <div className="slide-right text-white w-full flex items-center justify-center mt-3">
              <Link
                href="/who-we-are"
                className="bg-yellow-500 px-6 py-3 w-full md:w-fit uppercase text-sm font-semibold"
              >
                Who We Are
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageBanner
