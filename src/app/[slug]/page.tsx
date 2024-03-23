'use client'
import AddComment from '@/modules/AddComments'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import Container from '@/components/design-system/container'
import CategorieDesign from '@/components/typography/categorie'
import Image from 'next/image'
import React from 'react'
import { HiCheckBadge } from "react-icons/hi2"
import { RiFacebookFill, RiYoutubeFill } from 'react-icons/ri'
import { BsTwitterX } from "react-icons/bs"
import Link from 'next/link'
import { metadata } from '../layout'
import ScreenLoader from '@/components/design-system/ScreenLoader/ScreenLoader'
import { useSession } from 'next-auth/react'

export default function SinglePost() {

    const {status} = useSession()
    return (
        <>
        <ScreenLoader status={status}>
            <Navbar />
            <Container>
                <div className='flex md:flex-row flex-col mt-16 gap-5'>
                    <div className=' w-full md:w-1/4 '>
                        <div className='sticky space-y-10 top-24'>
                            <div className='space-y-4'>
                                <div className='  space-y-5 flex  flex-col items-center'>
                                    <Image alt='' src={"/imgs/img7.jpg"} height={200} width={200} className='rounded-full w-40 h-40 object-cover' />
                                    <p className='text-xl flex gap-1 items-center uppercase'>Gerard Lonzi <HiCheckBadge className='text-[#3b8aff]' /> </p>
                                    <p className='text-sm text-gray-text'>Posté en May 20,2023</p>
                                </div>
                                <div className='flex flex-col items-center ' >
                                    <p>Follow</p>
                                    <div className='flex items-center space-x-3 mt-2'>
                                        <a href="">
                                            <RiFacebookFill className='hover:text-simple-black text-[#3b8aff]  w-6 h-6' />
                                        </a>
                                        <a href="">
                                            <BsTwitterX className='hover:text-simple-black w-5 h-5' />
                                    </a>




                                        <a href="">
                                            <RiYoutubeFill className='hover:text-simple-black w-6 h-6 text-red-600'  />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <p className='underline text-gray-text'>Recent commentaire par categorie</p>
                                <div className='flex gap-2 mt-5'>
                                    <Image alt='' width={70} height={70} src="/imgs/img6.jpg" className='rounded-full w-10 h-10 object-cover' />
                                    <div>
                                        <CategorieDesign theme='secondary' href_categorie=''>PLAY GAMING</CategorieDesign>
                                        <div className='mt-2 text-xs pr-4'>
                                            <p>je suis tres ravis de l'avance des project Next JS au sein des group de developpeurs</p>
                                            <p className='text-gray-text mt-1'><span>Joseph Owen</span>..<span>10-12-2023</span></p>
                                            <p  className='mt-2 text-gray-text'>
                                            <Link href="/">Voir plus</Link>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-10'>
                                    <Image alt='' width={70} height={70} src="/imgs/img8.jpg" className='rounded-full w-10 h-10 object-cover' />
                                    <div>
                                        <CategorieDesign theme='secondary' href_categorie=''>PROGRAMMATION</CategorieDesign>
                                        <div className='mt-2 text-xs pr-4'>
                                            <p>je suis tres ravis de l'avance des JS jrjfjjj sein des group de developpeursen soi</p>
                                            <p className='text-gray-text mt-1'><span>Joseph Owen</span>..<span>10-12-2023</span></p>
                                            <p  className='mt-2 text-gray-text'>
                                            <Link href="/">Voir plus</Link>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-10'>
                                    <Image alt='' width={70} height={70} src="/imgs/img4.jpg" className='rounded-full w-10 h-10 object-cover' />
                                    <div>
                                        <CategorieDesign theme='secondary' href_categorie=''>CRIPTO</CategorieDesign>
                                        <div className='mt-2 text-xs pr-4'>
                                            <p className='h-12 overflow-hidden'>je suis tres ravis de l'avance des project Next JS au sein des group de developpeurs lorem*5</p>
                                            <p className='text-gray-text mt-1'><span>Joseph Owen</span>..<span>10-12-2023</span></p>
                                            <p  className='mt-2 text-gray-text'>
                                            <Link href="/">Voir plus</Link>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-3/4 w-full space-y-16 mt-14 md:mt-0 sticky top-10'>
                        <div className='space-y-6'>
                            <CategorieDesign theme='secondary' href_categorie='' >Web Dev</CategorieDesign>
                            <p className='text-sm text-gray-text'> 10 Comment(s)</p>
                            <h1 className='text-2xl md:text-4xl lg:text-5xl text-[#434343]'>The coding 20 most visited cities – where does London rank?</h1>
                            <Image src={"/imgs/img8.jpg"} width={250} height={100} alt='' className='w-full object-cover h-full' />

                        </div>
                        <div className='text-gray-text'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatibus ipsam, hic maiores possimus expedita doloribus eum ipsum quia est saepe nostrum eos eius numquam eligendi at sint, cupiditate quam?
                                Pariatur numquam ex id, optio est ut tempore sit quis provident iusto magnam obcaecati minus, voluptatem cupiditate distinctio doloremque amet facilis. Aspernatur iste debitis cum magnam ex numquam neque quibusdam.
                                At architecto vero temporibus aut, ipsa delectus, culpa, dolores modi quam tenetur pariatur quaerat consequuntur! Praesentium quae omnis, cumque temporibus ipsa deleniti quaerat adipisci inventore totam obcaecati sit tenetur ea.
                                Perferendis distinctio, deleniti expedita totam ea mollitia nisi vel, cum culpa debitis omnis eum dolorum perspiciatis, facere dignissimos facilis qui quis praesentium temporibus deserunt! Numquam odit odio animi corrupti consequatur?
                                Nobis quia consequatur quam praesentium quibusdam reprehenderit modi nemo harum esse tempora at officia, quo voluptatibus? Unde, velit? Magni sed nesciunt dignissimos non nulla fugit dolorem beatae eaque odio sit.</p>
                        </div>
                        <hr className='border-[#c3c1c1]' />
                        <div className='space-y-6'>
                            <div className='text-simple-black space-y-3'>
                                <p className="text-gray-text">Laisser un commentaire  ↴</p>
                                <AddComment />
                            </div>
                            <div>
                                <h3 className='underline text-gray-text'>Commentaires</h3>
                                <div className='mt-7 space-y-6'>
                                    <div >
                                        <div className='flex items-center gap-3'>
                                            <Image src={"/imgs/img3.jpg"} alt='' width={100} height={30} className='w-12 h-12 object-cover rounded-full' />
                                            <div className=''>
                                            <p className='font-semibold text-gray-text'>Angel Diamaras</p>
                                            <p className='text-sm text-gray-text '>il y'a 6 jours</p>

                                            </div>
                                        </div>
                                        <div className='ml-16 mt-2'>
                                            <p>
                                                je suis tres heureux d'avoir decouvert votre site web j'ai vraiment genial j'apprent vite a codre merci beaucoup mr gerard lonzi
                                            </p>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex items-center gap-3'>
                                            <Image src={"/imgs/img4.jpg"} alt='' width={100} height={30} className='w-12 h-12 object-cover rounded-full' />
                                            <div>
                                            <p className='font-semibold text-gray-text'>Miguel Sponse</p>
                                            <p className='text-sm text-gray-text '>il y'a 6 jours</p>

                                            </div>
                                        </div>
                                        <div className='ml-16 mt-2'>
                                            <p>
                                                je suis tres heureux d'avoir decouvert votre site web j'ai vraiment genial j'apprent vite a codre merci beaucoup mr gerard lonzi
                                            </p>
                                        </div>
                                    </div>
                                    <div >
                                        <div className='flex items-center gap-3'>
                                            <Image src={"/imgs/img5.jpg"} alt='' width={100} height={30} className='w-12 h-12 object-cover rounded-full' />
                                            <div>
                                                <p className='font-semibold text-gray-text'>Christian Duran</p>
                                                <p className='text-sm text-gray-text '>il y'a 6 jours</p>
                                            </div>
                                        </div>
                                        <div className='ml-16 mt-2'>
                                            <p>
                                                je suis tres heureux d'avoir decouvert votre site web j'ai vraiment genial j'apprent vite a codre merci beaucoup mr gerard lonzi
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

            </Container>
            <Footer />

            </ScreenLoader>
        </>
    )
}
