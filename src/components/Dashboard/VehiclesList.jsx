import React, { useEffect, useState } from "react";
import DashNavbar from "./DashNavbar";
import Sidebar from "./Sidebar";
import { FaPlus } from "react-icons/fa";
import RegisterVehicle from "../Forms/RegisterVehicle";
import { getAllVehiclesURL } from "../../utils/APIRoutes";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";
import VehicleTable from "./Tables/VehicleTable";
import Pagination from "./Tables/Pagination";
import { vehicleActions } from "../../store/vehicleSlice";
import { Link } from "react-router-dom";

const VehiclesList = () => {
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.login.token);
  const [vehicles, setVehicles] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const showVehicleHandler = () => {
    setShow(true);
  };

  const hideVehicleHandler = () => {
    setShow(false);
  };

  const vehicleHandler = async (page) => {
    setLoading(true);
    const response = await fetch(getAllVehiclesURL + `?page=${page}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    const data = await response.json();
    console.log(data);
    console.log(data.vehicles);

    if (data.status === "fail") {
      console.log("failed");
      toast.error(data.message, toastOptions);
      setLoading(false);
    }

    if (data.status === "success") {
      setVehicles(data.vehicles);
      setTotalData(data.meta.total_count);
      console.log(data.meta.total_count);
      dispatch(
        vehicleActions.getVehicles({
          vehicleCount: data.meta.total_count,
        })
      );

      setLoading(false);
      console.log("success");
    }
  };

  useEffect(() => {
    console.log("this is the currentpage", currentPage);
    vehicleHandler(currentPage);
  }, [token, currentPage]);

  return (
    <div className="flex flex-row ">
      {show && <RegisterVehicle onClose={hideVehicleHandler} />}
      <Sidebar />
      <div className="w-full md:ml-[220px] md:w-screen h-screen flex flex-col">
        <DashNavbar />
        <div className="p-2 mt-5 md:p-10 md:mt-10 text-gray-700">
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

            <label htmlFor="search" className="mr-2 flex justify-end">
              Search by Plate:
              <input
                id="search"
                type="text"
                onChange={handleSearch}
                className="ml-2 pl-2 pt-1 pb-1 border rounded-md border-gray-400 focus:outline-none"
              />
            </label>
            <VehicleTable data={vehicles} />
            <div className="mt-2">
              <Pagination
                totalRows={totalData}
                pageChangeHandler={setCurrentPage}
                rowsPerPage={5}
              />
            </div>

            {/* <table className="w-full table-auto border-[#0000000f]  text-lightBlack">
              <thead className="border-black bg-gray-100">
                <tr className="p-3 ">
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Plate</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Model</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {vehicles.map((vehicle, index) => (
                  <tr
                    data-index={index}
                    className="text-center hover:cursor-pointer hover:bg-gray-50"
                  >
                    <td className="p-4">{vehicle.id}</td>
                    <td className="p-4">{vehicle.driver_name}</td>
                    <td className="p-4">{vehicle.number_plate}</td>
                    <td className="p-4">{vehicle.car_type}</td>
                    <td className="p-4">{vehicle.model}</td>
                    <td>
                      <Link to={`/vehicles/${vehicle.id}`}>
                        <button className="flex items-center justify-between bg-slate-500 py-2 px-2 w-fit border-0 font text-white text-md rounded-md transition ease-in-out delay-400 hover:bg-slate-600">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              totalRows={totalData}
              pageChangeHandler={setCurrentPage}
              rowsPerPage={5}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesList;
