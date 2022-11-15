import React, { useState } from "react";
import DashNavbar from "./DashNavbar";
import Sidebar from "./Sidebar";
import { FaPlus } from "react-icons/fa";
import TruckCharge from "../Forms/TruckCharge";
import TaxiCharge from "../Forms/TaxiCharge";

import CoasterCharge from "../Forms/CoasterCharge";
import CarCharge from "../Forms/CarCharge";
import BodaCharge from "../Forms/BodaCharge";
import TruckChargesTable from "./Tables/charges/TruckChargesTable";
import BodaChargesTable from "./Tables/charges/BodaChargesTable";
import CoasterChargeTable from "./Tables/charges/CoasterChargeTable";

import { getChargesHandler } from "../../store/charge-actions";
import { useSelector } from "react-redux";
import {
  bodaChargesURL,
  carChargesURL,
  coasterChargesURL,
  taxiChargesURL,
  truckChargesURL,
} from "../../utils/APIRoutes";
import { useEffect } from "react";
import Pagination from "./Tables/Pagination";
import CarChargeTable from "./Tables/charges/CarChargeTable";
import TaxiChargeTable from "./Tables/charges/TaxiChargeTable";

const Charges = () => {
  const [showCar, setShowCar] = useState(false);
  const [showBoda, setShowBoda] = useState(false);
  const [showTruck, setShowTruck] = useState(false);
  const [showCoaster, setShowCoaster] = useState(false);
  const [showTaxi, setShowTaxi] = useState(false);

  // truckCharges
  const [truckChargeData, setTruckChargeData] = useState([]);
  const [totalTruckCharges, setTotalTruckCharges] = useState(0);
  const [currentTruckPage, setCurrentTruckPage] = useState(1);

  // boda
  const [bodaChargeData, setBodaChargeData] = useState([]);
  const [totalBodaCharges, setTotalBodaCharges] = useState(0);
  const [currentBodaPage, setCurrentBodaPage] = useState(1);

  // taxi
  const [taxiChargeData, setTaxiChargeData] = useState([]);
  const [totalTaxiCharges, setTotalTaxiCharges] = useState(0);
  const [currentTaxiPage, setCurrentTaxiPage] = useState(1);

  // car
  const [carChargeData, setCarChargeData] = useState([]);
  const [totalCarCharges, setTotalCarCharges] = useState(0);
  const [currentCarPage, setCurrentCarPage] = useState(1);

  // coaster
  const [coasterChargeData, setCoasterChargeData] = useState([]);
  const [totalCoasterCharges, setTotalCoasterCharges] = useState(0);
  const [currentCoasterPage, setCurrentCoasterPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.login.token);

  const showTruckHandler = () => {
    setShowTruck(true);
  };

  const hideTruckHandler = () => {
    setShowTruck(false);
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

  useEffect(() => {
    getChargesHandler(
      truckChargesURL,
      currentTruckPage,
      token,
      setLoading,
      setTruckChargeData,
      setTotalTruckCharges
    );
  }, [currentTruckPage, token]);

  useEffect(() => {
    getChargesHandler(
      bodaChargesURL,
      currentBodaPage,
      token,
      setLoading,
      setBodaChargeData,
      setTotalBodaCharges
    );
  }, [currentBodaPage, token]);

  useEffect(() => {
    getChargesHandler(
      carChargesURL,
      currentCarPage,
      token,
      setLoading,
      setCarChargeData,
      setTotalCarCharges
    );
  }, [currentCarPage, token]);

  useEffect(() => {
    getChargesHandler(
      taxiChargesURL,
      currentTaxiPage,
      token,
      setLoading,
      setTaxiChargeData,
      setTotalTaxiCharges
    );
  }, [currentTaxiPage, token]);

  useEffect(() => {
    getChargesHandler(
      coasterChargesURL,
      currentCoasterPage,
      token,
      setLoading,
      setCoasterChargeData,
      setTotalCoasterCharges
    );
  }, [currentTaxiPage, token]);

  return (
    <div className="flex flex-row ">
      {showTruck && <TruckCharge onClose={hideTruckHandler} />}
      {showTaxi && <TaxiCharge onClose={hideTaxiHandler} />}
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
            <TruckChargesTable data={truckChargeData} />
            <Pagination
              totalRows={totalTruckCharges}
              pageChangeHandler={setCurrentTruckPage}
              rowsPerPage={5}
            />
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
            <CarChargeTable data={carChargeData} />
            <Pagination
              totalRows={totalCarCharges}
              pageChangeHandler={setCurrentCarPage}
              rowsPerPage={5}
            />
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
            <CoasterChargeTable data={coasterChargeData} />
            <Pagination
              totalRows={totalCoasterCharges}
              pageChangeHandler={setCurrentCoasterPage}
              rowsPerPage={5}
            />
           
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
            <BodaChargesTable data={bodaChargeData} />
            <Pagination
              totalRows={totalBodaCharges}
              pageChangeHandler={setCurrentBodaPage}
              rowsPerPage={5}
            />
          </div>
        </div>

        {/* Taxi charges */}
        <div className="p-5 md:p-10 mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Taxi Charges</h3>
              <button
                onClick={showTaxiHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Taxi Charges
              </button>
            </div>
            <TaxiChargeTable data={taxiChargeData}/>
            <Pagination
              totalRows={totalTaxiCharges}
              pageChangeHandler={setCurrentTaxiPage}
              rowsPerPage={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charges;
