import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../UI/Modal";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";
import { clinicService } from "../../utils/APIRoutes";
import { useDispatch, useSelector } from "react-redux";
import { postClinicService } from "../../store/clinicService-actions";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewClinicService = (props) => {;
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    service: "",
    fee: "",
  });

  const handleChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const { service, fee } = values;
    console.log(values);


    if (service === "") {
      toast.error("Service cannot be empty", toastOptions);
      return false;
    } else if (isNaN(fee)) {
      toast.error("Fee should be a number", toastOptions);
      return false;
    }

    return true;
  };

  const submitServiceHandler = (event) => {
    event.preventDefault();

    if (validate()) {
      setIsLoading(true);
      const { service, fee } = values;
      console.log("clicked");
      const serviceData = {
        service,
        fee,
      };
      dispatch(
        postClinicService(
          serviceData,
          clinicService,
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
            Register Clinic Service
          </h1>

          <form
            onSubmit={submitServiceHandler}
            className="flex flex-col mt-2 p-1 text-gray-700"
          >
            <div className="flex items-center mb-2">
              <label className="mb-2 w-1/3">Service</label>
              <input
                type="text"
                name="service"
                required
                onChange={handleChange}
                className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="mt-2 mb-2 w-1/3">Fee</label>
              <input
                type="number"
                name="fee"
                placeholder="5000"
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

export default NewClinicService;
