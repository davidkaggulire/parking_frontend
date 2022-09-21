import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaParking } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Avatar from "../../assets/avatar.png";

const DashNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleSideNav = () => {
    console.log("here we are");
    setNav(!nav);
  };

  return (
    <nav className=" w-fit md:w-full shadow-md z-1000 bg-white">
      <ul className="flex flex-row justify-between md:justify-end p-2">
        <div className="w-screen flex flex-row md:hidden justify-between items-center">
          <div>
            <h3 className="italic text-2xl font-bold my-2 p-[0.28rem] flex gap-1 items-center">
              <FaParking className="text-[#6472EE]" />
              PARKEY
            </h3>
          </div>

          <div onClick={handleSideNav} className="mr-8">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full shadow-md bg-white ease-in-out duration-500 text-black"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <h1 className="w-full text-2xl font-bold text-[#00df9a] m-4 flex gap-2 items-center italic">
              <FaParking className="text-[#6472EE]" />
              PARKEY
            </h1>
            <li className="p-4 border-b border-gray-600">Trucks</li>
            <li className="p-4 border-b border-gray-600">Cars</li>
            <li className="p-4 border-b border-gray-600">Taxi</li>
            <li className="p-4 border-b border-gray-600">Bus</li>
            <li className="p-4">Boda</li>
          </ul>
        </div>

        <div className="hidden md:flex justify-between gap-4 items-center mr-5 ">
          <img className="rounded-full h-10 bg-black" src={Avatar} alt="" />
          <p>John Doe</p>
          <BiDotsVerticalRounded size={25} />
        </div>
      </ul>
    </nav>
  );
};

export default DashNavbar;
