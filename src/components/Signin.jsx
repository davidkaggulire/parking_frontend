import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

const Signin = (props) => {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const showSignUpHandler = () => {
    setShow(true);
    props.onClose()
    console.log("hello winner")
  }

  const hideSignUpHandler = () => {
    setShow(false);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    navigate('./dashboard', true)
  };

  return (
    <Fragment>
      {show && <Signup onCloseSignup={hideSignUpHandler} />}
      <Modal onClose={props.onClose}>
        <div className="flex flex-row justify-end ">
          <button className="hover:border-gray-600">
            <AiOutlineClose size={20} onClick={props.onClose} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mb-10">
          <form onSubmit={submitHandler}>
            <div className="flex items-center gap-4 justify-center">
              <h1 className="capitalize text-brightGreen text-2xl md:text-3xl ">
                Welcome back, Please Login
              </h1>
            </div>

            <div className="mt-2 text-lg">
              <label className="text-gray-700">Email</label>
              <input
                className="text-lg text-gray-700 w-full bg-transparent border border-[#ccc] transition ease-in-out delay-500 mt-1 p-1 rounded-md hover:border-[gray-200] focus:outline-none"
                type="email"
              />
            </div>

            <div className="flex flex-col text-gray-700 mt-5 text-lg">
              <label className=" ">Password</label>
              <div className="flex flex-row items-center">
                <input
                  className="text-lg w-full bg-transparent border border-[#ccc] transition ease-in-out delay-500 mt-1 p-1 rounded-md hover:border-gray-200 focus:outline-none"
                  type="password"
                />
                {passwordType === "password" ? (
                  <FaRegEyeSlash
                    className="ml-[-40px] mt-2 text-xl"
                    onClick={togglePassword}
                  />
                ) : (
                  <FaRegEye
                    className="ml-[-40px] mt-2 text-xl"
                    onClick={togglePassword}
                  />
                )}
              </div>
            </div>
            <button className="bg-[#3A36E4] py-2 w-full border-0 font text-white text-lg rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]">
              Sign In
            </button>
            <div className="mt-5 flex flex-row gap-2">
              <p>Don't have an account? </p>
              <p
                className="text-[blue] hover:underline cursor-pointer"
                onClick={() => {
                  showSignUpHandler();
                  // props.onClose();
                } }
              >
                Register
              </p>
            </div>

            <div className="mt-2 flex justify-between">
              <span className="text-[blue] hover:underline">
                <a href="/resetPassword">Forgot Password?</a>
              </span>

              <span className="text-[blue] hover:underline">
                <a href="/verifyEmail">Verify account</a>
              </span>
            </div>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Signin;
