import React from 'react'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

import { useRouter } from 'next/navigation';

const Paddination = ({ page, hasPrev, hasNext }:any) => {
    console.log(page)
    const router = useRouter()
    return (
        <div className='flex justify-between mt-7'>
            <button disabled={!hasPrev} onClick={() => router.push(`?page=${page -= 1}`)} className='py-3 flex gap-3 px-5 hover:text-gray-text border items-center border-gray-text'> <HiMiniArrowSmallLeft /> Articles précedent</button>
                
             <button disabled={!hasNext} onClick={() => router.push(`?page=${page += 1}`)} className='flex py-3 gap-3 hover:text-gray-text px-5 border items-center border-gray-text'>Articles suivant <HiMiniArrowSmallRight /></button>
           
           

        </div>
    )
}
export default Paddination