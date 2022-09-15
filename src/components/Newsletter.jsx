import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-8 text-black px-4 bg-cyan">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2">
            Simplify how your team works today
          </h1>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row w-full">
            <button className="bg-brightGreen text-white text-lg rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3  transition-all duration-75 hover:bg-gray-600">
              Get Started
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-brightGreen">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
