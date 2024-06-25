import React from "react";

const JobCategory = () => {
  return (
    <div className=" pt-20 pb-12 ">
      <div className="text-center p-3">
        <h1 className=" text-black text-[27px] text-opacity-90 font-bold">
          Popular Job Categories
        </h1>
        <p className=" mt-[1rem] text-[15px] text-gray-800 text-opacity-80">
          1000+ Jobs live
        </p>
      </div>
      <div
        className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem]
        items-center"
      >
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon1.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">finance</h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              11 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon2.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">Marketing</h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              18 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon3.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">Design</h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              38 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon4.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">
              Development
            </h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              25 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon5.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">
              Human Resource
            </h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              08 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon6.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">
              Automotive Jobs
            </h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              13 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon7.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">
              Coustomer Service
            </h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              29 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon8.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">
              Health and Care
            </h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              42 open position
            </p>
          </div>
        </div>
        <div className=" p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
          <div className=" flex items-center space-x-4">
            <img src="/image/icon9.png" alt="" width={60} height={60} />
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">
              Project Management
            </h1>
            <p className=" text-[14px] text-black font-semibold text-opacity-50">
              12 open position
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
