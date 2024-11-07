import { fbIcon, linkedInIcon } from '@/app/icons'
import React from 'react'
import AwesomeIcon from '../common/AwesomeIcon'

const socialMedia = [
  {
    linkKey: 'https://www.facebook.com/grantstry',
    icon: fbIcon
  },
  {
    linkKey: 'https://www.linkedin.com/in/grant-story-95176841',
    icon: linkedInIcon
  }
]

const SocialMediaSection = () => {
  return (
    <div
      className={`bg-sky-400 flex gap-3 items-center w-fit absolute top-0 -mt-4 px-3 py-1.5
    after:absolute after:content-[''] after:top-0 after:-left-[9px] after:h-0
    after:border-r-[9px] after:border-r-[#222]
    after:border-t-[16px] after:border-t-transparent
    
    `}
    >
      <span className="text-13 mt-1">Follow Us</span>
      <div className="flex items-center gap-2">
        {socialMedia.map((obj, i) => (
          <div
            key={i}
            className="cursor-pointer duration-200 w-7 h-7 rounded-full border-[1px] border-[#333] group flex items-center justify-center hover:bg-[#333]"
          >
            <AwesomeIcon
              icon={obj.icon}
              className="w-3.5 h-3.5 text-[#333] group-hover:text-sky-400"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialMediaSection
