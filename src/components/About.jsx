import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-white">
              ABOUT
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-col-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold items-center sm:mx-16 sm:pr-10">
            <p className="text-left text-gray-400">
              Hi, I'm a Computer Science student, nice to meet you. Please take a
              look around
            </p>
          </div>
          <div className="sm:mx-16">
            <p className="text-orange-300 font-semibold font-sans">
              I am passionate about building excellent software that improves
              the lives of those around me. Experience working across the
              full-stack of software development. Looking for a role where I can
              grow and learn from experienced team members while drawing on
              project experience I have already successfully executed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
