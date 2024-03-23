"use client"

import { RiArrowUpDoubleLine } from "react-icons/ri";
import { useEffect } from "react";
export default function ScrollTo() {

    
 

    useEffect(() => {
        const scrool = () => {
            
            if(typeof window !== 'undefined'){
                    window.addEventListener("scroll", (e) => {
        
        
                        const nav_scroll = document.querySelector(".btnsmooth ") as HTMLElement | null;
                        if (nav_scroll) {
                            if (window.scrollY == 0) {
                                nav_scroll.style.display = "none"
                            }
                            else {
                                nav_scroll.style.display = "block"
                            }
                            nav_scroll?.addEventListener("click", () => {
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                            })
                        }
                    })

            }
           


        }
         scrool()
         return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("scroll", scrool);
            }
        };

    },[])


    return (
        <div className='text-right w-full '>
            <button className=' text-white btnsmooth fixed bottom-1  z-40 right-5  p-3  bg-simple-black  border border-white'><RiArrowUpDoubleLine /></button>

        </div>

    )
}
