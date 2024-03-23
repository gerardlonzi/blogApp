'use client'

import Container from "@/components/design-system/container"
import React from 'react'
import { signIn, useSession } from "next-auth/react";
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
import ScreenLoader from "@/components/design-system/ScreenLoader/ScreenLoader";

export default function Login() {

    const {data,status} = useSession()

    console.log("loggons la status");
    
    console.log(data,status);

    return (
        <>
        <ScreenLoader status={status} >
        <Container>
            <div className="xl:px-96 lg:px-[20rem] md:px-56 sm:px-32 px-2 relative top-24 text-simple-black">
                                    <h3 className="text-3xl mb-8">Se connecter</h3>

            <div className="flex flex-col  items-center space-y-5 mb-10  text-white">
               
                    <div onClick={()=>signIn("google")}  className="w-full text-sm cursor-pointer flex justify-between items-center rounded-full px-4 py-3 bg-simple-black gap-2">
                        <p>Se connecter avec Google </p>

                        <FcGoogle className="w-7 h-7" />
                    </div>

                
                    <div className="w-full text-sm flex justify-between items-center rounded-full px-6 py-3 bg-gray-text gap-2">
                        <p>Se connecter avec Github</p>

                        <FaGithub  className="w-7 h-7 text-black" />
                    </div>

                    <div className="w-full text-sm flex justify-between items-center rounded-full px-4 py-3 bg-simple-black gap-2">
                        <p> Se connecter avec Facebook</p>

                        <BsFacebook  className="w-7 h-7 bg-white text-[#1e92ff]" />
                    </div>

               
                
            </div>
            </div>
        </Container>
        </ScreenLoader>
        </>

    )
}
