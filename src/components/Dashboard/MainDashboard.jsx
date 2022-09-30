import React from "react";
import { FcChargeBattery } from "react-icons/fc";
import { FaParking } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdOutlineLocalHospital } from "react-icons/md";
import Chart from "./Chart";
import { useNavigate } from "react-router-dom";

const data = [
  { year: 2011, efficiency: 33.1, sales: 6093000 },
  { year: 2012, efficiency: 35.3, sales: 7245000 },
  { year: 2013, efficiency: 36.4, sales: 7586000 },
  { year: 2014, efficiency: 36.5, sales: 7708000 },
  { year: 2015, efficiency: 37.2, sales: 7517000 },
  { year: 2016, efficiency: 37.7, sales: 6873000 },
  { year: 2017, efficiency: 39.4, sales: 6081000 },
];

const MainDashboard = () => {
  const navigate = useNavigate();

  const vehicleNav = () => {
    navigate("/vehicles");
  }

  const chargesNav = () => {
    navigate("/charges");
  }

  const carTypeNav = () => {
    navigate("/cartypes");
  }

  return (
    <div className="p-6 xs:p-10 sm:p-8 md:p-10 lg:p-10 w-full md:w-full lg:w-full flex flex-col gap-2 h-[100vh]">
      <div className="flex flex-row gap-6 xs:flex-row sm:flex-row md:flex-row lg:flex-row xs:gap-10 sm:gap-6 md:gap-12 lg:gap-14 flex-wrap md:flex-wrap items-center ">
        <div onClick={vehicleNav} className="flex flex-col-reverse items-center h-40 w-36 xs:w-36 sm:w-60 md:w-48 lg:w-1/5 md:flex-row justify-between md:gap-6 lg:gap-6 border-1 border-transparent rounded-md shadow-md p-6 hover:cursor-pointer hover:shadow-lg bg-gradient-to-r from-blue-500 to-blue-400">
          <div className="text-xl">
            <h3 className="text-white">Vehicles</h3>
            <p className="text-4xl text-white">20</p>
          </div>
          <div>
            <AiTwotoneCar size={30} className="text-white" />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center h-40 w-36 xs:w-36 sm:w-60 md:w-48 lg:w-1/5 md:flex-row justify-between gap-6 border-1 border-transparent rounded-md shadow p-6 hover:cursor-pointer hover:shadow-lg bg-gradient-to-r from-orange-400 to-orange-300">
          <div className="text-xl text-gray-700">
            <h3>Parking</h3>
            <p className="text-4xl text-white">20</p>
          </div>
          <div>
            <FaParking size={30} />
          </div>
        </div>
        <div onClick={carTypeNav} className="flex flex-col-reverse items-center h-40 w-36 xs:w-36 sm:w-60 md:w-48 lg:w-1/5 md:flex-row justify-between gap-6 border-1 border-transparent rounded-md shadow p-6 hover:cursor-pointer hover:shadow-lg bg-gradient-to-r from-green-400 to-green-300">
          <div className="text-xl text-gray-700">
            <h3>Car Clinic</h3>
            <p className="text-4xl text-white">20</p>
          </div>
          <div>
            <MdOutlineLocalHospital size={30} />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center w-36 h-40 xs:w-36 sm:w-60 md:w-48 lg:w-1/5 md:flex-row justify-between gap-6 border-1 border-transparent rounded-md shadow p-6 hover:cursor-pointer hover:shadow-lg bg-gradient-to-r from-[#89bff5] to-[#1fceed]">
          <div className="text-xl text-gray-700">
            <h3>Battery</h3>
            <p className="text-4xl">20</p>
          </div>
          <div>
            <FcChargeBattery size={30} />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col lg:flex-row gap-8 ">
        <div className="border-2 outline-none  rounded-md shadow-sm md:w-full lg:w-1/3 bg-white p-6 hover:shadow ">
          <h3>Revenue</h3>
          <Chart data={data} />
        </div>

        <div className=" border-2 rounded-md shadow-sm md:w-full lg:w-1/3 p-6">
          <div className="">
            <h3 className="">Overview</h3>
          </div>

          <ul className="mt-5">
            <li className="border-b-gray-500">
              <p>
                New car{" "}
                <span className="uppercase text-white bg-blue-600 p-1 rounded-sm">
                  admitted
                </span>
              </p>
            </li>
            <li>Parking new car</li>
            <li>Parking new car</li>
            <li>Parking new car</li>
            <li>Parking new car</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
