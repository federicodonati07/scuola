import React from 'react'
import Link from "next/link"
import {FaHome} from "react-icons/fa"
import {PiCalendarStarFill} from "react-icons/pi"
import { GrAnnounce } from "react-icons/gr"
import { BiSolidUpvote } from "react-icons/bi";

const LeftBar = () => {
  return (
    <>
        <section className="fixed top-0 left-0 h-full flex flex-col justify-start items-center bg-zinc-900 text-white text-xl p-4 border-r-2 border-slate-200">
            <div className="relative top-0">
                <Link href="/" className="flex item-center mt-5 hover:tracking-widest hover:text-sky-300 duration-700" >
                    <FaHome size="30px"/>HOME
                </Link>
                <Link href="/eventi" className="flex  item-center mt-5 hover:tracking-widest hover:text-sky-300 duration-700">
                    <PiCalendarStarFill size="30px"/>EVENTI
                </Link>
                <Link href="/annunci" className="flex  item-center mt-5 hover:tracking-widest hover:text-sky-300 duration-700">
                    <GrAnnounce size="30px"/>ANNUNCI
                </Link>
                <Link href="/voti" className="flex  item-center mt-5 hover:tracking-widest hover:text-sky-300 duration-700">
                    <BiSolidUpvote  size="30px"/>VOTA
                </Link>
                <hr className='mt-7'></hr>
            </div>
            <div className="break-words font-extralight text-sm">
                Powered by <a href="https://nextjs.org/" target="_blank">Next.js</a>
                <br />
                <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>, 
                <br />
                <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a>
                <hr />
                by Federico Donati
            </div>
        </section>

    </>
  )
}

export default LeftBar