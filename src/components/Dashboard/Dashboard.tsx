import React from "react";
import Sidebar from "./Sidebar";

import MainDashboard from "./MainDashboard";
import DashNavbar from "./DashNavbar";

const Dashboard = () => {
  return (
    // className="grid grid-cols-12 relative"
    <div className="flex flex-row " >
      <Sidebar />
      <div className="w-full md:ml-[220px] md:w-screen h-screen flex flex-col">
        <DashNavbar />
        <MainDashboard />
      </div>

      
    </div>
  );
};

export default Dashboard;
