import React from 'react'
import Image from 'next/image'

const Skill = (props:any) => {
  return (
    <>
    <Image src={props.pic} width={200} height={200}  alt={props.name} className='hover:w-44 border-black border-4  p-4 shadow-lg rounded-md basis-10'/>
    
    </>
  )
}

export default Skill