"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";

import Boolen from "@/hooks/toogle"
import Input from "@/ui/design-system/Input"

import Bottom from "@/ui/design-system/Bottom"
import { LoginForm } from "../../types/Form"
import Link from "next/link"




export default function LoginFormView() {
    const { value: isloadding, setValue: setIsloadding } = Boolen({ initial: false })


    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset,
        formState: { errors },
    } = useForm<LoginForm>()

    const onSubmit: SubmitHandler<LoginForm> = (data) => {
        setIsloadding(true)
        const { email, password } = data
        if (!email.includes("@")) {
            setIsloadding(false)
            setError("email", {
                type: "manual",
                message: "cette adresse email est incorrect"
            })
        }

        if (password.length < 8) {
            setIsloadding(false)
            setError("password", {
                type: "manual",
                message: "le mot de passe doit contenir au moins 8 caracteres"
            })
        }


    }

    
    return (
        <div className="xl:px-96 lg:px-[20rem] md:px-56 sm:px-32 px-2 relative top-24 text-simple-black">
                                    <h3 className="text-3xl mb-8">Se connecter</h3>

            <div className="flex flex-col  items-center space-y-5 mb-10  text-white">
               
                    <div   className="w-full text-sm cursor-pointer flex justify-between items-center rounded-full px-4 py-3 bg-simple-black gap-2">
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
            {/* <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="space-y-6 ">

                        <div className="flex flex-col  w-full gap-7">

                            <div className=" w-full">
                                <Input placehoder="Email*" errors={errors} errorMessage="ce champ est requis" required={true} type="email" id="email" isloadding={isloadding} register={register} />
                            </div>
                            <div className=" w-full">
                                <Input placehoder="Password*" errors={errors} errorMessage="ce champ est requis" required={true} type="text" id="password" isloadding={isloadding} register={register} />
                            </div>
                        </div>

                    </div>
                    <div className="flex mt-2 justify-between">
                        <Link href={""} className="underline hover:text-gray-text">Mot de passe oublié</Link>
                        <Link href={"/Auth/SignIn"} className="underline hover:text-gray-text">Creer un compte</Link>
                    </div>
                    <div className="mt-5">
                        <Bottom isloadding={isloadding} disabled={isloadding} type="submit">Se connecter</Bottom>
                    </div>
                </div>
            </form> */}
        </div>
    )
}