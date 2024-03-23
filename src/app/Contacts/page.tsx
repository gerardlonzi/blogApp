'use client'

import React from 'react'
import SendMailForm from '@/modules/sendMailForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import Container from '@/components/design-system/container'
import { FaHome } from "react-icons/fa" 
import { FaPhoneFlip } from "react-icons/fa6"
import { RiCellphoneLine } from "react-icons/ri"
import { TbMailFilled } from "react-icons/tb";
import { metadata } from '../layout'
import ScreenLoader from '@/components/design-system/ScreenLoader/ScreenLoader'
import { useSession } from 'next-auth/react'

export default function Contacts() {

    const {status} = useSession()
    return (
        <>
        <ScreenLoader status={status}>
        <div className='fade-in  text-gray-text'>
            <Navbar />
            <Container >
                <h2 className="text-3xl font-bold mt-8 mb-3 capitalize text-simple-black">Contact</h2>
                <hr className="border-2 mb-10  " />
                <iframe className='w-full border-2 border-simple-black grayscale' src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1990.4510991879563!2d11.469107938492941!3d3.831157275253152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x108bce28f64a1df5%3A0x138cfa0e83571e85!2sKamthe!3m2!1d3.8311313!2d11.4703469!4m3!3m2!1d3.8311655!2d11.4704629!5e0!3m2!1sfr!2srw!4v1710569501666!5m2!1sfr!2srw" width="600" height="450" loading="lazy" ></iframe>

                <div className='text-sm flex flex-col sm:flex-row gap-5'>
                    <div className='w-full'>
                        <h2 className="text-3xl font-bold mt-8 mb-3 capitalize text-simple-black">Address</h2>
                        <hr className="border-2 mb-4  " />
                        <p className='flex items-center gap-2'><FaHome /><span>Yaoundé entreé simbock hotel kamthe</span></p>
                    </div>
                    <div className='w-full'>
                        <h2 className="text-3xl font-bold mt-8 mb-3 capitalize text-simple-black">Phone</h2>
                        <hr className="border-2 mb-4 w-full " />
                        <div>
                            <p className='flex items-center gap-2'><FaPhoneFlip /><span>+237673259041</span></p>
                            <p className='flex items-center gap-2'><RiCellphoneLine /><span>+237673259041</span></p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className="text-3xl font-bold mt-8 mb-3  text-simple-black">E-mails</h2>
                        <hr className="border-2 mb-4 w-full  " />
                        <p className='flex items-center gap-2'><TbMailFilled /><span>lonzigerard@gmail.com</span></p>
                    </div>
                </div>
                <div className='mt-14 text-sm'>
                    <h2 className="text-3xl font-bold mt-8 mb-3  text-simple-black">Diverse informations</h2>
                    <hr className="border-2 mb-4 w-full  " />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur a dolor saepe doloribus quidem, optio nemo blanditiis. Tempore consequatur numquam consectetur quam aspernatur ea harum esse autem adipisci veritatis.</p>
                    <div className='mt-10'>
                        <p className='mb-5'>Envoyer un e-mail. Tous les champs marqués d'un astérisque (*) sont obligatoires.</p>
                        <SendMailForm />

                    </div>
                </div>
            </Container>
            <Footer />
            </div>
            </ScreenLoader>
        </>
    )
}
