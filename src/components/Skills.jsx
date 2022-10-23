import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-slate-700 text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500 '>SKILLS</p>
                <p className='py-4 font-bold text-purple-300'>// These are the technologies I've worked with</p>
            </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-8'>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 md:ml-40 sm:w-20 sm:ml-24'>
                <img className='mx-auto w-20' src={HTML} alt="HTML"/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 md:ml-28 sm:w-20 sm:ml-10'>
                <img className='mx-auto w-20' src={CSS} alt="HTML"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 md:ml-14 sm:w-24 sm:ml-7'>
                <img className='mx-auto w-20' src={javascript} alt="HTML"/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 sm:w-20'>
                <img className='mx-auto w-20' src={react} alt="HTML"/>
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 md:ml-40 sm:w-20 sm:ml-24'>
                <img className='mx-auto w-20' src={github} alt="HTML"/>
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 md:ml-28 sm:w-20 sm:ml-10'>
                <img className='mx-auto w-20' src={tailwind} alt="HTML"/>
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 md:ml-14 sm:w-24 sm:ml-7'>
                <img className='mx-auto w-20' src={node} alt="HTML"/>
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-slate-800 hover:scale-110 duration-500 md:w-52 sm:w-20'>
                <img className='mx-auto w-20' src={mongo} alt="HTML"/>
                <p className='my-4'>MONGO DB</p>
            </div>
        </div>
    </div>
  )
}

export default Skills