import React, { FC } from 'react'
import Link from 'next/link'
import { HeaderLinkProps } from '@/app/types/header-types'

const HeaderLink: FC<HeaderLinkProps> = ({ linkKey, active, textKey }) => {
  return (
    <Link
      href={linkKey}
      className={`text-17 font-medium relative duration-200
      ${active ? 'text-sky-400' : 'text-[#999] hover:text-sky-400'}`}
    >
      {textKey}
    </Link>
  )
}

export default HeaderLink
