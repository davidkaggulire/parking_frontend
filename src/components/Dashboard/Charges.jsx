import React, { useState } from "react";
import DashNavbar from "./DashNavbar";
import Sidebar from "./Sidebar";
import { FaPlus } from "react-icons/fa";
import NewCarType from "../Forms/NewCarType";
import TruckCharge from "../Forms/TruckCharge";
import TaxiCharge from "../Forms/TaxiCharge";
import BusCharge from "../Forms/BusCharge";
import CoasterCharge from "../Forms/CoasterCharge";
import CarCharge from "../Forms/CarCharge";
import BodaCharge from "../Forms/BodaCharge";

const Charges = () => {
  const [showCar, setShowCar] = useState(false);
  const [showBoda, setShowBoda] = useState(false);
  const [showTruck, setShowTruck] = useState(false);
  const [showCoaster, setShowCoaster] = useState(false);
  const [showTaxi, setShowTaxi] = useState(false);
  const [showBus, setShowBus] = useState(false);

  const showTruckHandler = () => {
    setShowTruck(true);
  };

  const hideTruckHandler = () => {
    setShowTruck(false);
  };

  const showBusHandler = () => {
    setShowBus(true);
  };

  const hideBusHandler = () => {
    setShowBus(false);
  };

  const showCoasterHandler = () => {
    setShowCoaster(true);
  };

  const hideCoasterHandler = () => {
    setShowCoaster(false);
  };

  const showTaxiHandler = () => {
    setShowTaxi(true);
  };

  const hideTaxiHandler = () => {
    setShowTaxi(false);
  };

  const showBodaHandler = () => {
    setShowBoda(true);
  };

  const hideBodaHandler = () => {
    setShowBoda(false);
  };

  const showCarHandler = () => {
    setShowCar(true);
  };

  const hideCarHandler = () => {
    setShowCar(false);
  };

  return (
    <div className="flex flex-row ">
      {showTruck && <TruckCharge onClose={hideTruckHandler} />}
      {showTaxi && <TaxiCharge onClose={hideTaxiHandler} />}
      {showBus && <BusCharge onClose={hideBusHandler} />}
      {showCoaster && <CoasterCharge onClose={hideCoasterHandler} />}
      {showCar && <CarCharge onClose={hideCarHandler} />}
      {showBoda && <BodaCharge onClose={hideBodaHandler} />}
      <Sidebar />
      <div className="w-full md:ml-[220px] md:w-screen h-screen flex flex-col">
        <DashNavbar />
        <div className="p-5 md:p-10  mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Truck Charges</h3>
              <button
                onClick={showTruckHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Truck Charges
              </button>
            </div>
            <table class="w-full table-auto border-[#ccc] bg-[#eff1f4] ">
              <thead className="border-black">
                <tr className="p-3 ">
                  <th className="p-3">Id</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-1 border-[#ddd]">
                  <td className="p-4">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="p-4">Witchy Woman</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="p-4">Shining Star</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Car charges */}
        <div className="p-5 md:p-10  mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Car Charges</h3>
              <button
                onClick={showCarHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Car Charges
              </button>
            </div>
            <table class="w-full table-auto border-[#ccc] bg-[#eff1f4] ">
              <thead className="border-black">
                <tr className="p-3 ">
                  <th className="p-3">Id</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-1 border-[#ddd]">
                  <td className="p-4">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="p-4">Witchy Woman</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="p-4">Shining Star</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Coaster charges */}
        <div className="p-5 md:p-10  mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Coaster Charges</h3>
              <button
                onClick={showCoasterHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Coaster Charges
              </button>
            </div>
            <table class="w-full table-auto border-[#ccc] bg-[#eff1f4] ">
              <thead className="border-black">
                <tr className="p-3 ">
                  <th className="p-3">Id</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-1 border-[#ddd]">
                  <td className="p-4">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="p-4">Witchy Woman</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="p-4">Shining Star</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bus charges */}
        <div className="p-5 md:p-10  mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Bus Charges</h3>
              <button
                onClick={showBusHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Bus Charges
              </button>
            </div>
            <table class="w-full table-auto border-[#ccc] bg-[#eff1f4] ">
              <thead className="border-black">
                <tr className="p-3 ">
                  <th className="p-3">Id</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-1 border-[#ddd]">
                  <td className="p-4">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="p-4">Witchy Woman</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="p-4">Shining Star</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                  <td className="p-4">Earth, Wind, and Fire</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Boda charges */}
        <div className="p-5 md:p-10 mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Boda Charges</h3>
              <button
                onClick={showBodaHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Boda Charges
              </button>
            </div>
            <table class="w-full table-auto border-[#ccc] bg-[#eff1f4] ">
              <thead className="border-black">
                <tr className="p-3 ">
                  <th className="p-3">Id</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Charge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-1 border-[#ddd]">
                  <td className="p-4">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="p-4">Malcolm Lockyer</td>
                  <td className="p-4">Malcolm Lockyer</td>
                </tr>
                <tr>
                  <td className="p-4">Witchy Woman</td>
                  <td className="p-4">The Eagles</td>
                  <td className="p-4">The Eagles</td>
                </tr>
                <tr>
                  <td className="p-4">Shining Star</td>
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

export default Charges;
