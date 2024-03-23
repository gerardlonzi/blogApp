"use client"

import clsx from 'clsx'
import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'
import React, { useMemo } from 'react'


interface props{
    href:string,
    children:string,
    className?:string
}

export default function ActiveLink({href,children,className}:props) {
    const pathname = usePathname()
    const isActive  = useMemo(()=>{
        return pathname == href
    },[pathname,href])

  return (
    <>
            <Link href={href} >
              <p className={clsx(isActive ? "bg-gray-text" :" " , ` ${className} px-5 py-1 border-x transition duration-150  ease-in hover:bg-gray-text border-gray-text   text-2xl font-bold`)}>
                          {
                              children
                          }
                </p>
            </Link>
    </>
  )
}
