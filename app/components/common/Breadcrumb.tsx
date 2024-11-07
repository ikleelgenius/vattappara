import { homeIcon } from '@/app/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ breadcrumb }: { breadcrumb: string }) => {
  return (
    <div className="flex items-center gap-2 bg-sky-400 text-white px-4 py-2">
      <Link href="/" className="flex items-center gap-x-2">
        <FontAwesomeIcon icon={homeIcon} className="w-3 h-3" />
        <p className=" font-bold">Home</p>
      </Link>
      <div className="bg-white rounded-full w-1.5 h-1.5" />
      <p className="">{breadcrumb}</p>
    </div>
  )
}

export default Breadcrumb
