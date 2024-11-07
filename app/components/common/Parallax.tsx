'use client'

import useParallax from '@/app/hooks/useParallax'
import Link from 'next/link'
import React, { FC } from 'react'

interface ParallaxProps {
  image: string
}

const Parallax: FC<ParallaxProps> = ({ image }) => {
  const { scrollY } = useParallax(0.4)

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-screen bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(-${scrollY}px)`
        }}
      />
      <div className="relative z-10 h-full text-white bg-black/40 px-3">
        <div className="flex flex-col max-w-screen-xl mx-auto w-full justify-center h-full">
          <h5 className="text-15 font-bold uppercase mb-1.5 tracking-wider">Working With Us</h5>
          <h1 className="uppercase font-bold text-4xl w-full max-w-xl">
            Contractors & Construction For Over 25 Years
          </h1>
          <Link
            href="/contact-us"
            className="border-2 border-white text-white px-5 py-1.5 w-fit uppercase mt-5 font-bold text-sm tracking-wider hover:bg-white hover:text-zinc-800 duration-200"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Parallax
