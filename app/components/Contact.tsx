import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen my-10 bg-white p-10'>
        <h1 className='text-center font-bold  text-xl mt-4 mb-8'>Contact me</h1>
        <form action="" className='flex flex-col max-w-lg mx-auto'>
            <label htmlFor="Name">Name</label>
            <br />
            <input type="text" name="name" id="Name" placeholder='Enter your Name' className='border-4 shadow-lg rounded-xl p-2 hover:border-black' />
            <br />
            <label htmlFor="Email">Email</label>
            <br />
            <input type="email" name="email" id="Email" placeholder='Enter your Email' className='border-4 shadow-lg rounded-xl p-2 hover:border-black' />
            <br />
            <label htmlFor="Email">Message</label>
            <br />
            <textarea name="" id="" cols={30} rows={10} placeholder='Enter your message' className='border-4 shadow-lg rounded-xl p-2 hover:border-black'></textarea>
            <button className='btn bg-yellow-200 p-4 justify-center rounded-md shadow-lg mt-5'>Submit</button>


        </form>

    </div>
  )
}

export default Contact