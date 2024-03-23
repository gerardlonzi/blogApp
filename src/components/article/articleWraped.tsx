import Image from 'next/image'
import React from 'react'
import CategorieDesign from '../typography/categorie'
import Hour_comment from './hour&comment'
import { articleDesignProps } from '@/types/ArticleDesign'
import Link from 'next/link'


export default function ArticleWraped({ img_src,
    title,
    desc,
    categorie, date,
    total_comment, href,classname,href_categorie,href_filter_by_date}: articleDesignProps) {
    return (
        <div className='capitalize  '>
            <div className='flex sm:flex-row flex-col gap-4 py-7'>
                {
                    img_src &&
                    <Link  className={`${classname} w-full h-full block   object-cover`} href={href}>
                        <Image alt='' src={img_src} height={100} width={150} className={`object-cover w-full h-full  `} />
                    </Link>
                }
                <div className='space-y-3 '>
                    {
                        href_categorie && 
                    
                        <CategorieDesign href_categorie={href_categorie} theme='secondary' >
                            {categorie}
                        </CategorieDesign>
                    
                    }
                    
                        <h3 className='font-bold'><Link href={href}>{title} </Link></h3>
                   {
                        desc &&
                        <div className='text-xs  text-gray-text  '>
                            <p className='  leading-[21px] sm:w-96 md:w-52 xl:w-96 lg:w-72  h-20 overflow-hidden'>{desc}</p>
                            <span >...</span>

                        </div>
                    }
                    {
                        href_filter_by_date &&
                        
                          <Hour_comment href_filter_by_date={href_filter_by_date} theme='small' className="text-black " date={date} total_comment={total_comment} />
                      
                    }
                </div>

            </div>
            <hr className='border-[#c3c1c1]' />
        </div>
    )
}
