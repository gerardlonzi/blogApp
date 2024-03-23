'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { sendMailForm } from "@/types/Form"
import Boolen from "@/hooks/toogle"
import Input from "@/components/design-system/Input"
import Textearea from "@/components/design-system/Textearea"
import Bottom from "@/components/design-system/Bottom"



export default function SendMailForm() {
const {value:isloadding, setValue:setIsloadding} = Boolen({initial : false})


  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm<sendMailForm>()

  const onSubmit: SubmitHandler<sendMailForm> = (data) => {
    setIsloadding(true)
    const {email,subject,message} = data
    if(!email.includes("@")){
        setIsloadding(false)
        setError("email",{
            type:"manual",
            message:"cette adresse email est incorrect"
        })
    }

    if(subject.length < 10){
        setIsloadding(false)
        setError("subject",{
            type:"manual",
            message:"veuillez entrer un subject plus explicite"
        })
    }
    if(message.length < 10){
        setIsloadding(false)
        setError("message",{
            type:"manual",
            message:"veuillez entrer un message coherent"
        })
    }






  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row w-full gap-7">
                <div className=" w-full">
                    <Input placehoder="Name*" errors={errors} errorMessage="ce champ est requis" required={true} type="text" id="name" isloadding={isloadding} register={register}/>
                </div>
                <div className=" w-full">
                    <Input placehoder="Email*" errors={errors} errorMessage="ce champ est requis" required={true} type="email" id="email" isloadding={isloadding} register={register}/>
                </div>
                <div className=" w-full">
                    <Input placehoder="Subject*" errors={errors} errorMessage="ce champ est requis" required={true} type="text" id="subject" isloadding={isloadding} register={register}/>
                </div>
            </div>
            
            <div className=" w-full ">
                <Textearea row={9} placehoder="message*" errors={errors} errorMessage="ce champ est requis" required={true} type="text" id="message" isloadding={isloadding} register={register}/>
            </div>


        </div>
        <div className="mt-5">
            <Bottom isloadding={isloadding} disabled={isloadding} type="submit">Envoyer</Bottom>
        </div>
    </form>
  )
}