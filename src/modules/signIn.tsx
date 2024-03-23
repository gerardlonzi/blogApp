import { useForm, SubmitHandler } from "react-hook-form"

import Boolen from "@/hooks/toogle"
import Input from "@/ui/design-system/Input"

import Bottom from "@/ui/design-system/Bottom"
import {  SignForm } from "../../types/Form"
import Link from "next/link"



export default function SignFormView() {
const {value:isloadding, setValue:setIsloadding} = Boolen({initial : false})


  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm<SignForm>()

  const onSubmit: SubmitHandler<SignForm> = (data) => {
    setIsloadding(true)
    const {email,password} = data
    if(!email.includes("@")){
        setIsloadding(false)
        setError("email",{
            type:"manual",
            message:"cette adresse email est incorrect"
        })
    }

    if(password.length < 8){
        setIsloadding(false)
        setError("password",{
            type:"manual",
            message:"le mot de passe doit contenir au moins 8 caracteres"
        })
    }
   

  }


  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="xl:px-96 lg:px-[20rem] md:px-56 sm:px-32 px-2 relative top-52 text-simple-black">
            <div className="space-y-6 ">
            
                <h3 className="text-3xl ">S'inscrire</h3>
                <div className="flex flex-col  w-full gap-7">
                <div className=" w-full">
                        <Input placehoder="Username*" errors={errors} errorMessage="ce champ est requis" required={true} type="text" id="username" isloadding={isloadding} register={register}/>
                    </div>
                    <div className=" w-full">
                        <Input placehoder="Email*" errors={errors} errorMessage="ce champ est requis" required={true} type="email" id="email" isloadding={isloadding} register={register}/>
                    </div>
                    <div className=" w-full">
                        <Input placehoder="Password*" errors={errors} errorMessage="ce champ est requis" required={true} type="text" id="password" isloadding={isloadding} register={register}/>
                    </div>
                </div>
                
            </div>
            <div className="flex mt-2 justify-end">
            <Link href={"/Auth/Login"} className="underline hover:text-gray-text">se connecter</Link>
            </div>
            <div className="mt-5">
                <Bottom isloadding={isloadding} disabled={isloadding} type="submit">S'inscrire</Bottom>
            </div>
        </div>
    </form>
  )
}