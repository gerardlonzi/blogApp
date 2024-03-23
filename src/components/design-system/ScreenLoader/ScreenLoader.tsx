'use client'
import SpinnerScreen from "./spinner"
import { useRouter,usePathname } from "next/navigation"


interface props{
    children:React.ReactNode
    status?:string
    isLoadding? : boolean
}
export default function ScreenLoader({children,status,isLoadding}:props){
    const pathname = usePathname()
    console.log(pathname);
    
    if(status == 'loading'){
        return <SpinnerScreen />
    }
    if(status == 'unauthenticated'){
        return <>{children}</>
    }
    if(status == 'authenticated'){
        if(pathname == '/Login'){
            useRouter().push('/')
            return <SpinnerScreen />
        }
        return <>{children}</>

    }

    return <>{children}</>
}