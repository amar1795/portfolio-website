"use client";
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
                I'm a developer who specializes in Full Stack web development and modern web
                technologies.
              </p>
              <p className=" mt-5">Check out my projects and get in touch!</p>
              <p className=" mt-5">
                <a href="https://github.com/yourusername">GitHub</a> |{" "}
                <a href="mailto:your.email@example.com">Email</a>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
