import React from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import Logo from './common/Logo'
import AwesomeIcon from './common/AwesomeIcon'
import { chevronRightIcon, timesIcon } from '../icons'
import { closeNavigationDrawer } from '../redux/features/headerSlice'
import headerLinks from '../data/header-links'
import useCustomPathname from './utils/useCustomPathname'
import Link from 'next/link'

const MobileNavigationDrawer = () => {
  const path = useCustomPathname()
  const { navigationDrawer } = useAppSelector((state: RootState) => state.header)
  const dispatch = useAppDispatch()

  return (
    <div
      className={`${
        navigationDrawer ? 'translate-x-0 ' : 'translate-x-[-100%]'
      } duration-200 no-scrollbar overflow-hidden p-6 w-screen h-full fixed top-0 left-0 bottom-0 right-0 z-[60] transition-all bg-[#16181b]`}
    >
      <div className="flex items-center relative 2-50 justify-between">
        <Logo
          onClick={() => dispatch(closeNavigationDrawer())}
          className="w-40"
          src="/images/logo-01.png"
        />
        <AwesomeIcon
          onClick={() => dispatch(closeNavigationDrawer())}
          icon={timesIcon}
          className="w-6 h-6 text-white"
        />
      </div>
      <div className="w-full h-[1px] bg-slate-700 my-8"></div>
      <div className="flex flex-col gap-y-5 mt-12">
        {headerLinks(path).map((obj, i) => (
          <Link
            onClick={() => dispatch(closeNavigationDrawer())}
            href={obj.linkKey}
            key={i}
            className={`group flex items-center justify-between text-17 font-medium relative duration-200
            ${obj.active ? 'text-sky-400' : 'text-[#999] group-hover:text-sky-400'}
          `}
          >
            <p>{obj.textKey}</p>
            <AwesomeIcon
              icon={chevronRightIcon}
              className={`w-4 h-4 text-[#999]  ${
                obj.active ? 'text-sky-400' : 'text-[#999] group-hover:text-sky-400'
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNavigationDrawer
