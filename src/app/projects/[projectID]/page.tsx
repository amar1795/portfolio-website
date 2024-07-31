import React from "react";

const page = ({ params }: { params: { projectID: string } }) => {
  return (
    <div className=" h-screen   overflow-auto   flex    ">
        <div className=" mt-12  w-full flex flex-col items-center  ">
        <h1 className="text-[6rem] uppercase ">Projects</h1>
        <div className=" sectionBorder w-[80vw] ml-[12rem]  px-4   ">
          
           <div className=" text-center uppercase">
           <h1 className=" text-[2rem]">  Project name {params.projectID}</h1>
           </div>

           <h1 className=" my-4"> completion time frame</h1>
           <div className="  min-h-[5rem] ">
           <h1 className=" my-4"> Tech Stacks used :</h1>
           <div>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           <button className=" glow-button mx-2 my-2"> nextjs</button>
           </div>
           </div>

            <div className=" mt-4">
            <div className=" flex mt-4">
            <h1 className=" my-4"> Live Link:</h1>
            <button className=" glow-button mx-2 my-2"> Live Link</button>
            </div>
            <div className=" flex  mt-4">
            <h1 className=" my-4"> Source Code:</h1>
            <button className=" glow-button mx-2 my-2"> Live Link</button>
            </div>
            </div>
            <div className="   h-[25rem]   mt-5  mb-7 ">
              <h1  className=" text-[1.2rem]  mb-7"> Description :</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia unde ex accusamus maiores temporibus praesentium blanditiis doloribus officiis esse neque nihil! Eveniet voluptatum possimus unde dolores, quaerat nulla omnis.</p>
              </div>
            
         
        </div>
      </div>
    </div>
  );
};

export default page;
