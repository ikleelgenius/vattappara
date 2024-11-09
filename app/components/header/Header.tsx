import React, { Fragment } from 'react'
import useCustomPathname from '../../utils/useCustomPathname'
import {
  barsIcon,
  envelopeIcon,
  locationDotIcon,
  magnifyingGlassIcon,
  phoneIcon
} from '@/app/icons'
import headerLinks from '@/app/data/header-links'
import AwesomeIcon from '../common/AwesomeIcon'
import Logo from '../common/Logo'
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import { useAppDispatch } from '@/app/redux/store'
import { openKeywordModal, openNavigationDrawer } from '@/app/redux/features/headerSlice'

const Header = () => {
  const path = useCustomPathname()
  const dispatch = useAppDispatch()

  return (
    <Fragment>
      <div className="sticky top-0 z-50 max-w-screen-xl mx-auto w-full h-20 lg:h-32">
        <div className="flex h-full">
          <div className="bg-[#13181b] mx-3 lg:mx-auto w-full lg:w-fit flex items-center justify-between">
            <div className="lg:bg-white lg:w-64 h-full flex lg:justify-center items-center rounded-br-[69px] px-3 lg:px-7">
              <Logo src="/images/logo-4.png" className="w-full h-auto hidden lg:flex" />
              <Logo src="/images/logo-01.png" className="w-28 h-auto flex lg:hidden" />
            </div>
            <AwesomeIcon
              onClick={() => {
                dispatch(openNavigationDrawer())
              }}
              icon={barsIcon}
              className="block lg:hidden w-5 h-5 text-white hover:text-sky-400 duration-300 px-3"
            />
          </div>
          <div className="hidden lg:flex flex-col w-full">
            <div className="bg-sky-400 h-10 text-white py-2 px-6 w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AwesomeIcon icon={locationDotIcon} className="w-3 h-3" />
                <span className="font-medium">Lynn, MA 01901</span>
              </div>
              <div className="flex items-center h-full gap-5">
                <div className="flex items-center gap-2">
                  <AwesomeIcon icon={phoneIcon} className="w-3 h-3" />
                  <a href="tel:(781)3677809" className="font-medium">
                    (781) 367 7809
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <AwesomeIcon icon={envelopeIcon} className="w-3 h-3" />
                  <a
                    href="mailto:grant.story.build@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    className="font-medium"
                  >
                    grant.story.build@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden bg-[#13181b] w-full h-[100px] lg:flex items-center justify-between px-6 overflow-hidden">
              <div className="flex items-center gap-x-10 ">
                {headerLinks(path).map((link, i) => (
                  <HeaderLink
                    key={i}
                    linkKey={link.linkKey}
                    active={link.active}
                    textKey={link.textKey}
                  />
                ))}
              </div>
              <div className="flex items-center gap-x-12">
                <button
                  onClick={() => dispatch(openKeywordModal())}
                  className={`relative
                  after:absolute after:content-[''] after:w-12 after:-top-20
                  after:-left-[18px] after:opacity-5 after:z-10 after:h-48
                  after:rotate-[27deg] after:bg-white
                  `}
                >
                  <AwesomeIcon
                    icon={magnifyingGlassIcon}
                    className={`w-5 h-5 text-white 
                  `}
                  />
                </button>
                <Link
                  href="/contact-us"
                  className="bg-white rounded-sm px-6 py-2 text-sky-400 font-medium"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
