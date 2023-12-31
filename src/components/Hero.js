import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[920px] mt-[10px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] px-1 font-bold p-2">
          ADVANCE YOUR WEB DEVELOPMENT SKILLS
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl px-1 font-bold md: py-6">
          Unlock Web Potential.
        </h1>
        <div className="flex justify-center items-center px-1">
          <p className="text-lg sm:text-3xl md:text-4xl pl-2 font-bold py-2">
            Boost revenue and performance for
          </p>
          <Typed
            className="text-xl sm:text-4xl md:text-5xl font-bold pl-2 md:pl-4"
            strings={["B2B", "D2C", "SaaS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl px-2 text-xl font-bold text-gray-500">
          Optimize your web development processes to boost revenue for B2B, D2C,
          and SaaS platforms.
        </p>
        <button className=" hover:bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black bg-[#00df98d6]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
