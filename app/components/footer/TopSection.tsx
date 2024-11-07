import headerLinks from '@/app/data/header-links'
import React from 'react'
import useCustomPathname from '../utils/useCustomPathname'
import AwesomeIcon from '../common/AwesomeIcon'
import { clockIcon, mapMarkerIcon, phoneIcon } from '@/app/icons'
import SocialMediaSection from './SocialMediaSection'
import HeaderLink from '../header/HeaderLink'

const TopSection = () => {
  const pathname = useCustomPathname()
  return (
    <div className="bg-[#111111] px-3 py-20 relative">
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-12 gap-5 md:gap-10 lg:gap-20">
        <SocialMediaSection />
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h5 className="text-[#eee] uppercase text-lg mb-4 font-bold">About Company</h5>
          <p className="text-[#999] text-17">
            Story Construction works with clients on Boston’s North Shore, focusing on homeowners
            who value quality, attention to detail, and a seamless, personalized experience from
            start to finish.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col">
          <h5 className="text-[#eee] uppercase text-lg mb-4 font-bold">Navigation Hub</h5>
          <div className="grid grid-cols-12 gap-4">
            {headerLinks(pathname).map((link, i) => (
              <div key={i} className="col-span-12 md:col-span-6 lg:col-span-6">
                <HeaderLink linkKey={link.linkKey} active={link.active} textKey={link.textKey} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col">
          <h5 className="text-[#eee] uppercase text-lg mb-4 font-bold">Business Hours</h5>
          <div className="flex items-center justify-between text-[#999] text-17">
            <div className="grid grid-cols-12 gap-4 mb-2">
              <div className="col-span-1">
                <AwesomeIcon icon={clockIcon} className="w-3 h-3 text-[#999]" />
              </div>
              <div className="col-span-11">
                <span className="text-[#999] text-17">
                  Monday - Friday&nbsp;&nbsp;&nbsp;9am to 5pm
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col">
          <h5 className="text-[#eee] uppercase text-lg mb-4 font-bold">Construction Office</h5>
          <div className="grid grid-cols-12 gap-4 mb-2">
            <div className="col-span-1">
              <AwesomeIcon icon={mapMarkerIcon} className="w-3 h-3 text-[#999]" />
            </div>
            <div className="col-span-11">
              <span className="text-[#999] text-17">Lynn, MA 01901</span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1">
              <AwesomeIcon icon={phoneIcon} className="w-3 h-3 text-[#999]" />
            </div>
            <div className="col-span-11">
              <a href="tel:(781)3677809" className="text-[#999] text-17">
                1.781.367.7809
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection
