import React from "react";
import vehicle from "../assets/car3.svg";

const Home = () => {
  return (
    <div className="w-full bg-cyan mx-auto flex justify-center items-center h-[640px] md:h-[600px]">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-4 mx-auto px-1 space-y-0 md:space-y-0">
        <div className="px-4 py-6 flex flex-col gap-2  md:gap-4 rounded-md md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold capitalize text-left">
            The ultimate Car Parking service for your needs
          </h1>
          <p className="text-gray-500 text-base md:text-3xl text-left">
            We protect and keep your car in a safe parking space
          </p>
          <button className="p-2 rounded-md border border-transparent bg-brightGreen w-2/3 md:w-1/2  text-white text-lg md:text-xl transition-all duration-75 hover:bg-gray-600">
            Get started
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-[290px] md:w-[450px] mx-auto my-4 "
            src={vehicle}
            alt="vehicle"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
