import React, { useState } from "react";
import DashNavbar from "./DashNavbar";
import Sidebar from "./Sidebar";
import { FaPlus } from "react-icons/fa";
import RegisterVehicle from "../Forms/RegisterVehicle";

const VehiclesList = () => {
  const [show, setShow] = useState(false);

  const showVehicleHandler = () => {
    setShow(true);
  };

  const hideVehicleHandler = () => {
    setShow(false);
  };

  return (
    <div className="flex flex-row ">
      {show && <RegisterVehicle onClose={hideVehicleHandler} />}
      <Sidebar />
      <div className="w-full md:ml-[220px] md:w-screen h-screen flex flex-col">
        <DashNavbar />
        <div className="p-10  mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Vehicles</h3>
              <button
                onClick={showVehicleHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Vehicle
              </button>
            </div>
            <table class="w-full table-auto border-[#ccc] bg-[#eff1f4] text-gray-700 ">
              <thead className="border-black">
                <tr className="p-3 ">
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Plate</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Model</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-1 border-[#ddd]">
                  <td className="p-4">The Sliding</td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="p-4">Witchy Woman</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="p-4">Shining Star</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesList;
