import React from 'react'
import Picture from './Picture'
import Link from 'next/link'

const Logo = ({ width, src }: { width: string; src?: string }) => {
  return (
    <Link href="/">
      <Picture
        src={`${src ? src : '/images/logo.png'}`}
        alt="Story Construction"
        className={`${width}`}
        priority={true}
      />
    </Link>
  )
}

export default Logo
