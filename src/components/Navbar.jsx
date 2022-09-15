import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log("here we are");
    setNav(!nav);
  };

  return (
    <div className="container mx-auto">
      <ul className="container w-full flex items-center justify-between p-4 text-black text-center">
        <div className=" md:flex space-x-6">
          <li className="uppercase text-2xl font-bold italic">PARKEY</li>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className="hidden md:flex flex-row gap-6 items-center">
          <li className=" text-gray-700 hover:cursor-pointer">Sign In</li>
          <li className="text-gray-700 hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">
            <a
              className="p-2 rounded-md border border-transparent bg-brightGreen w-2/3 md:w-1/2 text-white transition-all duration-75 hover:bg-gray-600"
              href="#"
            >
              Get started
            </a>
          </li>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out text-white"
              : "ease-in-out duration-500 fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold italic text-white my-4">
            PARKEY
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Sign In</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4">About</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
