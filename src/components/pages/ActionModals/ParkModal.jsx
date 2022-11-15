import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  bodaChargesURL,
  carChargesURL,
  coasterChargesURL,
  taxiChargesURL,
  truckChargesURL,
} from "../../../utils/APIRoutes";
import Modal from "../../UI/Modal";
import { toastOptions } from "../../../utils/toastFile";
import LoadingSpinner from "../../UI/LoadingSpinner";

const ParkModal = (props) => {
  const token = useSelector((state) => state.login.token);
  const [isLoading, setIsLoading] = useState(false);
  const [charges, setCharges] = useState(null);
  const [values, setValues] = useState({
    chargeId: "",
  });

  const handleChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const durationHandler = async () => {
    let URL;

    if (props.data.car_type === "cars") {
      console.log("Cars");
      URL = carChargesURL;
    }
    else if (props.data.car_type === "bodabodas") {
      URL = bodaChargesURL;
    }
    else if (props.data.car_type === "trucks") {
      console.log("trucks");
      URL = truckChargesURL;
    }
    else if (props.data.car_type === "coasters") {
      console.log("coaster");
      URL = coasterChargesURL;
    }
    else if (props.data.car_type === "taxis") {
      console.log("taxis");
      URL = taxiChargesURL;
    }
    try {
      console.log(URL)
      console.log(token)
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      console.log(data.charges);
      setCharges(data.charges);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    durationHandler();
  }, [token]);

  const validate = () => {
    const { chargeId } = values;
    console.log(values);

    if(chargeId === "" || chargeId.length < 0){
      toast.error("Please choose time", toastOptions);
      return false;
    }

    if(props.data.id === ""){
      toast.error("Vehicle Id needed", toastOptions);
      return false;
    }
  
    return true;
  };

  const parkHandler = (event) => {
    event.preventDefault();
    if (validate()){
      console.log("clicked")
      // setIsLoading(true);
    } else {
      console.log("failed");
    }
    
  }

  return (
    <Fragment>
      <div className="">{isLoading && <LoadingSpinner />}</div>
      <Modal onClose={props.onClose}>
        <div className="mb-5">
          <h3 className="font-bold text-lg text-center uppercase">
            Park Vehicle
          </h3>
        </div>

        <div className="flex flex-col gap-5 text-gray-700">
          <div className="flex flex-row justify-start gap-8 items-center">
            <label htmlFor="">Vehicle Id</label>
            <input
              type="text"
              disabled
              className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3"
              value={props.data.id}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-start gap-10 items-center">
            <label htmlFor="">Car Type</label>
            <input
              type="text"
              value={props.data.car_type}
              disabled
              className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3"
            />
          </div>
          <div className="flex flex-row justify-start gap-16">
            <label className="mt-2 mb-2">Time</label>
            {charges && (
              <select
                id="hello"
                name="chargeId"
                required
                defaultValue={"default"}
                onChange={handleChange}
                className="border-[#ccc] p-1 border-none rounded-md w-2/3 focus:outline-none"
              >
                <option value={"default"} disabled>
                  Choose time
                </option>
                {charges.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.duration}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex justify-center items-center">
            <button onClick={parkHandler} className="bg-[#3A36E4] py-2 px-2 w-2/3 border-0 font text-white text-md rounded-md transition ease-in-out delay-400 hover:bg-[#6472EE]">
              Park
            </button>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </Fragment>
  );
};

export default ParkModal;
