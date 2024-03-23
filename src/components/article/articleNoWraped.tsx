import React from 'react'
import Image from 'next/image'
import { IoChatbubbleSharp } from "react-icons/io5";
import Link from 'next/link'

interface props {
    items: any
    key : string
}


export default function ArticleNoWraped({items,key}:props) {
    return (
        <>
            <div className='space-y-5 md:space-y-6' key={key} >
                <h1 className='md:text-3xl text-xl capitalize text-gray-text'>
                    <Link href={''}>{items.title}</Link>
                </h1>
                <div className='text-gray-text space-x-5  capitalize text-sm'>
                    <span>Par {''}</span>
                   
                        <Link href={''}>
                            <span>dans {items.catSlug}</span>
                        </Link>
                   
                    <span>Poster le {items.createAt.subString(0,10)}</span>
                </div>
                {
                
                    <Link href={''}>
                      <Image alt='' src={"/imgs/img5.jpg"} className='w-full mt-5' width={300} height={300} />
                    </Link>
                }
                <div className='text-simple-black '>
                    <p className='h-[4.4rem] overflow-hidden '>{items.description}</p>
                    <span>...</span>
                </div>
                <div className='flex justify-between'>
                    <Link href={''} className='flex gap-1 items-center'>
                        <IoChatbubbleSharp />
                        <span>total_comment</span>
                    </Link>
                    <Link href={''} className='py-2 px-4 font-semibold text-sm bg-black rounded-md text-white'>More</Link>

                </div>
                <hr className='border-[#c3c1c1] ' />

            </div>
        </>

    )
}
