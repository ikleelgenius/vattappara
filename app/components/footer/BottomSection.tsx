import React from 'react'

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
            vattappara.com
          </span>
        </p>
      </div>
    </div>
  )
}

export default BottomSection
