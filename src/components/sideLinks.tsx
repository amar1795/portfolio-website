"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SquareMenu } from "lucide-react";

const SideLinks = () => {
  const pathname = usePathname();
  console.log("this is the pathname", pathname);
  const isHomePage = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (
      event.target.closest(".sidebar") ||
      event.target.closest(".menu-button")
    )
      return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      {/* desktop */}
      <div className="flex flex-col justify-between mt-32 below-1100:hidden ">
        {!isHomePage && (
          <Link href="/">
            <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[11rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>Home</button>
          </Link>
        )}
        <Link href={"/tech-stack"}>
          <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[11rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>Tech Stack</button>
        </Link>
        <Link href={"/projects"}>
          <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[11rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>Projects</button>
        </Link>
        <Link href={"/resume"}>
          <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[11rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>Resume</button>
        </Link>
        <Link href={"/about-me"}>
          <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[11rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>About Me</button>
        </Link>
        <Link href={"/contact-me"}>
          <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[11rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}>Contact Me</button>
        </Link>
      </div>

      {/* mobile */}
      <div className=" hidden below-1100:block ">
        <div>
          <div className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <SquareMenu size={40} className="text-green-300 hover:text-green-400 transition-colors duration-300" style={{ filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))' }} />
          </div>
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              X
            </button>
            <div className="flex flex-col justify-between  items-center mt-[3rem] w-full    ">
              <Link href="/">
                <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 my-2 w-[10rem]" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }} onClick={() => setIsOpen(false)}>Home</button>
              </Link>
              <Link href="/tech-stack">
                <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[10rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }} onClick={() => setIsOpen(false)}>
                  Tech Stack
                </button>
              </Link>
              <Link href="/projects">
                <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[10rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }} onClick={() => setIsOpen(false)}>Projects</button>
              </Link>
              <Link href="/resume">
                <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[10rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }} onClick={() => setIsOpen(false)}>Resume</button>
              </Link>
              <Link href="/about-me">
                <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[10rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }} onClick={() => setIsOpen(false)}>About Me</button>
              </Link>
              <Link href="/contact-me">
                <button className="border-2 border-green-400/80 text-green-300 px-5 py-2 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 w-[10rem] my-2" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }} onClick={() => setIsOpen(false)}>
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideLinks;
