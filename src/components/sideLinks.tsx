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
      <div className="flex flex-col justify-between below-1100:hidden ">
        {!isHomePage && (
          <Link href="/">
            <button className="glow-button w-[11rem] my-2">Home</button>
          </Link>
        )}
        <Link href={"/tech-stack"}>
          <button className="glow-button w-[11rem] my-2">Tech Stack</button>
        </Link>
        <Link href={"/projects"}>
          <button className="glow-button w-[11rem] my-2">Projects</button>
        </Link>
        <Link href={"/resume"}>
          <button className="glow-button w-[11rem]  my-2">Resume</button>
        </Link>
        <Link href={"/about-me"}>
          <button className="glow-button w-[11rem]  my-2">About Me</button>
        </Link>
        <Link href={"/contact-me"}>
          <button className="glow-button w-[11rem]  my-2">Contact Me</button>
        </Link>
      </div>

      {/* mobile */}
      <div className=" hidden below-1100:block ">
        <div>
          <div className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            <SquareMenu size={40} />
          </div>
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              X
            </button>
            <div className="flex flex-col justify-between  items-center mt-[3rem] w-full    ">
              <Link href="/">
                <button className="glow-button  my-2 w-[10rem]" onClick={() => setIsOpen(false)}>Home</button>
              </Link>
              <Link href="/tech-stack">
                <button className="glow-button w-[10rem] my-2" onClick={() => setIsOpen(false)}>
                  Tech Stack
                </button>
              </Link>
              <Link href="/projects">
                <button className="glow-button w-[10rem] my-2" onClick={() => setIsOpen(false)}>Projects</button>
              </Link>
              <Link href="/resume">
                <button className="glow-button w-[10rem]  my-2" onClick={() => setIsOpen(false)}>Resume</button>
              </Link>
              <Link href="/about-me">
                <button className="glow-button w-[10rem] my-2" onClick={() => setIsOpen(false)}>About Me</button>
              </Link>
              <Link href="/contact-me">
                <button className="glow-button w-[10rem] my-2" onClick={() => setIsOpen(false)}>
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
