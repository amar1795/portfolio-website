"use client";
import Link from "next/link";
import React from "react";
import TypingEffect from "react-typing-effect";

const MainComponent = () => {
  return (
    <div className="crt-wrapper  h-screen  text-center flex  ">
      <div className=" ">
        <div>
          <div className="terminals mt-12">
            <h1 className="text-[6rem] uppercase ">Welcome to My Website</h1>
            <div className=" ml-[10rem] ">
            <h1 className=" text-[2rem] uppercase">
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
            <div className=" flex items-center  flex-col">

            
            <div className=" mt-5  flex items-center w-[70vw] flex-col  self-center">
              <p className=" mt-5">
                I'm a developer who specializes in Full Stack web development and creating modern web
                Apps and websites.
              </p>
              <div className=" mt-8 px-6 mb-7">
            <h1> You can Find all my projects and work on my github :</h1>
            <div className=" mt-4 flex items-center justify-center">
              <div className=" flex items-center  h-[3rem] mx-4 ">
                <Link href="https://github.com/amar1795"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2">Github</button>
                </Link>
              </div>
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
