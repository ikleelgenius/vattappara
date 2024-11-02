import React, { FC } from 'react'
import Link from 'next/link'
import { HeaderLinkProps } from '@/app/types/header-types'

const HeaderLink: FC<HeaderLinkProps> = ({ linkKey, active, textKey }) => {
  return (
    <Link
      href={linkKey}
      className={`text-sm font-medium relative duration-200
      ${active ? 'text-white' : 'text-zinc-200 hover:text-white'}`}
    >
      {textKey}
    </Link>
  )
}

export default HeaderLink
