import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-700 flex justify-center items-center p-4'>
        <form action="https://getform.io/f/74ff26dd-69bf-462d-9e46-2dd186c00e87" method="post" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 mt-20 md:mx-auto sm:mx-auto'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-100 md:ml-48 sm:ml-48'>CONTACT</p>
                <p className='py-4 sm:ml-28 md:ml-[-10px] text-purple-300'>// Submit the form below or shoot me an email - marvelsumit2002@gmail.com</p>
            </div>
            <div className='flex flex-col sm:w-60 sm:mx-auto md:w-full'>
                <input className='bg-[#f3f4f8] p-2' type="text" placeholder='Name' name='name'/>
                <input className='my-4 bg-[#f3f4f8] p-2' type="text" placeholder='Email' name='email'/>
                <textarea className='bg-[#f3f4f8] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-6 mx-auto flex items-center sm:mb-14'>Let's Collaborate</button>
            </div>
        </form>
    </div>
  )
}

export default Contact