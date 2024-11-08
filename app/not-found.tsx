import React, { Fragment } from 'react'
import Picture from './components/common/Picture'
import Link from 'next/link'
import Banner from './components/common/Banner'

const NotFound = () => {
  return (
    <Fragment>
      <Banner src="/images/not-found.jpg" breadcrumb="404 Error" title="404 Error" />
      <div className="my-32">
        <div className="px-3">
          <div className="max-w-screen-xl w-full mx-auto flex flex-col justify-center items-center">
            <Picture
              src="/images/story-404.png"
              alt="Not Found 404"
              className="w-full max-w-screen-sm h-full mb-10"
              priority={true}
            />

            <Link
              href="/"
              className="bg-sky-400 px-7 py-4 text-white font-bold text-center hover:bg-sky-500 duration-200"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NotFound
