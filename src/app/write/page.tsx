"use client"

import React, { useState } from 'react'

import { CiCirclePlus, CiExport } from "react-icons/ci";
import { BiSolidImageAdd } from "react-icons/bi"
import { MdSlowMotionVideo } from "react-icons/md"
import Navbar from '@/components/Navbar';
import Bottom from '@/components/design-system/Bottom';
import Boolen from '@/hooks/toogle';
import { IoIosSend } from "react-icons/io";
import 'quill/dist/quill.snow.css';
import Footer from '@/components/footer';
import Container from '@/components/design-system/container';
import ReactQuill from 'react-quill'
import { useSession } from 'next-auth/react';
import ScreenLoader from '@/components/design-system/ScreenLoader/ScreenLoader';


export default function Write() {
  const {status} = useSession()

  const { value: isLoadding, setValue: setIsloadding } = Boolen({ initial: false })
  const [value, setValue] = useState("")
  const [isOpen, setIsopen] = useState(false)



  return (
    <ScreenLoader status={status} >
    <div className="fade-in">
      <Navbar />
      <Container>

        <div className='flex flex-col items-center mt-32'>
          <div className='w-full'>
            <textarea  className='w-full py-4 placeholder:text-4xl text-xl px-4 outline-none border-b border-simple-black' placeholder='title' />
          </div>
          <div className='flex items-center gap-16 sm:gap-28 mt-16' >
            <button onClick={() => setIsopen(!isOpen)}><CiCirclePlus className='w-10 h-10' /></button>
            {
              isOpen &&
              <div className='md:space-x-5 space-x-3'>
                <button><BiSolidImageAdd className='sm:w-10 sm:h-10 w-7 h-7 ' /></button>
                <button><MdSlowMotionVideo className='sm:w-10 sm:h-10 w-7 h-7' /></button>
                <button><CiExport className='sm:w-10 sm:h-10 w-7 h-7' /></button>
              </div>
            }
          </div>
          <div className='w-full mt-5'>
            <div className='w-full'>
              <ReactQuill
                className='w-full'
                theme='snow'
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block'],
                    ['link']
                  ],
                }}
                placeholder='Compose an epic...'
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className='mt-10'>
            <Bottom isloadding={isLoadding} disabled={isLoadding} >Publier <IoIosSend className='inline ml-1' /></Bottom>
          </div>
        </div>



      </Container>
      <Footer />




    </div>
    </ScreenLoader>
  )
}
