import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-700 ">
      {/*Container*/}
      <div className="max-w-[1000px] ml-auto px-8 flex flex-col justify-center h-full sm:mx-20 items-center sm:items-center">
        <p className="text-pink-600 mt-10 sm:mt-20">Hi, my name is</p>
        <h1 className="text-7xl sm:text-6xl font-bold text-white">
          Sumit Kumar
        </h1>
        <h2 className="text-7xl sm:text-6xl font-bold text-gray-400 ml-7">
          I'm a full Stack Developer. :)
        </h2>
        <p className="text-cyan-300 py-4 max-w-[700px] font-sans">
          I'm a full-stack developer specilizing in building (and occasionally
          designing) exceptional digital experiances. Currently, I'm focused on
          building responsive full-stack web application{" "}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
            <Link to="work" smooth={true} duration={500}>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4 group-hover:rotate-90 duration-300" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
