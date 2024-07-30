"use client"
import React from 'react'
import  TypingEffect  from 'react-typing-effect';

const MainComponent = () => {
  return (
    <div className="crt-wrapper  h-screen  text-center flex  ">
        
  
    <div className="crt-container ">
        <div>

       
      <div className="terminals mt-12">
       <h1 className="text-[6rem] uppercase ">Welcome to My Website</h1>
   <h1 className=' text-[2rem] uppercase'>
          <TypingEffect
            text={["I'm a Fullstack web Developer", "Loves to create beautifull apps", "Explore My Work"]}
            speed={40}
            eraseSpeed={20}
          />
        </h1>
        <div className=' mt-5'>
        <p className=' font-bold'>I'm a developer who specializes in React and modern web technologies.</p>
        <p>Check out my projects and get in touch!</p>
        <p><a href="https://github.com/yourusername">GitHub</a> | <a href="mailto:your.email@example.com">Email</a></p>
        </div>
      </div>
       </div>
    </div>
    </div>
  )
}

export default MainComponent
