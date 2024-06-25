import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" fixed bottom-4 animate-pulse right-4">
      <button
        onClick={ScrollToTop}
        className=" bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
