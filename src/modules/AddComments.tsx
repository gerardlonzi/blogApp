'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { IoIosSend } from "react-icons/io";

import Boolen from "@/hooks/toogle"
import { Addcomment } from "@/types/Form";
import Textearea from "@/components/design-system/Textearea";
import Bottom from "@/components/design-system/Bottom";



export default function AddComment() {
    const { value: isloadding, setValue: setIsloadding } = Boolen({ initial: false })


    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset,
        formState: { errors },
    } = useForm<Addcomment>()

    const onSubmit: SubmitHandler<Addcomment> = (data) => {
        setIsloadding(true)



    }


    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="">



                <div className=" w-full">
                <Textearea row={3} placehoder="ecrire...*" errors={errors} errorMessage="veuillez entrer un message" required={true} type="text" id="text" isloadding={isloadding} register={register}/>
                   
                </div>
                <div>
                    <Bottom isloadding={isloadding} disabled={isloadding} type="submit"><IoIosSend /></Bottom>
                </div>
            </div>
        </form>
    )
}