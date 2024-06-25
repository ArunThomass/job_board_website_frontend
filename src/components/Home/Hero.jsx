import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  
  return (
    <div className=" pt-[1rem] pb-[3rem]  ">
      <div className=" w-[100%] h-[60vh] flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
          <div>
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-blue-950 leading-[3rem] lg:leading-[4rem] font-extrabold uppercase ">
              The <span className=" text-blue-500">Easiest Way</span> <br /> To
              Get Your New Job {""}
            </h1>
            <p className=" text-gray-700 mt-3">
            Your career journey is serious, but should never be lonely or dull. With the new Glassdoor, work communities are right at your fingertips.
            </p>
            <div className="mt-[1.5rem] ">
              <Link
                to="/job/getall"
                className=" py-2 px-5 border rounded bg-blue-950 text-white"
              >
                Search Job
              </Link>
            </div>
          </div>
          <div className=" hidden lg:block">
            <img src="home.png" alt="hero" width={700} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
