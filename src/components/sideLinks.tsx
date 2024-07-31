"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const SideLinks = () => {
    const pathname = usePathname()
    console.log("this is the pathname",pathname)
    const isHomePage = pathname === "/";
  return (
    <div className='flex flex-col justify-between'>
        {!isHomePage && (
              <Link href="/">
                <button className="glow-button w-[11rem] my-2" >Home</button>
              </Link>
            )}
           <Link href={"/tech-stack"}><button  className="glow-button w-[11rem] my-2">Tech Stack</button></Link>
          <Link href={"/projects"}><button className="glow-button w-[11rem] my-2">Projects</button></Link>
          <Link href={"/about-me"}><button className="glow-button w-[11rem]  my-2">About Me</button></Link>
          <Link href={"/contact-me"}><button className="glow-button w-[11rem]  my-2">Contact Me</button></Link>
    </div>
  )
}

export default SideLinks
