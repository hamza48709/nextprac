
import Image from 'next/image'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ABout from './components/ABout'
import Skills from './components/Skills'

export default function Home() {
  return (
  <>
  <div className='bg-slate-100'>
    <Hero/>
    <ABout/>
    <Skills/>

  </div>
  
  </>
 
  

  )
}
