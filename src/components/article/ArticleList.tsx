import React from 'react'
import ArticleNoWraped from './articleNoWraped'
import { FetchDataPost } from '@/components/data/getDATAFounction'
import Paddination from '../design-system/Paddination'


const ArticleList = ({ page }: any) => {

    const { POSTDATA,Count } = FetchDataPost(page)

    console.log('le compte est a ' + Count);



    return (
        <>
            <div className='w-full space-y-16'>
                {
                    POSTDATA?.map(items => (
                        <ArticleNoWraped items={items} key={items._id} />
                    ))
                }

            </div>


        </>
    )
}

export default ArticleList