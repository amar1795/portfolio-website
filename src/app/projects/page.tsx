import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen    flex ">
      <div className="terminals mt-12  w-full flex flex-col items-center overflow-auto  ">
        <h1 className="text-[6rem] uppercase ">Projects</h1>
        <div className="  h-screen w-[80vw] ml-[12rem] ">
          {/* projects container */}
          <div className="projectCard flex  h-[10rem] min-h-[20rem] my-4">
            <div className="leftCard 0 h-full w-[25rem]">Project preview gif/video</div>
            <div className="rightCard  h-full w-full flex flex-col   justify-between">
             <div className="  flex-1 pt-[1rem] ">
             <h1 className=" text-[2rem]">Project Name</h1>
              <p className=" mt-2">Project Completion date</p>
              <p className=" mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere quia eligendi sapiente, quae expedita omnis reprehenderit distinctio tempora accusamus non voluptatibus! Iure et quidem voluptatibus facilis, libero pariatur veritatis? </p>
              
             
             </div>
             <div className="  flex justify-between h-[4rem]  min-h-4">
                  <div className=" flex  justify-between items-center  py-3 px-2 ">
                  <div className=" flex items-center  h-[3rem] mx-4 ">
                     <Link href="/projects/1"> <button className=" glow-button mx-2 my-2">Live Link</button></Link>
                  </div>
                  
                  <div className=" flex items-center  h-[3rem]">
                     <Link href="/projects/1"> <button className=" glow-button mx-2 my-2">Source Code</button></Link>
                  </div>

                  </div>
                  <div className=" flex items-center  h-[3rem]">
                     <Link href="/projects/1"> <button className=" glow-button mx-2 my-2">View Project Details</button></Link>
                  </div>
              </div>
            </div>
          </div>
          
          
         
        </div>
      </div>
    </div>
  );
};

export default page;
