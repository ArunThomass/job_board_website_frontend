import React, { useContext, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link,  useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  if (!isAuthorized) {
    return null;
}
  return (
    
    <header className=" max-w-screen-2xl container max-auto xl:px-24 px-4">
      <nav className="flex justify-between mx-auto container items-center py-2 md:py-4">
        <Link to="/" className=" ">
          <img src="/image/logo1.png" alt="" width={180} height={250} />
        </Link>
        <ul className="hidden md:flex gap-14">
          
            <li className="text-base text-blue-900 text-primary">
            <Link to={"/"} onClick={() => setShow(false)}>
            Home
            </Link>
            </li>
            <li className="text-base text-blue-900 text-primary">
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
            Find Job
            </Link>
            </li>
            <li className="text-base text-blue-900 text-primary">
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "Applicant's Application"
                : "My Appliication"}
            </Link>
            </li>
            {user && user.role === "Employer" ? (
              <>
            <li className="text-base text-blue-900 text-primary">
            <Link to={"/job/me"} onClick={() => setShow(false)}>
                  View your jobs
                </Link>
            </li>
            <li className="text-base text-blue-900 text-primary">
            <Link
              to={"/job/post"}
              onClick={() => setShow(false)}>
            
              Post a job
            </Link>
            </li>
            
            </>
            
            ) : ( 
              <></>
            )}
          
        </ul>
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">     
            <button
              onClick={handleLogout}
              className="py-2 px-5 border rounded bg-blue-950 text-white"
            >
              Logout
            </button>
          
        </div>
        <div className="md:hidden">
          <button
            onClick={handleMenuToggler}
            className="text-primary focus:outline-none"
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBarsStaggered className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      <div className={`px-4 bg-blue-900 py-5 rounded-sm ${isMenuOpen ? "" : "hidden"} md:hidden`}>
        <ul>
        <li className="text-base text-primary">
            <Link to={"/"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
            Home
            </Link>
            </li>
            <li className="text-base text-primary">
            <Link to={"/job/getall"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
            Find Job
            </Link>
            </li>
            <li className="text-base text-primary">
            <Link to={"/applications/me"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
              {user && user.role === "Employer"
                ? "Applicant's Application"
                : "My Appliication"}
            </Link>
            </li>
            {user && user.role === "Employer" ? (
              <>
            <li className="text-base text-primary">
            <Link  to={"/job/me"} className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                  View your jobs
                </Link>
            </li>
            <li>
            <Link
              to="/job/post"
              className=" text-white hover:text-blue-600" onClick={() => setIsMenuOpen(false)}
            >
              Post A Job
            </Link>
            </li>
            
            </>
            
            ) : ( 
              <></>
            )}
          <li className="text-white py-1">
            <button
              onClick={handleLogout}
              className="hover:text-red-600"
            >
              Logout
            </button> 
          </li>
        </ul>
      </div>
    </header>
    
  );
};

export default Navbar;
