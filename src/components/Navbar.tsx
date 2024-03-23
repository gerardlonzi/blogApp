'use client'

import React from 'react'
import Container from './design-system/container';
import Link from 'next/link'
import { RiFacebookFill, RiYoutubeFill ,RiSearchLine} from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs"

import ActiveLink from './design-system/ActiveLink';
import { RiMoreFill } from "react-icons/ri";
import { signOut, useSession } from 'next-auth/react';


export default function Navbar() {
    
    const {data,status} = useSession()
     
 

    console.log("loggons la status");
    
    console.log(data,status);

    
    return (
        <>
        
        <Container>
            <div className='flex md:flex-row  flex-col justify-between md:items-center py-12'>
                <Link href="/">
                <svg className='w-48 ' viewBox="0 0 663 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M79.2 100.024L77.28 104.376C68.9173 102.925 64.096 102.157 62.816 102.072C58.6347 113.421 52.6613 122.381 44.896 128.952C37.1307 135.523 28.4267 138.808 18.784 138.808C13.5787 138.808 9.22667 137.4 5.728 134.584C2.22933 131.768 0.48 128.269 0.48 124.088C0.48 116.749 5.51467 110.307 15.584 104.76C25.7387 99.2133 38.0267 96.44 52.448 96.44C54.4107 96.44 55.904 96.4827 56.928 96.568C58.464 93.3253 59.7013 89.8693 60.64 86.2C55.1787 89.8693 49.3333 91.704 43.104 91.704C36.96 91.704 31.7973 89.528 27.616 85.176C23.52 80.7387 21.472 74.936 21.472 67.768C21.472 60.5147 23.8613 52.92 28.64 44.984C33.504 36.9627 39.8613 30.3493 47.712 25.144C55.648 19.9387 63.712 17.336 71.904 17.336C76.6827 17.336 81.2053 18.1893 85.472 19.896C89.7387 21.5173 92.9387 23.48 95.072 25.784L88.16 34.104C84.6613 31.3733 82.1867 29.5387 80.736 28.6C76.9813 26.04 72.9707 24.76 68.704 24.76C59.9147 24.76 51.7653 29.0267 44.256 37.56C36.7467 46.008 32.992 55.224 32.992 65.208C32.992 70.6693 34.528 74.9787 37.6 78.136C40.672 81.2933 44.6827 82.872 49.632 82.872C54.6667 82.872 59.1893 81.6773 63.2 79.288C68.1493 66.232 72.7573 59.704 77.024 59.704C79.4987 59.704 80.736 60.8987 80.736 63.288C80.736 65.6773 79.7973 68.4507 77.92 71.608C76.128 74.68 73.7813 77.4533 70.88 79.928C67.3813 89.3147 65.3333 94.9467 64.736 96.824C70.7093 97.5067 75.5307 98.5733 79.2 100.024ZM25.056 130.104C30.8587 130.104 36.576 127.416 42.208 122.04C47.9253 116.664 52.2347 109.923 55.136 101.816C43.616 101.816 33.8453 103.736 25.824 107.576C17.888 111.501 13.92 116.237 13.92 121.784C13.92 124.344 14.9013 126.349 16.864 127.8C18.912 129.336 21.6427 130.104 25.056 130.104ZM120.123 86.712L122.811 88.888C119.91 93.4107 117.392 96.696 115.259 98.744C113.211 100.707 110.907 101.688 108.347 101.688C105.787 101.688 103.696 100.664 102.075 98.616C100.454 96.568 99.643 94.008 99.643 90.936C99.643 84.9627 103.568 72.12 111.419 52.408C119.27 32.6107 127.334 15.2027 135.611 0.183998L141.243 3.256C132.88 19.4693 125.328 35.5973 118.587 51.64C111.846 67.5973 108.475 79.0747 108.475 86.072C108.475 90.0827 109.968 92.088 112.955 92.088C115.344 92.088 117.734 90.296 120.123 86.712ZM161 86.125C161 87.9583 160.646 89.6667 159.938 91.25C159.229 92.8333 158.271 94.2292 157.062 95.4375C155.896 96.6042 154.521 97.5417 152.938 98.25C151.354 98.9167 149.667 99.25 147.875 99.25C146.042 99.25 144.333 98.9167 142.75 98.25C141.167 97.5417 139.771 96.6042 138.562 95.4375C137.396 94.2292 136.458 92.8333 135.75 91.25C135.083 89.6667 134.75 87.9583 134.75 86.125C134.75 84.3333 135.083 82.625 135.75 81C136.458 79.375 137.396 77.9792 138.562 76.8125C139.771 75.6042 141.167 74.6458 142.75 73.9375C144.333 73.2292 146.042 72.875 147.875 72.875C149.667 72.875 151.354 73.2292 152.938 73.9375C154.521 74.6458 155.896 75.6042 157.062 76.8125C158.271 77.9792 159.229 79.375 159.938 81C160.646 82.625 161 84.3333 161 86.125ZM202.832 99.64C191.397 99.64 182.48 96.824 176.08 91.192C169.68 85.4747 166.48 77.112 166.48 66.104C166.48 55.0107 169.68 46.648 176.08 41.016C182.48 35.2987 191.397 32.44 202.832 32.44H245.712V47.16H202.832C197.285 47.16 193.019 48.696 190.032 51.768C187.131 54.84 185.68 59.6187 185.68 66.104C185.68 72.504 187.131 77.24 190.032 80.312C193.019 83.384 197.285 84.92 202.832 84.92H246.992V99.64H202.832ZM290.332 99.64C278.897 99.64 269.98 96.824 263.58 91.192C257.18 85.4747 253.98 77.112 253.98 66.104C253.98 55.0107 257.18 46.648 263.58 41.016C269.98 35.2987 278.897 32.44 290.332 32.44H314.012C325.447 32.44 334.364 35.2987 340.764 41.016C347.164 46.648 350.364 55.0107 350.364 66.104C350.364 77.112 347.164 85.4747 340.764 91.192C334.364 96.824 325.447 99.64 314.012 99.64H290.332ZM290.332 84.92H314.012C319.559 84.92 323.783 83.384 326.684 80.312C329.671 77.24 331.164 72.504 331.164 66.104C331.164 59.6187 329.671 54.84 326.684 51.768C323.783 48.696 319.559 47.16 314.012 47.16H290.332C284.785 47.16 280.519 48.696 277.532 51.768C274.631 54.84 273.18 59.6187 273.18 66.104C273.18 72.504 274.631 77.24 277.532 80.312C280.519 83.384 284.785 84.92 290.332 84.92ZM443.067 99H424.507V7.48H443.067V99ZM439.867 99H395.707C384.272 99 375.355 96.184 368.955 90.552C362.555 84.92 359.355 76.7707 359.355 66.104C359.355 55.352 362.555 47.16 368.955 41.528C375.355 35.896 384.272 33.08 395.707 33.08H438.587V47.8H395.707C390.16 47.8 385.894 49.336 382.907 52.408C380.006 55.3947 378.555 59.96 378.555 66.104C378.555 72.1627 380.006 76.728 382.907 79.8C385.894 82.7867 390.16 84.28 395.707 84.28H439.867V99ZM457.165 99V33.08H475.725V99H457.165ZM457.037 22.2V7.73599H475.853V22.2H457.037ZM489.79 99V33.08H547.262C554.771 33.08 560.233 34.9573 563.646 38.712C567.145 42.3813 568.894 47.2453 568.894 53.304V99H550.334V55.48C550.334 50.36 547.774 47.8 542.654 47.8H508.35V99H489.79ZM597.906 127.8V113.08H636.562C641.682 113.08 644.242 110.477 644.242 105.272V99H616.082C604.647 99 595.73 96.184 589.33 90.552C582.93 84.92 579.73 76.7707 579.73 66.104C579.73 55.352 582.93 47.16 589.33 41.528C595.73 35.896 604.647 33.08 616.082 33.08H662.802V107.576C662.802 113.635 661.053 118.499 657.554 122.168C654.055 125.923 648.594 127.8 641.17 127.8H597.906ZM616.082 84.28H644.242V47.8H616.082C610.535 47.8 606.269 49.336 603.282 52.408C600.381 55.3947 598.93 59.96 598.93 66.104C598.93 72.1627 600.381 76.728 603.282 79.8C606.269 82.7867 610.535 84.28 616.082 84.28Z" fill="#1C1C1C" />
                </svg>
                </Link>
                <div className='space-y-4  font-bold mt-5 md:mt-0  text-gray-text'>
                    <div className='flex text-sm sm:text-base items-center justify-between gap-6 sm:gap-16'>
                        <div className='md:space-x-5 space-x-2'>
                            {
                                status == "unauthenticated" ?
                                    <Link href={"/Login"} className=' hover:text-simple-black '>LOGIN</Link>
                                    :
                                    <>
                                        <span onClick={()=>signOut()} className='  hover:text-simple-black cursor-pointer'>LOGOUT</span>
                                        <Link href={"/write"} className='  hover:text-simple-black '>ECRIRE</Link>
                                    </>
                            }
                            <Link href={"/Contacts"} className='  hover:text-simple-black '>SITE MAP</Link>
                            <Link href={""} className='  hover:text-simple-black '>HELP</Link>
                            <Link href={""} className='  hover:text-simple-black '>
                               
                            </Link>
                        </div>
                        <div className='flex space-x-1 items-center'>
                            <a href="">
                                <RiFacebookFill className='hover:text-simple-black w-6 h-6' />
                            </a>
                            <a href="">
                                <BsTwitterX className='hover:text-simple-black w-5 h-5' />
                            </a>
                            <a href="">
                                <RiYoutubeFill className='hover:text-simple-black w-6 h-6' />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='w-full relative'>
                            <input type="text" placeholder='Search...' className='w-full px-1 py-[5px] outline-none border border-simple-black font-normal'/>
                            <button className='absolute top-3 right-3
                            '><RiSearchLine /></button>
                        </div>
                    </div>

                </div>
            </div>

        </Container>
        <div className='bg-simple-black z-30 py-3 sm:py-0 sticky w-full top-0  text-white'>
                <Container>
                    <div className='flex justify-between sm:justify-normal '>
                        <ActiveLink href='/'>
                            HOME
                        </ActiveLink>
                        <ActiveLink href='/News' className='hidden sm:block'>
                            NEWS
                        </ActiveLink>
                        <ActiveLink href='/Videos' className='hidden sm:block'>
                            VIDEOS
                        </ActiveLink>
                        <ActiveLink href='' className='hidden md:block' >
                            PROJECTS
                        </ActiveLink>
                        <ActiveLink href='/Contacts' className='hidden md:block'>
                            CONTACTS
                        </ActiveLink>
                        <div className='relative'>
                            <div className='peer   px-5 py-1 block md:hidden border-x   hover:bg-gray-text border-gray-text   text-4xl font-bold'>
                                <RiMoreFill />
                            </div>
                            <div className='hidden hover:block  peer-hover:block absolute top-10 sm:top-10 right-0 '>
                                <div className='py-2  pl-4 shadow-gray-500  shadow-2xl space-y-4 text-gray-text lowercase w-48  bg-white flex flex-col'>
                                    <Link href={"/News"} className='sm:hidden block'>NEWS</Link>
                                    <Link href={"/Videos"} className='sm:hidden block' >VIDEOS</Link>
                                    <Link href={""} className='md:hidden block'>PROJECTS</Link>
                                    <Link href={"/Contacts"} className='md:hidden block' >CONTACTS</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </Container>
            </div>
    </>
    )
}
