import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashNavbar from "./DashNavbar";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllVehiclesURL } from "../../utils/APIRoutes";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ParkModal from "../pages/ActionModals/ParkModal";

type VehicleType = {
  id: string;
  driver_name: string;
  number_plate: string;
  color: string;
  model: string;
  phone_number: string;
  nin_number: string;
  created_at: string;
  signed_out_at: string;
  signed_out_date: string;
  gender: string;
  car_type: string;
  battery: string;
  parking: string;
  clinic: string;
  flag: string;
}

const VehicleDetails = () => {
  const vehicleParams = useParams();
  const { vehicleId } = vehicleParams;
  const token = useSelector((state: any) => state.login.token);
  console.log(vehicleParams);
  console.log(vehicleId);
  const [loading, setLoading] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState<VehicleType | null>(null);
  const [IsSignedOut, setIsSignedOut] = useState(false);
  const [showPark, setShowPark] = useState(false);
  // const [parkData, setParkData] = useState({})

  const navigate = useNavigate();

  const showParkHandler = () => {
    setShowPark(true)
  }

  const hideParkHandler = () => {
    setShowPark(false)
  }

  

  const singleVehicleHandler = async () => {
    setLoading(true);
    const response = await fetch(getAllVehiclesURL + `/${vehicleId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    const data = await response.json();
    console.log(data);

    if (data.message === "fail") {
      console.log("failed");
      toast.error("vehicle not found", toastOptions);
      setLoading(false);
    }

    if (response.status === 200) {
      setLoading(false);
      setVehicleInfo(data);
      console.log(data.flag);
      // setParkData(data);

      if (data.flag === "signed out") {
        setIsSignedOut(true);
      }

      console.log("success");
    }
  };

  useEffect(() => {
    singleVehicleHandler();
  }, [token]);

  const previousPageHandler = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-row ">
      {loading && <LoadingSpinner />}
      {showPark && <ParkModal onClose={hideParkHandler} data={vehicleInfo}/>}
      <Sidebar />
      <div className="w-full md:ml-[220px] md:w-screen h-screen flex flex-col">
        <DashNavbar />
        <div className="p-2 mt-5 md:p-5 md:mt-3 text-gray-700">
          <div className="shadow-md border-slate-500 rounded-lg p-3 overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <div className="flex flex-row gap-4">
                <MdKeyboardArrowLeft
                  size={25}
                  onClick={previousPageHandler}
                  className="hover:rounded-full hover:shadow-md hover:shadow-emerald-200"
                />
                <h2 className="text-lg font-bold">View Vehicle Information </h2>
              </div>

              {!IsSignedOut && <div className="flex flex-row justify-start md:justify-between gap-4">
                 
                  <button className="bg-[#298247] px-2 py-1 border-0 text-white rounded-md transition ease-in-out delay-400 hover:bg-[#6472EE]">
                    Signout vehicle
                  </button>
                

                <button onClick={showParkHandler} className="bg-[#298247] px-2 py-1 border-0 text-white rounded-md transition ease-in-out delay-400 hover:bg-[#6472EE]">Park</button>
                <button className="bg-[#298247] px-2 py-1 border-0 text-white rounded-md transition ease-in-out delay-400 hover:bg-[#6472EE]">Battery</button>
                <button className="bg-[#298247] px-2 py-1 border-0 text-white rounded-md transition ease-in-out delay-400 hover:bg-[#6472EE]">Clinic</button>
              </div>}
            </div>
            <div className="flex flex-col md:flex-row mt-4 gap-4 md:w-full">
              <div className="flex flex-col gap-4 md:w-1/2">
                <div>
                  <p>
                    Vehicle ID:{" "}
                    <span className="text-green-500">{vehicleId}</span>
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <label>Driver Name</label>

                  <input
                    value={vehicleInfo?.driver_name}
                    type="text"
                    name="name"
                    disabled
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none hover:border-blue-500"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <label>NIN Number</label>

                  <input
                    value={vehicleInfo?.nin_number}
                    type="text"
                    name="name"
                    disabled
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none hover:border-blue-500"
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0">
                  <div className="flex flex-col justify-between w-full lg:w-1/2">
                    <label>Phone number</label>
                    <input
                      value={vehicleInfo?.phone_number}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full lg:w-1/2">
                    <label>Number plate</label>
                    <input
                      value={vehicleInfo?.number_plate}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                  <div className="w-full flex flex-row">
                    <div className="flex flex-col justify-between w-full md:w-1/2">
                      <label>Model</label>
                      <input
                        value={vehicleInfo?.model}
                        disabled
                        type="text"
                        className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full md:w-1/2">
                      <label>Gender</label>
                      <input
                        value={vehicleInfo?.gender}
                        disabled
                        type="text"
                        className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className="flex flex-col justify-between w-full">
                    <label>Car Type</label>
                    <input
                      value={vehicleInfo?.car_type}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <label>Color</label>
                    <input
                      value={vehicleInfo?.color}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* second div */}
              <div className="flex flex-col gap-4 md:w-1/2">
                <div className="flex flex-col justify-between w-full">
                  <label>Created_at</label>
                  <input
                    value={vehicleInfo?.created_at}
                    disabled
                    type="text"
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-full focus:outline-none"
                  />
                </div>

                <div className="w-full flex flex-row justify-between gap-3">
                  <div className="flex flex-col justify-between w-1/2">
                    <label>Flag</label>
                    <input
                      value={vehicleInfo?.flag}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <label>Parking section</label>
                    <input
                      value={vehicleInfo?.parking}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between gap-3">
                  <div className="flex flex-col justify-between w-1/2">
                    <label>Clinic</label>
                    <input
                      value={vehicleInfo?.clinic}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-1/2">
                    <label>Battery section</label>
                    <input
                      value={vehicleInfo?.battery}
                      disabled
                      type="text"
                      className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
