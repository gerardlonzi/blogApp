import React from 'react'


interface prop{
    children : React.ReactNode
}
export default function Container({children}:prop) {
  return (
    <div className='xl:px-28 px-2'>
        {
            children
        }
    </div>
  )
}
