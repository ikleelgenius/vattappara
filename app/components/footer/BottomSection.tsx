import React from 'react'
import Link from 'next/link'

const BottomSection = () => {
  return (
    <div className="bg-[#222222] px-3 py-7">
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        <p className="uppercase text-[#919191]">
          &copy; {new Date().getFullYear()} -{' '}
          <span
            onClick={() => window.open('https://sqysh.io', '_blank')}
            className="text-sky-400 cursor-pointer hover:text-sky-300 duration-200"
          >
            Sqysh
          </span>
        </p>
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/privacy-policy" className="text-[#999] duration-200 hover:text-sky-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomSection
