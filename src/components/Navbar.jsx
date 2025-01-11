import React from "react";
import { Link } from "react-router";
import {assets} from "../assets/frontend_assets/assets.js"
import { IoSearchSharp } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";


const Navbar = ({showLogin, setShowLogin}) => {
  return (
    <>
      <div className="md:container navbar flex justify-between h-16 items-center mx-auto">
        <div className="logo max-sm:p-1 max-sm:w-[20%]">
          <img src={assets.logo} alt="" className="w-16 sm:w-24 lg:w-28 xl:w-36" />
        </div>
        <div className="nav-links flex justify-center">
          <div className="flex gap-2 sm:gap-4 max-[464px]:text-xs text-md  sm:text-lg md:text-xl transition-all ease-in-out duration-1000">
            <Link className="hover:underline hover:cursor-pointer " to="/">home</Link>
            <Link className="hover:underline hover:cursor-pointer" to="/menu">menu</Link>
            <Link className="hover:underline hover:cursor-pointer" to="/mobile-apps">mobile-apps</Link>
            <Link className="hover:underline hover:cursor-pointer" to="/contact">contact us</Link>
          </div>
        </div>

        <div className="text-xs flex sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl items-center h-full">
          <input type="search" placeholder="Search" className="bg-[#f8f8f8] rounded-full px-2 py-1 max-lg:hidden"/>
          <button className="bg-[#f8f8f8] p-2 sm:mx-1 rounded-full"  >
            <IoSearchSharp />
          </button>
          <button className="bg-[#f8f8f8] p-2 rounded-full sm:mx-2"><Link to={'/cart'}><PiHandbagSimpleFill /></Link> </button>
          <button className="bg-[#f8f8f8] cursor-pointer p-1 rounded-full px-2 sm:px-4 md:px-6" onClick={()=>setShowLogin(!showLogin)}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
