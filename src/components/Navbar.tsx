import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Signin from "./Signin";
import { FaParking } from "react-icons/fa";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [activeModal, setActiveModal] = useState('null');

  function openModal(modalName: string) {
    setActiveModal(modalName);
  }

  function closeModal() {
    setActiveModal('null');
  }

  const handleNav = () => {
    setNav(!nav);
  };

  const showSignInHandler = () => {
    setActiveModal('signin')
  };

  return (
    <div className="container mx-auto">
      {activeModal === 'signin'  && <Signin onClose={closeModal} openModal={openModal}/>}
      {activeModal === 'sign-up' && <Signup onClose={closeModal} openModal={openModal} closeModal={() => setActiveModal('signin')}/>}
      {activeModal === 'reset-pass' && <ResetPassword onClose={closeModal} openModal={openModal} closeModal={() => setActiveModal('signin')}/>}
      <ul className="container w-full flex items-center justify-between p-4 text-black text-center">
        <div className=" md:flex space-x-6">
          <li className="uppercase text-2xl font-bold italic flex gap-1 items-center">
            <FaParking className="text-[#6472EE]" />
            PARKEY
          </li>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className="hidden md:flex flex-row gap-6 items-center">
          <li
            className=" text-gray-700 hover:cursor-pointer"
            onClick={showSignInHandler}
          >
            Sign In
          </li>

          <li className="text-gray-700 hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">
            <a
              className="p-2 rounded-md border border-transparent bg-brightGreen w-2/3 md:w-1/2 text-white transition-all duration-75 hover:bg-gray-600"
              href="#"
            >
              Get started
            </a>
          </li>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out text-white"
              : "ease-in-out duration-500 fixed left-[-100%] "
          }
        >
          <h1 className="w-full text-3xl font-bold italic text-white my-4">
            PARKEY
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li
            className="p-4 border-b border-gray-600"
            onClick={showSignInHandler}
          >
            Sign In
          </li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4">About</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
