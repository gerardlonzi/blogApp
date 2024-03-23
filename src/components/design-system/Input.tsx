import clsx from 'clsx'
import React from 'react'


interface props {

    placehoder?: string,
    required: boolean
    type: string
    id: string
    errors:any,
    errorMessage: string
    register: any
    isloadding: boolean



}

export default function Input({ placehoder,
    required,
    type,
    id,
    errors,
    errorMessage,
    register,
    isloadding }: props) {
    return (

        <>
            <input className={clsx(errors[id] ? "outline-red-600 text-red-600" :"outline-gray-text",'mb-1 w-full py-2 focus-within:shadow-inner outline outline-1 px-2 rounded-md ')} id={id} type={type} autoComplete='off' placeholder={placehoder} disabled={isloadding} {...register(id, {
                required: {
                    value: required,
                    message: errorMessage
                }
            })} />
            {errors[id] && <span className='text-red-600 text-sm'>{errors[id]?.message}</span>}
        </>
    )
}
