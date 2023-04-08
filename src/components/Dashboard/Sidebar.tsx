import React from "react";
import { BsTruck } from "react-icons/bs";
import { AiFillCar, AiFillHome } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbParking } from "react-icons/tb";

const Sidebar = () => {
  const navigate = useNavigate();

  const homeRouter = () => {
    navigate("/dashboard");
  };

  const chargeRouter = () => {
    navigate("/dashboard");
  };

  return (
    <div className="hidden md:inline  fixed w-[220px] h-screen max-h-screen text-dark-gray shadow-md">
      <div className="flex">
        <h3
          onClick={homeRouter}
          className="italic text-3xl font-bold my-2 p-[0.28rem] flex gap-1 items-center hover:cursor-pointer"
        >
          <FaParking className="text-[#6472EE]" />
          PARKEY
        </h3>
      </div>

      <div className="">
        <ul className="flex flex-col ">
          <li
            onClick={homeRouter}
            className="flex flex-row p-4  items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer"
          >
            <AiFillHome size={25} className="text-black" id="truck" />
            <p>Dashboard</p>
          </li>
          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <Link to="/vehicles" className="flex flex-row items-center gap-8">
              <AiFillCar size={25} />
              <p>Vehicle info</p>
            </Link>
          </li>
          <li className="flex flex-row p-4  items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <Link to="/clinic" className="flex flex-row items-center gap-8">
              <MdOutlineLocalHospital size={25} className="text-black" />
              <p>Clinic</p>
            </Link>
          </li>

          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <Link to="/cartypes" className="flex flex-row items-center gap-8">
              <FaTaxi size={25} />
              <p>Car types</p>
            </Link>
          </li>
          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <Link to="/charges" className="flex flex-row items-center gap-8">
              <RiMoneyDollarCircleFill size={25} />
              <p>Charges</p>
            </Link>
          </li>
          <li className="flex flex-row p-4 items-center gap-8 hover:bg-[#6472EE] hover:cursor-pointer">
            <Link to="/cartypes" className="flex flex-row items-center gap-8">
              <TbParking size={25} />
              <p>Parking</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
