'use client'

import React, { useState } from 'react'
import Banner from '../components/common/Banner'
import Picture from '../components/common/Picture'
import AwesomeIcon from '../components/common/AwesomeIcon'
import { expandIcon } from '../icons'

const ourWork = [
  '/images/gallery-1.JPG',
  '/images/gallery-2.JPG',
  '/images/gallery-10.jpeg',
  '/images/gallery-3.JPG',
  '/images/gallery-4.JPG',
  '/images/gallery-5.JPG',
  '/images/gallery-6.JPG',
  '/images/gallery-7.JPG',
  '/images/gallery-8.JPG',
  '/images/gallery-9.jpeg',
  '/images/gallery-11.jpeg',
  '/images/gallery-12.jpeg',
  '/images/gallery-13.jpeg'
]

const OurWork = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const firstImage = '/images/b-a-1.png'
  const secondImage = '/images/b-a-2.png'
  const thirdImage = '/images/b-a-3.png'
  const fouthImage = '/images/b-a-4.png'
  const fifthImage = '/images/b-a-5.png'
  const fullImageArray = [firstImage, secondImage, thirdImage, fouthImage, fifthImage, ...ourWork]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? fullImageArray.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === fullImageArray.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div>
      <Banner src="/images/working-with-us.jpg" breadcrumb="Our Work" title="Our Work" />
      <div className="my-32">
        <div className="px-3">
          <div className="max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-y-8 sm:gap-8">
            <Picture
              onClick={() => openLightbox(0)}
              src={firstImage}
              className="col-span-12 w-full object-contain rounded-2xl"
              alt="Gallery Image"
              priority={false}
            />
            <Picture
              onClick={() => openLightbox(1)}
              src={secondImage}
              className="col-span-12 w-full object-contain rounded-2xl"
              alt="Gallery Image"
              priority={false}
            />
            <Picture
              onClick={() => openLightbox(2)}
              src={thirdImage}
              className="col-span-12 w-full object-contain rounded-2xl"
              alt="Gallery Image"
              priority={false}
            />
            <Picture
              onClick={() => openLightbox(3)}
              src={fouthImage}
              className="col-span-12 w-full object-contain rounded-2xl"
              alt="Gallery Image"
              priority={false}
            />
            <Picture
              onClick={() => openLightbox(4)}
              src={fifthImage}
              className="col-span-12 w-full object-contain rounded-2xl"
              alt="Gallery Image"
              priority={false}
            />
            {ourWork.map((img, i) => (
              <div
                onClick={() => openLightbox(i + 5)}
                key={i}
                className="relative cursor-pointer overflow-hidden group rounded-2xl col-span-12 sm:col-span-6 md:col-span-4"
              >
                <div className="bg-sky-400 w-16 h-16 rounded-full absolute opacity-0 z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 duration-300 flex items-center justify-center">
                  <AwesomeIcon icon={expandIcon} className="w-7 h-7 text-white" />
                </div>
                <Picture
                  src={img}
                  className="w-full h-full aspect-video sm:aspect-square duration-300 group-hover:scale-150"
                  alt={`Gallery Image ${i + 1}`}
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
          <div className="relative w-full">
            <Picture
              src={fullImageArray[currentImageIndex]}
              className="max-w-full w-full h-full max-h-screen object-contain"
              alt={`Gallery Image ${currentImageIndex + 1}`}
              priority={true}
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default OurWork
