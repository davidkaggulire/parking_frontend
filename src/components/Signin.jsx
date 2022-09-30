import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "./UI/LoadingSpinner";
import { useDispatch } from "react-redux";
import { postLoginData } from "../store/login-actions";
import { loginRoute } from "../utils/APIRoutes";

const Signin = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [show, setShow] = useState(false);

  const showSignUpHandler = () => {
    setShow(true);
    props.onClose();
    console.log("hello winner");
  };

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

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const { password, email } = values;
    console.log(values);
    if (!email.includes("@")) {
      toast.error("Email should contain '@'", toastOptions);
      return false;
    }
    if (email === "") {
      toast.error("Email can't be empty and must include '@'", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    }

    return true;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (validate()) {
      setIsLoading(true);
      const { password, email } = values;
      console.log("clicked");

      const inputData = {
        password: password,
        email: email,
      };

      dispatch(postLoginData(inputData, loginRoute, navigate, setIsLoading));
    }
  };

  return (
    <Fragment>
      {show && <Signup onCloseSignup={hideSignUpHandler} />}
      <div className="">{isLoading && <LoadingSpinner />}</div>
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
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col text-gray-700 mt-5 text-lg">
              <label className="text-gray-700">Password</label>
              <div className="flex flex-row items-center">
                <input
                  className="text-lg w-full bg-transparent border border-[#ccc] transition ease-in-out delay-500 mt-1 p-1 rounded-md hover:border-gray-200 focus:outline-none"
                  type={passwordType}
                  name="password"
                  onChange={handleChange}
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

            <button
              type="submit"
              className="bg-[#3A36E4] py-2 w-full border-0 text-white text-lg rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
            >
              Sign In
            </button>
            <div className="mt-5 flex flex-row gap-2">
              <p>Don't have an account? </p>
              <p
                className="text-[blue] hover:underline cursor-pointer"
                onClick={() => {
                  showSignUpHandler();
                  // props.onClose();
                }}
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
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;
