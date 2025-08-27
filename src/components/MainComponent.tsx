"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import TypingEffect from "react-typing-effect";
import SpotifyWidget from "./SpotifyWidget";

const MainComponent = () => {
  const pathname = usePathname()
  // console.log("this is the pathname",pathname)
  const isHomePage = pathname === "/";
  return (
    <div className="crt-wrapper  text-center flex overflow-auto below-1100:items-center below-1100:justify-center">
      <div className="w-full flex justify-center">
        <div className="ml-[8rem] below-1100:ml-0 w-full max-w-6xl px-4">
          <div className="terminals mt-2 below-1100:mt-5 below-400:mt-[5rem] below-500:mb-[10rem]">
            <div className="mt-11">
              <h1 className="text-[5rem] uppercase below-1445:text-[4rem] below-1100:text-[2rem] below-730:text-[1rem]   below-445:px-5 text-green-100 italic">Welcome to my</h1>
              <h1 className="text-[5rem] uppercase below-1445:text-[4rem] below-1100:text-[2rem] below-730:text-[1rem]  below-445:px-5 text-green-100 italic below-500:text-[1.5rem]">Playground</h1>
            </div>
            <div className="flex justify-center pt-6 below-730:mt-5 h-[4rem]">
              <h1 className="text-[1.5rem] uppercase below-1445:text-[1.5rem] below-1100:text-[1rem] below-730:text-[0.8rem] below-500:w-[70vw] below-500:text-[0.5rem] text-green-300 italic">
                <TypingEffect
                  text={[
                     "I break things just to rebuild them better",
                      "Code is my canvas, products are my art",
                      "Scroll down ... the good stuff’s waiting",
                  ]}
                  speed={30}
                  eraseSpeed={20}
                />
              </h1>
            </div>
            <div className="flex items-center flex-col">
              <div className="mt-5 flex items-center w-full flex-col self-center below-730:w-[80vw]">
                <p className="mt-5 uppercase text-green-100 text-xs below-730:text-[0.6rem] leading-loose below-500:text-[0.4rem] ">
                 I don’t just write code ... I design experiences. From full stack apps 
                  to bold experiments, I build with a mix of precision and chaos. 
                  Clean, fast, and a little rebellious.
                </p>
                <div className="mt-8 px-6 mb-7">
                  <h1 className="uppercase text-green-100 text-xs below-730:text-[0.6rem] italic leading-loose below-500:text-[0.4rem] ">
                    Curious? The rabbit hole goes deeper — all my experiments and side projects live on github<span className="inline-block transform -rotate-45 scale-75">→</span>
                  </h1>
                  <div className="mt-4 flex items-center justify-center">
                    <div className="flex items-center h-[3rem] mx-4">
                      <Link href="https://github.com/amar1795" target="_blank">
                        <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30  below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[6rem] below-500:text-[0.3rem] below-730:text-[0.6rem]"
                          style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                        >
                          Github
                        </button>
                      </Link>
                    </div>
                    <Link href="https://github.com/amar1795/portfolio-website" target="_blank">
                      <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30  below-378:px-2 below-378:py-1 mx-2 my-2 below-500:px-1 below-500:mx-0 below-500:w-[8rem] below-500:text-[0.3rem] below-730:text-[0.6rem]"
                        style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                      >
                        Source Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           <div className="">
             {/* <SpotifyWidget /> */}
             <p className="text-green-100 italic text-[0.6rem]  below-500:text-[0.4rem] ">
               Built from scratch  by <Link href="https://x.com/jeetamar496" target="_blank" className="underline hover:text-green-200">Me</Link>,
               <br />
               stress-tested by my WiFi.
             </p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
