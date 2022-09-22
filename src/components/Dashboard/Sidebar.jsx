import React from "react";
import { BsTruck } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { FaParking } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="hidden md:inline  fixed w-[220px] h-screen max-h-screen text-dark-gray shadow-md">
      <div className="flex">
        <h3 className="italic text-3xl font-bold my-2 p-[0.28rem] flex gap-1 items-center ">
          <FaParking className="text-[#6472EE]" />
          PARKEY
        </h3>
      </div>

      <div className="">
        <ul className="flex flex-col ">
          <li className="flex flex-row p-4  items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <BsTruck size={25} className="text-black" id="truck" />
            <p>Truck</p>
          </li>
          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <AiFillCar size={25} />
            <p>Car</p>
          </li>
          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <FaTaxi size={25} />
            <p>Taxi</p>
          </li>
          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <FaBusAlt size={25} className="text-green-400" />
            <p>Coaster</p>
          </li>
          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <FaMotorcycle size={25} />
            <p>Boda</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
