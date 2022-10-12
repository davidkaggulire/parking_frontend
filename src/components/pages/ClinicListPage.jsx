import React, { useEffect, useState } from "react";
import DashNavbar from "./../Dashboard/DashNavbar";
import Sidebar from "./../Dashboard/Sidebar";
import { FaPlus } from "react-icons/fa";
import RegisterVehicle from "../Forms/RegisterVehicle";
import { clinicService, getAllVehicles } from "../../utils/APIRoutes";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";
import Pagination from "./../Dashboard/Tables/Pagination";
import CarClinicTable from "./../Dashboard/Tables/CarClinicTable";
import NewClinicService from "../Forms/NewClinicService";

const ClinicPage = () => {
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.login.token);
  const [services, setServices] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = React.useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const showServiceHandler = () => {
    setShow(true);
  };

  const hideServiceHandler = () => {
    setShow(false);
  };


  const clinicServiceHandler = async (page) => {
    setLoading(true);
    const response = await fetch(clinicService + `?page=${page}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    const data = await response.json();
    console.log(data);
    console.log(data.clinic_services);

    if (data.status === "fail") {
      console.log("failed");
      toast.error(data.message, toastOptions);
      setLoading(false);
    }

    if (data.status === "success") {
      setServices(data.clinic_services);
      setTotalData(data.meta.total_count);
      // console.log(data.meta.total_count)
      setLoading(false);
      console.log("success");
    }
  };


  useEffect(() => {
    console.log("this is the currentpage", currentPage)
    clinicServiceHandler(currentPage);
  }, [token, currentPage]);

  return (
    <div className="flex flex-row ">
      {show && <NewClinicService onClose={hideServiceHandler} />}
      <Sidebar />
      <div className="w-full md:ml-[220px] md:w-screen h-screen flex flex-col">
        <DashNavbar />
        <div className="p-2 mt-5 md:p-10 md:mt-10 ">
          <div className="shadow-md border-slate-500 rounded-lg">
            <div className="flex flex-row items-center justify-between mb-8 p-2 text-md">
              <h3 className="font-bold">Clinic Service</h3>
              <button
                onClick={showServiceHandler}
                className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                <FaPlus />
                Add Service
              </button>
            </div>
            
            <label htmlFor="search" className="mr-2 flex justify-end">
              Search by Service:
              <input
                id="search"
                type="text"
                onChange={handleSearch}
                className="ml-2 pl-2 pt-1 border rounded-md border-gray-400 focus:outline-none"
              />
            </label>
            <CarClinicTable data={services} />
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
}

export default ClinicPage