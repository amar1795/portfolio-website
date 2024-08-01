import React from 'react'

const page = () => {
  return (
    <div  className='h-screen    flex flex-col'>

    <div className="terminals mt-12 mb-8 below-700:mt-16 below-635:mt-[7rem]   w-full flex flex-col items-center overflow-auto hide-scrollbar">
    <h1 className="text-[6rem] uppercase below-1100:text-[4rem] below-700:text-[2.5rem] below-445:text-[1.5rem] ">Tech Stacks</h1>
    <div className=" sectionBorder w-[80vw]  ml-[12rem] below-445:mt-[2rem]  below-1100:ml-0 px-4   ">
        <div className=' mt-[2rem] px-4'>
          <h1 className="text-[2rem] below-500:text-[1rem]">Programming Languages</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2">javascript</button>
          <button className=" glow-button mx-2 my-2">typescript</button>
         
          <button className=" glow-button mx-2 my-2">HTML </button>
          <button className=" glow-button mx-2 my-2">CSS</button>
          <button className=" glow-button mx-2 my-2">JAVA</button>
        
          </div>
        </div>

        <div className=' mt-[2rem] px-4'>
          <h1 className="text-[2rem] below-500:text-[1rem]"> frameworks and Libraries</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2">Nextjs</button>
          <button className=" glow-button mx-2 my-2">NextAuth</button>
          <button className=" glow-button mx-2 my-2">Clerk</button>

          <button className=" glow-button mx-2 my-2">Reactjs</button>
          <button className=" glow-button mx-2 my-2">Redux</button>
          <button className=" glow-button mx-2 my-2">Bootstrap</button>
          <button className=" glow-button mx-2 my-2">ExpressJS</button>
          <button className=" glow-button mx-2 my-2">Nodejs</button>
          <button className=" glow-button mx-2 my-2">Tailwind UI</button>
          <button className=" glow-button mx-2 my-2">Ant Design </button>
          <button className=" glow-button mx-2 my-2">Material UI</button>
          <button className=" glow-button mx-2 my-2">Shadcn UI</button>
          <button className=" glow-button mx-2 my-2">luicide react</button>
          <button className=" glow-button mx-2 my-2">Cloudinary</button>
          <button className=" glow-button mx-2 my-2">Recharts</button>
          <button className=" glow-button mx-2 my-2">Zod</button>
          
          </div>
        </div>
        <div className=' mt-[2rem] px-4'>
          <h1 className="text-[2rem] below-500:text-[1rem]">Databases</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2">MongoDB</button>
          <button className=" glow-button mx-2 my-2">SQL</button>
          <button className=" glow-button mx-2 my-2">Prisma ORM</button>
          
          </div>
        </div>

        <div className=' mt-[2rem] px-4'>
          <h1 className="text-[2rem] below-500:text-[1rem]">Tools</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2">Visual Studio</button>
          <button className=" glow-button mx-2 my-2">GIT</button>
          <button className=" glow-button mx-2 my-2">Github</button>
          <button className=" glow-button mx-2 my-2">vercel</button>
          <button className=" glow-button mx-2 my-2">hostinger</button>
          <button className=" glow-button mx-2 my-2">Mailgun</button>
          <button className=" glow-button mx-2 my-2">resend</button>
          <button className=" glow-button mx-2 my-2">Stripe</button>
          
          </div>
        </div>

        <div className=' mt-[2rem] px-4 mb-7'>
          <h1 className="text-[2rem] below-500:text-[1rem]">Other Skills</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2">front end development</button>
          <button className=" glow-button mx-2 my-2">backend devlopment</button>
          <button className=" glow-button mx-2 my-2">fullstack development</button>
          <button className=" glow-button mx-2 my-2">React Native</button>
                  
          </div>
        </div>
      


        
       
     
      </div>
    </div>

    
  </div>
  )
}

export default page
