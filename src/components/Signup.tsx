import React, { Fragment, useState } from "react";
import Modal from "./UI/Modal";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLoginData } from "../store/login-actions";
import { registerRoute } from "../utils/APIRoutes";
import { AppDispatch } from "../store";

const Signup = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmType, setPasswordConfirmType] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [values, setValues] = useState({
    password: "",
    passwordConfirm: "",
    email: "",
  });

  const toastOptions: any = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const togglePasswordConfirm = () => {
    if (passwordConfirmType === "password") {
      setPasswordConfirmType("text");
      return;
    }
    setPasswordConfirmType("password");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const { password, passwordConfirm, email } = values;

    if (password !== passwordConfirm) {
      toast.error("Passwords should match", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email can't be empty", toastOptions);
      return false;
    }

    return true;
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      setIsLoading(true);
      const { password, email } = values;
      console.log("clicked");

      const inputData = {
        password: password,
        email: email,
      };

      dispatch(postLoginData(inputData, registerRoute, navigate, setIsLoading));
    }
  };

  return (
    <Fragment>
      <Modal onClose={props.onClose}>
        <div className="flex flex-row justify-end ">
          <button className="hover:border-gray-600">
            <AiOutlineClose size={20} onClick={props.onClose} />
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4 mb-10">
          <form onSubmit={submitHandler}>
            <div className="flex items-center gap-4 justify-center">
              <h1 className="capitalize text-brightGreen text-2xl md:text-3xl">
                Welcome, Register with Parkey
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
              <label className=" ">Password</label>
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
            <div className="flex flex-col text-gray-700 mt-5 text-lg">
              <label className=" ">Password Confirm</label>
              <div className="flex flex-row items-center">
                <input
                  className="text-lg w-full bg-transparent border border-[#ccc] transition ease-in-out delay-500 mt-1 p-1 rounded-md hover:border-gray-200 focus:outline-none"
                  type={passwordConfirmType}
                  placeholder="Confirm password"
                  name="passwordConfirm"
                  onChange={handleChange}
                />

                {passwordConfirmType === "password" ? (
                  <FaRegEyeSlash
                    className="ml-[-40px] mt-2 text-xl"
                    onClick={togglePasswordConfirm}
                  />
                ) : (
                  <FaRegEye
                    className="ml-[-40px] mt-2 text-xl"
                    onClick={togglePasswordConfirm}
                  />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#3A36E4] py-2 w-full border-0 font text-white text-lg rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
            >
              Create Account
            </button>
            <div className="mt-5 flex flex-row gap-2">
              <p>Already have an account? </p>
              <p
                className="text-[blue] hover:underline cursor-pointer"
                onClick={() => props.openModal("signin")}
              >
                Sign In
              </p>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </Fragment>
  );
};

export default Signup;
