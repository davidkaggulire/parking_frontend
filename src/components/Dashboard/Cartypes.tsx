import React, { useState, useEffect } from "react";
import DashNavbar from "./DashNavbar";
import Sidebar from "./Sidebar";
import { FaPlus } from "react-icons/fa";
import NewCarType from "../Forms/NewCarType";
import CarTypesTable from "./Tables/CarTypesTable";
import { useSelector } from "react-redux";
import { carTypesURL } from "../../utils/APIRoutes";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";
import Pagination from "./Tables/Pagination";

const Cartypes = () => {
  const [show, setShow] = useState(false);
  const token = useSelector((state: any) => state.login.token);
  const [vehicles, setVehicles] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = React.useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const showAddTypeHandler = () => {
    setShow(true);
  };

  const hideAddTypeHandler = () => {
    setShow(false);
  };

  const vehicleHandler = async (page: number) => {
    setLoading(true);
    const response = await fetch(carTypesURL + `?page=${page}`, {
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
      if(data.length <= 0) {
        setNoData(true)
      }
      setVehicles(data.car_types);
      setTotalData(data.meta.total_count);
      console.log(data.meta.total_count);
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
      {show && <NewCarType onClose={hideAddTypeHandler} />}
      <Sidebar />
      <div className="w-full md:ml-[220px] md:w-screen h-screen flex flex-col">
        <DashNavbar />
        <div className="p-10  mt-10 ">
          <div className="shadow border-slate-500 rounded-lg overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Car Types</h3>
              <button
                onClick={showAddTypeHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Car Type
              </button>
            </div>
            <CarTypesTable data={vehicles} />
            <div className="mt-2">
              <Pagination
                totalRows={totalData}
                pageChangeHandler={setCurrentPage}
                rowsPerPage={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartypes;
