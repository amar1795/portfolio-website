import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="  h-screen  flex">
      <div className="terminals mt-12    w-full flex flex-col items-center overflow-auto">
        <div className="w-[90vw] max-w-6xl ml-[12rem] below-1100:ml-0 flex justify-center">
          <h1 className="text-[6rem] uppercase below-1445:text-[4rem] below-835:mt-[2rem] below-695:text-[2rem] below-500:text-[1.5rem] below-500:mt-[5rem] text-green-100 italic">Contact Me</h1>
        </div>
        <div className=" sectionBorder below-695:mt-[2rem]   w-[78vw]  ml-[14rem] below-1100:ml-0  px-4  ">
          <div className=" mt-8 px-6  below-500:px-0   ">
            <h1 className="uppercase leading-loose text-green-100 text-xs below-500:text-[0.4rem] mb-4 italic">  Got a wild idea? A problem that needs fixing? Or just want to geek out about code?  
  Slide into my inbox or socials — I actually reply.</h1>
            
    
  
          </div>
          <div className=" mt-8 px-6 below-500:px-0">
            <h1 className="uppercase text-green-100 text-xs below-500:text-[0.4rem] italic">Drop a line: <a href="mailto:your.jeetamar0038@gmail.com" className=" no-underline  text-wrap text-green-100 text-xs below-500:text-[0.4rem] italic">jeetamar0038@gmail.com
            </a></h1>

            <h1 className="uppercase leading-loose text-green-100 text-xs below-500:text-[0.4rem]  my-6 italic">Stalk me on :</h1>
            <div className=" mt-4 flex items-center   below-500:hidden">
              <div className=" flex items-center  h-[3rem] mx-4 below-500:mx-0 ">
                <Link href="https://www.linkedin.com/in/amarjeet-singh-298329242/"  target="_blank">
                  {" "}
                  <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                    style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                  >Linkedin</button>
                </Link>
              </div>
            </div>
            <h1 className="uppercase leading-loose text-green-100 text-xs below-500:text-[0.4rem] ml-16 italic below-500:hidden">OR</h1>
            <div className="  flex items-center  below-500:hidden">
              <div className=" flex items-center  h-[3rem] mx-4 below-500:mx-0 ">
                <Link href="https://x.com/jeetamar496" target="_blank">
                  {" "}
                  <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-378:text-[0.4rem] below-378:px-2 below-378:py-1 mx-2 my-2"
                    style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                  >Twitter</button>
                </Link>
              </div>
            </div>
            <div className=" hidden below-500:flex  below-500:flex-col items-center  ">
            <div className=" mt-4 flex items-center justify-center    below-500:w-[7rem]">
              <div className=" flex items-center  h-[3rem] mx-4 below-500:mx-0 ">
                <Link href="https://www.linkedin.com/in/amarjeet-singh-298329242/"  target="_blank">
                  {" "}
                  <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-500:text-[0.4rem] mx-2 my-2 "
                    style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                  >Linkedin</button>
                </Link>
              </div>
            </div>
           <h1 className="uppercase leading-loose text-green-100 text-xs below-500:text-[0.4rem] hidden below-500:block  italic">OR</h1>
            <div className="  flex items-center justify-center below-500:w-[7rem]">
              <div className=" flex items-center   h-[3rem] mx-4 below-500:mx-0 ">
                <Link href="https://x.com/jeetamar496" target="_blank">
                  {" "}
                  <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-500:text-[0.4rem] mx-2 my-2"
                    style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                  >Twitter</button>
                </Link>
              </div>
            </div>
            </div>
          </div>

          

          <div className=" mt-8 px-6 mb-7 uppercase below-500:px-0">
            <h1 className="text-green-100 text-xs below-500:text-[0.4rem] italic"> Dig through my code playground on :</h1>
            <div className=" mt-4 flex items-center justify-center">
              <div className=" flex items-center  h-[3rem] mx-4 ">
                <Link href="https://github.com/amar1795"  target="_blank">
                  {" "}
                  <button className="border-2 border-green-400/80 text-green-300 px-3 py-1 text-xs uppercase rounded transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 hover:shadow-lg hover:shadow-green-400/50 shadow-md shadow-green-400/30 below-500:text-[0.4rem] mx-2 my-2"
                    style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)', textDecoration: 'none' }}
                  >Github</button>
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
