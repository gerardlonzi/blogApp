import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md"
import { IoChatbubbles } from "react-icons/io5"
import Link from 'next/link'

interface props {
    total_comment?: number,
    date: string,
    className?: string,
    theme: string,
    href_filter_by_date: string
}

export default function Hour_comment({ total_comment, date, className, theme, href_filter_by_date }: props) {

    let style: string = ""
    switch (theme) {
        case "small":
            style = "w-4 h-4"
            break
        case "big":
            style = "w-5 h-5"
    }
    return (
        <div className={`flex items-center gap-8 text-sm ${className}`}>
            <Link href={href_filter_by_date}>
                <p className='flex items-center gap-2'>
                    <MdOutlineWatchLater className={`${style}`} />
                    <span className=''>{date}</span>
                </p>
            </Link>
            {
                total_comment &&
                <p className='flex items-center gap-2'>
                    <IoChatbubbles className={`${style}`} />
                    <span>{total_comment}</span>
                </p>
            }
        </div>
    )
}
