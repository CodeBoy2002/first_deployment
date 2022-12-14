import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail, MdMail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white h-20 md:mx-auto flex flex-row justify-center items-center gap-4 p-5'>
      <div className='my-28 flex flex-row gap-5 justify-center items-center mx-auto pt-3'>

        <h1 className='font-extralight font-mono'>ALL RIGHT RESERVED</h1>
        <p className='font-extralight font-serif'>Copyright © 2022</p>
          <ul className='flex flex-row'>
            <li>
              <a href="https://www.linkedin.com/in/sumit-kumar-1baa66178/" target={'_blank'}>
                <BsLinkedin size={20}/>
              </a>
            </li>
            <li>
              <a href="https://github.com/CodeBoy2002" target={'_blank'}>
                <BsGithub size={20}/>
              </a>
            </li>
            <li>
              <a href="http://marvelsumit2002@gmail.com" target={'_blank'}>
                <MdMail size={20}/>
              </a>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Footer   