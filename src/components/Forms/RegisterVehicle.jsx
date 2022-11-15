import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../UI/Modal";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";
import { carTypesURL, getAllVehiclesURL } from "../../utils/APIRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isValidPhoneNumber } from "react-phone-number-input";
import { postVehicleData } from "../../store/vehicle-actions";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import { stringContainsNumber } from "../../utils/stringChecker";

const RegisterVehicle = (props) => {
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const cartypes = async () => {
      try {
        const response = await fetch(carTypesURL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        console.log(data.car_types);
        setCategories(data.car_types);
      } catch (error) {
        console.log("error", error);
      }
    };
    cartypes();
  }, [token]);

  const [values, setValues] = useState({
    name: "",
    plate: "",
    model: "",
    ninnumber: "",
    gender: "",
    color: "",
    type: "",
  });

  const handleChange = (event) => {
    console.log(values);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handlePhone = (event) => {
    console.log(event);
    setValue(event);
  };

  const validate = () => {
    const { name, plate, ninnumber, model, gender, color, type } = values;
    console.log(values);
    console.log(value);

    if (stringContainsNumber(name) === false) {
      toast.error("Name cannot have numbers", toastOptions);
      return false;
    }

    if (name === "") {
      toast.error("Name cannot be empty", toastOptions);
      return false;
    } else if (name[0].toUpperCase() !== name[0]) {
      toast.error("Name should start with uppercase", toastOptions);
      return false;
    } else if (plate.length > 7) {
      toast.error("Plate No. should be 7 characters - UBC456Y", toastOptions);
      return false;
    } else if (plate.length < 7) {
      toast.error("Plate No. should be 7 characters - UBC456Y", toastOptions);
      return false;
    } else if (ninnumber.length > 14) {
      toast.error("NIN No. should be 14 characters", toastOptions);
      return false;
    } else if (ninnumber.length < 14) {
      toast.error("NIN No. should be 14 characters", toastOptions);
      return false;
    } else if (model === "") {
      toast.error("Model required", toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("Gender required", toastOptions);
      return false;
    } else if (value === "") {
      toast.error("Phone number required", toastOptions);
      return false;
    } else if (color === "") {
      toast.error("Color required", toastOptions);
      return false;
    } else if (type === "") {
      toast.error("Car type required", toastOptions);
      return false;
    } else if (value === "") {
      toast.error("Phone number is required", toastOptions);
      return false;
    }

    return true;
  };

  const submitVehicleHandler = (event) => {
    event.preventDefault();

    if (validate()) {
      setIsLoading(true);
      const { name, plate, model, ninnumber, gender, color, type } = values;
      console.log("clicked");
      const vehicleData = {
        name: name,
        plate: plate,
        model,
        ninnumber,
        gender,
        color,
        type,
        phone: value,
      };
      dispatch(
        postVehicleData(
          vehicleData,
          getAllVehiclesURL,
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
            Register Vehicle
          </h1>

          <form
            onSubmit={submitVehicleHandler}
            className="flex flex-col mt-2 p-1 text-gray-700"
          >
            <div className="flex items-center mb-2">
              <label className="mb-2 w-1/3">Driver name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="mt-2 mb-2 w-1/3">Numberplate</label>
              <input
                type="text"
                name="plate"
                placeholder="UBC456Y"
                required
                onChange={handleChange}
                className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="mt-2 mb-2  w-1/3">Color</label>
              <select
                name="color"
                required
                // value={choice}
                defaultValue={"default"}
                // onChange={handleColor}
                onChange={handleChange}
                className="border-[#ccc] p-1 border-none rounded-md w-2/3 active:border-none  focus:outline-none"
              >
                <option value={"default"} disabled>
                  Choose color
                </option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </div>

            <div className="flex items-center mb-2">
              <label className="mt-2 mb-2 w-1/3">Model</label>
              <input
                type="text"
                name="model"
                required
                onChange={handleChange}
                className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="mt-2 mb-2 w-1/3">Phone number</label>
              <PhoneInput
                placeholder="Enter phone number"
                required
                defaultCountry="UG"
                className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                name="phone"
                value={value}
                onChange={handlePhone}
                error={
                  value
                    ? isValidPhoneNumber(value)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
            </div>

            <div className="flex items-center mb-2">
              <label className="mt-2 mb-2 w-1/3">NIN number</label>
              <input
                type="text"
                name="ninnumber"
                placeholder="CM800000000YVS"
                required
                onChange={handleChange}
                className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
              />
            </div>

            <div className="flex items-center">
              <label className="mt-2 mb-2 w-1/3">Car Type</label>
              {categories && (
                <select
                  id="hello"
                  name="type"
                  required
                  defaultValue={"default"}
                  // onChange={handleCarType}
                  onChange={handleChange}
                  className="border-[#ccc] p-1 border-none rounded-md w-2/3 focus:outline-none"
                >
                  <option value={"default"} disabled>
                    Choose car type
                  </option>
                  {categories.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.type}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="flex items-center mt-2">
              <div id="my-radio-group" className="w-1/3">
                Gender
              </div>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="w-2/3 flex gap-10"
              >
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
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

export default RegisterVehicle;
