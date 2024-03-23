'use client'
import Navbar from '@/components/Navbar'
import ArticleNoWraped from '@/components/article/articleNoWraped'
import Footer from '@/components/footer'
import Container from '@/components/design-system/container'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import ScreenLoader from '@/components/design-system/ScreenLoader/ScreenLoader'
import ArticleList from '@/components/article/ArticleList'
import { FetchDataCategorie } from '@/components/data/getDATAFounction'
import { FetchDataPost } from '@/components/data/getDATAFounction'
import Paddination from '@/components/design-system/Paddination'




export default function News(searchParams: any) {

    const page = parseInt(searchParams.page) || 1

    const { status } = useSession()



    const { DATA } = FetchDataCategorie()

    const {Count}= FetchDataPost(page)
    const POST_PER_PAGE: number = 2

    const hasPrev = POST_PER_PAGE * (page - 1) > 0
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < Count
    console.log('hasprev' + hasPrev);
    console.log('hasnext' + hasNext);
    console.log(page)



    return (
        <>
            <ScreenLoader status={status}>

                <div className='fade-in'>


                    <Navbar />
                    <Container>
                        <p></p>

                        <div className='flex flex-col md:flex-row mt-14 gap-7'>
                            <ArticleList page={page} />
                            <div className='md:w-[35rem]'>
                                <div className='space-y-20 sticky top-0'>


                                    <div className=' space-y-10'>
                                        <h3 className='text-xl text-gray-text'>RECENT POSTS</h3>
                                        <div className='flex flex-col space-y-5 text-simple-black text-sm font-semibold'>
                                            <Link href={""} className='hover:text-gray-text'>Best coding type men dor this year</Link>
                                            <Link href={""} className='hover:text-gray-text'>While coding with gerard</Link>
                                            <Link href={""} className='hover:text-gray-text'>learn coding with vscode and copilot</Link>
                                        </div>
                                        <hr className='border-[#c3c1c1]' />

                                    </div>

                                    <div className=' space-y-10'>
                                        <h3 className=' text-xl text-gray-text'>CATEGORIES</h3>
                                        <div className='flex flex-col space-y-3 text-simple-black text-sm '>
                                            {
                                                DATA?.map((items: any) => (
                                                    <Link href={""} className='hover:text-gray-text'>{items.title}</Link>
                                                ))
                                            }

                                        </div>
                                    </div>
                                    <div className=' space-y-10'>
                                        <h3 className=' text-xl text-gray-text'>ARCHIVES</h3>
                                        <div className='flex flex-col space-y-5 text-simple-black text-sm font-semibold'>
                                            <Link href={""} className='hover:text-gray-text'>May 23,2023</Link>
                                            <Link href={""} className='hover:text-gray-text'>Avril 13,2017</Link>
                                            <Link href={""} className='hover:text-gray-text'>Septembre 23,2023</Link>
                                        </div>

                                        <hr className='border-[#c3c1c1]' />


                                    </div>

                                </div>
                            </div>
                            <div>
                                            <Paddination page={page} hasPrev={hasPrev} hasNext={hasNext} />

                            </div>
                        </div>

                    </Container>


                    <Footer />
                </div>
            </ScreenLoader>
        </>
    )
}
