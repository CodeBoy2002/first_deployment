import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-scroll";
import {MdAssignmentInd} from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-slate-700 text-gray-300">
      <div>
        <img
          className="h-[50px] cursor-pointer"
          style={{ width: "50px" }}
          src={logo}
          alt="SK"
        />
      </div>

      <ul className="hidden md:flex text-white">
        <li className="cursor-pointer hover:underline hover:bg-gray-500 hover:rounded-full text-cyan-500 hover:font-bold hover:text-pink-400">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer hover:underline hover:bg-gray-500 hover:rounded-full text-cyan-500 hover:font-bold hover:text-pink-400">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer hover:underline hover:bg-gray-500 hover:rounded-full text-cyan-500 hover:font-bold hover:text-pink-400">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer hover:underline hover:bg-gray-500 hover:rounded-full text-cyan-500 hover:font-bold hover:text-pink-400">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer hover:underline hover:bg-gray-500 hover:rounded-full text-cyan-500 hover:font-bold hover:text-pink-400">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburgur*/}
      <div onClick={handleClick} className="md:hidden text-white z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile icons*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "text-white absolute top-0 left-0 w-full h-screen bg-slate-700 flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-3xl font-sans hover:font-serif">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl font-sans hover:font-serif">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl font-sans hover:font-serif">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl font-sans hover:font-serif">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl font-sans hover:font-serif">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Social icons*/}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sumit-kumar-1baa66178/"
              target={"_blank"}
            >
              Resume <MdAssignmentInd size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sumit-kumar-1baa66178/"
              target={"_blank"}
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://github.com"
              target={"_blank"}
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="http://marvelsumit2002@gmail.com"
              target={"_blank"}
            >
              Gmail <IoIosMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
