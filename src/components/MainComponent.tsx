"use client"
import React from 'react'
import  TypingEffect  from 'react-typing-effect';

const MainComponent = () => {
  return (
    <div className="crt-wrapper  h-screen  text-center">
        
  
    <div className="crt-container ">
        <div>

       
      <div className="terminals">
   <h1 className=' text-[5rem] uppercase'>
          <TypingEffect
            text={["Welcome to My Portfolio", "I'm a React Developer", "Explore My Work"]}
            speed={40}
            eraseSpeed={20}
          />
        </h1>
        <h1 className="text-[10rem] uppercase ">Hello World</h1>
        <p>I'm a developer who specializes in React and modern web technologies.</p>
        <p>Check out my projects and get in touch!</p>
        <p><a href="https://github.com/yourusername">GitHub</a> | <a href="mailto:your.email@example.com">Email</a></p>
      </div>
       </div>
    </div>
    </div>
  )
}

export default MainComponent
