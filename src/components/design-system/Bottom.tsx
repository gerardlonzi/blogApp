import Image from 'next/image'
import React from 'react'

interface props {
    isloadding: boolean,
    type?: "submit"|"reset"
    children: any,
    disabled: boolean
}


export default function Bottom({ isloadding,
    type,
    children,
    disabled }: props) {
    return (
        <>


            {
                isloadding ?
                    <button className='px-11 py-[10px] bg-[#3e3e3e]' type={type} disabled={disabled}>
                        <Image className='animate-spin grayscale' alt='spin animate' height={20} width={20}  src="/imgs/spin.png"/>
                    </button>

                     :

                    <button className='px-7 text-white py-3 duration-200 ease-out hover:bg-black font-semibold bg-simple-black'>
                        {children}
                    </button>
            }
        </>
    )
}
