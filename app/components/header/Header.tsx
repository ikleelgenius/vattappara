import React, { Fragment } from 'react'
import useCustomPathname from '../utils/useCustomPathname'
import { barsIcon, magnifyingGlassIcon } from '@/app/icons'
import { openKeywordModal, openNavigationDrawer } from '@/app/redux/features/headerSlice'
import headerLinks from '@/app/data/header-links'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import AwesomeIcon from '../common/AwesomeIcon'
import HeaderLink from './HeaderLink'
import Logo from '../common/Logo'
import useAtTopOfPage from '@/app/hooks/useAtTopOfPage'

const Header = () => {
  const dispatch = useAppDispatch()
  const path = useCustomPathname()
  const { navigationDrawer } = useAppSelector((state: RootState) => state.header)
  const isAtTop = useAtTopOfPage()

  return (
    <Fragment>
      <div className="px-6 h-10">
        <div className="max-w-screen-xl mx-auto w-full flex relative z-10 gap-x-3 items-center justify-end h-full">
          <AwesomeIcon
            onClick={() => dispatch(openKeywordModal())}
            icon={magnifyingGlassIcon}
            className="text-white w-3 h-3 duration-200 hover:text-orange-500 cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`transform duration-200 ease-in-out sticky top-0 z-50 py-2 transition-all ${
          isAtTop ? 'bg-black/50' : 'bg-transparent'
        }`}
      >
        <div className="h-12 overflow-hidden px-3">
          <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between h-full">
            {!navigationDrawer && (
              <div
                onClick={() => dispatch(openNavigationDrawer())}
                className="w-16 block xl:hidden"
              >
                <AwesomeIcon icon={barsIcon} className="w-5 h-5 cursor-pointer" />
              </div>
            )}

            <Logo width="w-48 xl:w-60" />

            {!navigationDrawer && (
              <div
                onClick={() => dispatch(openKeywordModal())}
                className="w-16 flex justify-end xl:hidden cursor-pointer"
              >
                <AwesomeIcon icon={magnifyingGlassIcon} className="w-5 h-5" />
              </div>
            )}
            <div className="hidden xl:flex items-center h-full w-full">
              <div className="flex justify-end items-center w-full gap-6">
                {headerLinks(path).map(({ linkKey, active, textKey }, i) => (
                  <HeaderLink key={i} linkKey={linkKey} active={active} textKey={textKey} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
