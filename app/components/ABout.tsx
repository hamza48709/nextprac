import React from 'react'
import { Download } from 'lucide-react'

const ABout = () => {
  return (
    <div className='h-screen p-5 flex flex-col justify-evenly align-middle shadow-slate-700' id='about'>

        <h1 className='text-center font-bold text-3xl mb-10 pt-20'>About me</h1>
        <div className="data bg-white p-4 text-center max-w-5xl mx-auto">
        <p className='px-6 py-10 shadow-slate-900 text-justify'>Hi there, i,m a full-stack developer with academic background in Software Development.i,ve been honing my skills in web development, and  i,m always 
            eager to  learn more and expand my abilties. Thank you for visiting my portfolio Website, and feel free to reach out if you have any questions or opportunities to collaborate.
            

        </p>
       
         
        <div className="btn flex bg-yellow-200 p-4 justify-center max-w-xs mx-auto rounded-md shadow-lg">
            <h1>Download Cv</h1>
            <Download/>
        </div>
       
          
        </div>
       
    </div>
  )
}

export default ABout