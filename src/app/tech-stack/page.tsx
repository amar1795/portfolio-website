import React from 'react'

const page = () => {
  return (
    <div  className='h-screen    flex flex-col'>

    <div className="terminals mt-12 mb-8 below-700:mt-16 below-635:mt-[7rem]   w-full flex flex-col items-center overflow-auto hide-scrollbar">
    <h1 className="text-[6rem] uppercase below-1100:text-[4rem] below-700:text-[2.5rem] below-445:text-[1.5rem] below-500:text-[1.1rem] ">Tech Stacks</h1>
    <div className=" sectionBorder w-[80vw]  ml-[12rem] below-445:mt-[2rem]  below-1100:ml-0 px-4   ">
        <div className=' mt-[2rem] px-4  below-500:px-0' >
          <h1 className="text-[2rem]   uppercase  below-500:text-center below-500:text-[0.8rem] ">Programming Languages</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2 uppercase below-500:px-2  below-500:text-[0.4rem] below-500:mx-0">javascript</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:px-2  below-500:text-[0.4rem]">typescript</button>
         
          <button className=" glow-button mx-2 my-2 uppercase below-500:px-2  below-500:text-[0.4rem]">HTML </button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:px-2  below-500:text-[0.4rem]">CSS</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:px-2  below-500:text-[0.4rem]">JAVA</button>
        
          </div>
        </div>

        <div className=' mt-[2rem] px-4 below-500:px-0 '>
          <h1 className="text-[2rem]  uppercase text-center below-500:text-[0.8rem]"> frameworks and Libraries</h1>
          <div className="flex flex-wrap mt-4 ">
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Nextjs</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">NextAuth</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Clerk</button>

          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Reactjs</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Redux</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Bootstrap</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">ExpressJS</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2 ">Nodejs</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Tailwind UI</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Ant Design </button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Material UI</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Shadcn UI</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">luicide react</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Cloudinary</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Recharts</button>
          <button className=" glow-button mx-2 my-2 uppercase below-500:text-[0.4rem] below-500:mx-1 below-500:px-2">Zod</button>
          
          </div>
        </div>
        <div className=' mt-[2rem] px-4 below-500:px-0'>
          <h1 className="text-[2rem]  uppercase text-center below-500:text-[0.8rem]">Databases</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 uppercase">MongoDB</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 uppercase">SQL</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 uppercase">Prisma ORM</button>
          
          </div>
        </div>

        <div className=' mt-[2rem] px-4 below-500:px-0 '>
          <h1 className="text-[2rem]  uppercase below-500:text-[0.8rem]">Tools</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">Visual Studio</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">GIT</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">Github</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">vercel</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">hostinger</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">Mailgun</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">resend</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 below-500:text-[0.4rem] uppercase">Stripe</button>
          
          </div>
        </div>

        <div className=' mt-[2rem] px-4 mb-7 below-500:px-0'>
          <h1 className="text-[2rem]  uppercase text-center below-500:text-[0.8rem]">Other Skills</h1>
          <div className="flex flex-wrap mt-4">
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 uppercase below-500:text-[0.4rem]">front end development</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 uppercase below-500:text-[0.4rem]">backend devlopment</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 uppercase below-500:text-[0.4rem]">fullstack development</button>
          <button className=" glow-button mx-2 my-2 below-500:mx-1 below-500:px-2 uppercase below-500:text-[0.4rem]">React Native</button>
                  
          </div>
        </div>
      


        
       
     
      </div>
    </div>

    
  </div>
  )
}

export default page
