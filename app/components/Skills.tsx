import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <>
    
    <div className="skill bg-white h-auto p-10">
    <h1 className='font-bold text-center text-5xl mt-4 mb-8'>Skills</h1>
    <div className="icons flex max-w-5xl mx-auto flex-wrap gap-8 justify-center">
    <Skill pic="/html-5.png" name="html" />
    <Skill pic="/css-3.png" name="html" />
    <Skill pic="/tailwind.png" name="html" />
    <Skill pic="/java-script.png" name="html" />
    <Skill pic="/typescript.png" name="html" />
    <Skill pic="/react.png" name="html" />
    <Skill pic="/next.svg" name="html"/>
    <Skill pic="/postgress.png" name="html" />
    <Skill pic="/visual-basic.png" name="html" className="bg-white" />
    

    </div>
    

    </div>
    
   
    </>
    

   
  )
}

export default Skills