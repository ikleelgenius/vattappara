'use client'

import React, { FC } from 'react'
import { BannerProps } from '@/app/types/common-types'
import Picture from './Picture'
import Breadcrumb from './Breadcrumb'

const Banner: FC<BannerProps> = ({ src, title, breadcrumb }) => {
  return (
    <div className="relative w-full h-[400px] sm:h-[600px] -mt-20 sm:-mt-32">
      <Picture
        src={src}
        alt="Story Construction"
        className="w-full h-full object-cover"
        priority={true}
      />
      <div
        className="absolute z-10 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full 
      h-full flex justify-center bg-black/70 px-3"
      >
        <div className="max-w-screen-md mx-auto w-full flex flex-col justify-center items-center sm:pt-32">
          <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            {title}
          </h1>
          <Breadcrumb breadcrumb={breadcrumb} />
        </div>
      </div>
    </div>
  )
}

export default Banner
