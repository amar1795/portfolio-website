"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import TypingEffect from "react-typing-effect";

const MainComponent = () => {
  const pathname = usePathname()
  console.log("this is the pathname",pathname)
  const isHomePage = pathname === "/";
  return (
    <div className="crt-wrapper  h-screen  text-center flex   overflow-auto below-1100:items-center below-1100:justify-center ">
      <div className=" ">
        <div>

          {/* <div className=" below-650:mt-5 below-600:mt-[5rem] below-695:mx-5 below-566:hidden">
          <div className=' hidden below-1100:flex  below-1100:justify-between '>
        {!isHomePage && (
              <Link href="/">
                <button className="glow-button w-[11rem] my-2" >Home</button>
              </Link>
            )}
           <Link href={"/tech-stack"}><button  className="glow-button w-[11rem] below-1100:w-auto  my-2">Tech Stack</button></Link>
          <Link href={"/projects"}><button className="glow-button w-[11rem] below-1100:w-auto mx-2 my-2">Projects</button></Link>
          <Link href={"/resume"}><button className="glow-button w-[11rem] below-1100:w-auto mx-2  my-2">Resume</button></Link>
          <Link href={"/about-me"}><button className="glow-button w-[11rem] below-1100:w-auto mx-2  my-2">About Me</button></Link>
          <Link href={"/contact-me"}><button className="glow-button w-[11rem] below-1100:w-auto mx-2  my-2">Contact Me</button></Link>
    </div>
          </div> */}
          <div className="terminals mt-2 below-1100:mt-5 below-400:mt-[5rem]">
            <h1 className="text-[6rem] uppercase below-1445:text-[4rem] below-1100:text-[2rem] below-500:text-[1rem] below-445:px-5 ">Welcome to My Website</h1>
            <div className=" ml-[10rem] below-1100:ml-0  below-500:mt-5   h-[4rem]">
            <h1 className=" text-[2rem] uppercase below-1445:text-[1.5rem] below-1100:text-[1rem] below-500:text-[0.8rem]">
              <TypingEffect
                text={[
                  "I'm a Fullstack web Developer",
                  "Who Loves to create beautifull apps",
                  "Explore My Work",
                ]}
                speed={40}
                eraseSpeed={20}
              />
            </h1>
            </div>
            <div className=" flex items-center  flex-col ">

            
            <div className=" mt-5  below-1100:text-[0.8rem] below-500:text-[0.5rem] flex items-center w-[70vw] flex-col below-1445:ml-[10rem]  below-1100:ml-0  self-center  ">
              <p className=" mt-5 uppercase ">
                I'm a developer who specializes in Full Stack web development and creating modern web
                Apps and websites.
              </p>
              <div className=" mt-8 px-6 mb-7">
            <h1 className=" uppercase"> You can Find all my projects and work on my github :</h1>
            <div className=" mt-4 flex items-center justify-center">
              <div className=" flex items-center  h-[3rem] mx-4 ">
                <Link href="https://github.com/amar1795"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2 text-[5rem] below-378:text-[0.4rem] below-500:mx-1 below-500:my-1 uppercase ">Github</button>
                </Link>
              </div>
              <Link href="https://github.com/amar1795/portfolio-website"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2 text-[5rem] below-378:text-[0.4rem]  below-378:w-[8rem] below-500:mx-1 below-500:my-1 uppercase below-500:w-[9rem]">Source Code</button>
                </Link>
            </div>
           
          </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
