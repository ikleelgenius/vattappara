import React from 'react'
import Picture from './Picture'
import Link from 'next/link'

const Logo = ({ className, src, onClick }: { className: string; src?: string; onClick?: any }) => {
  return (
    <Link href="/" onClick={onClick}>
      <Picture
        src={`${src ? src : '/images/logo-4.png'}`}
        alt="Story Construction"
        className={`${className}`}
        priority={true}
      />
    </Link>
  )
}

export default Logo
