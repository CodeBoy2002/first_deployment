import React from "react";
import weather from "../assets/Projects/weather.png";
import management from '../assets/Projects/management.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-slate-700">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:mx-auto md:mx-[-5px] 2xl:mt-10 2xl:mx-auto xl:mt-10 xl:mx-auto lg:mx-auto lg:mt-10 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-200 border-pink-600 mx-8">
            WORK
          </p>
          <p className="py-6 2xl:ml-[-70px] xl:ml-[-70px] lg:ml-[-70px] text-purple-300">// Check out some of my recent work</p>
        </div>

        <div
          className="grid sm:grid-cols-1 sm:ml-20 sm:mr-10 md:mx-[-5px] md:grid-cols-1 gap-4 lg:w-80 lg:mx-auto"
        >
          <div style={{ backgroundImage: `url(${management})` }} className="shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/*Hover Effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray font-bold text-lg">
                    CODE
                  </button>
                </a>

              </div>
            </div>
          </div>
          
          <div style={{ backgroundImage: `url(${weather})` }} className="shadow-lg shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div">
            {/*Hover Effect*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray font-bold text-lg">
                    CODE
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
