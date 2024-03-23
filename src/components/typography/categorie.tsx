import Link from 'next/link'
import React from 'react'

interface prop {
    children: string
    theme: string,
    className? : string,
    href_categorie:string
}



export default function CategorieDesign({ children,theme,className ,href_categorie}: prop) {

    let style : string = ""

    switch(theme){
        case "primary" :
            style = "font-semibold uppercase  p-3 bg-[#e9e9e9c3] text-simple-black"
            break
        case "secondary"   :
            style = "font-bold text-sm p-[6px] duration-200 ease-out hover:bg-black bg-simple-black text-white" 

    }
    return (
        <Link href={href_categorie}>
            <span className={`${style} ${className} `}>
                {
                    children
                }
            </span>
        
        </Link>
    )
}
