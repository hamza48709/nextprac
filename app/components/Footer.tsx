import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row justify-evenly p-8 bg-slate-200 align-middle">
       <div className="detail flex justify-center align-middle">
        <h1 className='font-bold text-center'>Created By:<span>HAMZA</span></h1>
       </div>
      
       <div className="menu">
      <h1 className='font-bold'>Explore</h1>
      <ul>
        <li>
       <Link href="#home">Home</Link>
        </li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>

       </div>
       <div className="Rights flex justify-center align-middle">
       <p className='font-bold'>&copy; 2022 .All Rights Reserved</p>

       </div>
    </div>
  )
}

export default Footer