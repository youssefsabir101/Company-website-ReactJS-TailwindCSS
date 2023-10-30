import React, { useState } from 'react'
import Icon from "./images/favicon.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    console.log(open);
  return (
    <div className="font-poppins">
      <nav className="bg-white bg-opacity-60 backdrop-blur fixed px-2 p-1 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 ">
        {/* dektop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-4 pb-2 pt-2 text-black">
          <Link to="/" className="flex items-start">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:-h-[35px] -mt-1"
            />
            <span className="ml-2 mt-0 sm:mt-0 text-blue-500 font-semibold text-xl you">
              SabMedia
            </span>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to="/services">Services</Link>
              </li>
              <li className="p-2 mr-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="p-2 text-blue-500 hover:text-blue-800 font-bold cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            
          </div>
          <div className="flex ">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white hidden sm:block rounded-md mr-2 hover:bg-blue-500"
            >
              Get Started
            </button>
            <button onClick={() => setOpen(!open)} className="sm:hidden ">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-blue-500" />
            </button>
          </div>
        </div>

        {/* desktop nav end */}
        <div className={`${open ? null : "hidden"} h-[20rem]`}>
          <ul>
            <li className="text-blue-500 hover:text-blue-800 font-bold  pl-8 cursor-pointer pb-4 pt-6">
              <Link to="/">Home</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to="/about">About</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex pl-8">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white  rounded-md mr-2 hover:bg-blue-500"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;