import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="  h-screen  flex">
      <div className="terminals mt-12    w-full flex flex-col items-center overflow-auto">
        <h1 className="text-[6rem] uppercase below-1445:text-[4rem] below-835:mt-[2rem] below-695:text-[2rem] below-378:text-[1.1rem] below-378:mt-[5rem] ">Contact Me</h1>
        <div className=" sectionBorder below-695:mt-[2rem]   w-[80vw]   ml-[12rem] below-1100:ml-0  px-4  ">
          <div className=" mt-8 px-6 below-426:px-2 below-378:px-0   ">
            <h1 className=" below-378:text-[0.6rem] uppercase"> You can Contact me on this Email :</h1>
            <a href="mailto:your.facfrenzy97@gmail.com" className=" no-underline text-wrap   below-460:text-[0.8rem] below-426:text-[0.5rem] below-378:text-[0.6rem]">facfrenzy97@gmail.com
            </a>
    
  
          </div>
          <div className=" mt-8 px-6 below-378:px-0">
            <h1 className=" below-378:text-[0.6rem] uppercase">alternatively ! you can also reach out to me on my socials</h1>
            <div className=" mt-4 flex items-center   below-378:hidden">
              <div className=" flex items-center  h-[3rem] mx-4 below-378:mx-0 ">
                <Link href="https://www.linkedin.com/in/amarjeet-singh-298329242/"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2 uppercase below-378:text-[0.4rem]">Linkedin</button>
                </Link>
              </div>
            </div>
            <div className=" mt-4 flex items-center  below-378:hidden">
              <div className=" flex items-center  h-[3rem] mx-4 below-378:mx-0 ">
                <Link href="https://x.com/jeetamar496" target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2 uppercase below-378:text-[0.4rem]">Twitter</button>
                </Link>
              </div>
            </div>
            <div className=" hidden below-378:flex  ">
            <div className=" mt-4 flex items-center   below-378:w-[7rem]">
              <div className=" flex items-center  h-[3rem] mx-4 below-378:mx-0 ">
                <Link href="https://www.linkedin.com/in/amarjeet-singh-298329242/"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2 uppercase below-378:text-[0.4rem]">Linkedin</button>
                </Link>
              </div>
            </div>
            <div className=" mt-4 flex items-center  below-378:w-[7rem]">
              <div className=" flex items-center  h-[3rem] mx-4 below-378:mx-0 ">
                <Link href="https://x.com/jeetamar496" target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2 uppercase below-378:text-[0.4rem]">Twitter</button>
                </Link>
              </div>
            </div>
            </div>
          </div>

          <div className=" mt-8 px-6 mb-7 below-378:text-[0.6rem] uppercase below-378:px-0">
            <h1> You can Find all my projects and work on my github :</h1>
            <div className=" mt-4 flex items-center">
              <div className=" flex items-center  h-[3rem] mx-4 ">
                <Link href="https://github.com/amar1795"  target="_blank">
                  {" "}
                  <button className=" glow-button mx-2 my-2 uppercase below-378:text-[0.4rem]">Github</button>
                </Link>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default page;
