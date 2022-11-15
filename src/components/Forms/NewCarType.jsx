import React, { Fragment } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import LoadingSpinner from "../UI/LoadingSpinner";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";
import {  carTypesURL } from "../../utils/APIRoutes";
import { postCarType } from "../../store/cartypes-actions";

const NewCarType = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    type: "",
  });

  const handleChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const { type } = values;
    console.log(values);


    if (type === "") {
      toast.error("Duration required", toastOptions);
      return false;
    }

    return true;
  };

  const submitServiceHandler = (event) => {
    event.preventDefault();

    if (validate()) {
      setIsLoading(true);
      const { type } = values;
      console.log("clicked");
      const carTypeData = {
        type,
      };
      dispatch(
        postCarType(
          carTypeData,
          carTypesURL,
          navigate,
          setIsLoading,
          token
        )
      );
    }
  };

  return (
    <Fragment>
      <div className="">{isLoading && <LoadingSpinner />}</div>
      <Modal onClose={props.onClose} className="top-[-96]">
        <div className="">
          <div className="flex flex-row justify-end ">
            <button className="hover:border-gray-600">
              <AiOutlineClose size={15} onClick={props.onClose} />
            </button>
          </div>

          <h1 className="text-center text-gray-700 text-xl">
            Add New car type
          </h1>

          <form
            onSubmit={submitServiceHandler}
            className="flex flex-col mt-2 p-1 text-gray-700"
          >
            <div className="flex items-center mb-2">
              <label className="mb-2 w-1/3">Car type</label>
              <input
                type="text"
                name="type"
                required
                onChange={handleChange}
                className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="gap-2 bg-[#3A36E4] py-2 px-2 w-1/4 border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </Fragment>
  );
};

export default NewCarType;
