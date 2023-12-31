import React from 'react'
import Image from 'next/image'
import { Mail,Contact } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="herosection h-50 w-screen p-10 flex justify-around align-middle flex-col md:flex-row bg-gray-200" id='home'>
      <div className="img  flex  justify-center"><Image src="/portfolio_pic.jpeg" width={400} height={400} alt='image show nai ho rhe' className='rounded-full border-4 border-yellow'/></div>
      <div className="info flex justify-center flex-col p-10 font-bold  md:text-lg"><h1 className='bg-yellow-200 p-4 text-center text-xs  rounded-md'>HELLO I,m</h1>
      <h1 className='mt-4  rounded-full selection: text-center shadow-md bg-white p-4 animate-pulse'>HAMZA</h1>
      <h1 className='bg-yellow-200 mt-5 p-4  shadow-md text-center animate-bounce'>Full Stack Developer</h1>
      <a  href="mailto:hk48709@gmail.com" > <span className='email flex  mt-4 bg-red-400 hover:bg-red-300  p-4 shadow-md rounded-full justify-center'><Mail/> hk48709@gmail.com</span></a>
      <a  href="tel:+923365763310"><span className='email flex  mt-4 bg-red-400 hover:bg-red-300 p-4 shadow-md rounded-full justify-center'><Contact/> +923365763310</span></a>
      </div>
      


        
        
    </div>
  )
}

export default Hero