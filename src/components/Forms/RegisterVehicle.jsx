import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const RegisterVehicle = (props) => {
  const [value, setValue] = useState();

  return (
    <Fragment>
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
          <Formik
            initialValues={{ name: "", plate: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.plate) {
                errors.plate = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col mt-2 p-1 text-gray-700">
                <div className="flex items-center mb-2">
                  <label className="mb-2 w-1/3">Driver name</label>
                  <Field
                    type="text"
                    name="name"
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <label className="mt-2 mb-2 w-1/3">Numberplate</label>
                  <Field
                    type="text"
                    name="plate"
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                  />
                  <ErrorMessage
                    name="plate"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <label className="mt-2 mb-2  w-1/3">Color</label>
                  <Field
                    as="select"
                    name="color"
                    className="border-[#ccc] p-1 border-none rounded-md w-2/3 active:border-none  focus:outline-none"
                  >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <ErrorMessage
                    name="color"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <label className="mt-2 mb-2 w-1/3">Model</label>
                  <Field
                    type="text"
                    name="model"
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                  />
                  <ErrorMessage
                    name="model"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex items-center mb-2">
                <label className="mt-2 mb-2 w-1/3">Phone number</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                  />
                </div>

                <div className="flex items-center mb-2">
                  <label className="mt-2 mb-2 w-1/3">NIN number</label>
                  <Field
                    type="text"
                    name="ninnumber"
                    className="border-[#ccc] pl-2 pb-1 pt-1 border rounded-md w-2/3 focus:outline-none"
                  />
                  <ErrorMessage
                    name="ninnumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="flex items-center">
                  <label className="mt-2 mb-2 w-1/3">Car Type</label>
                  <Field
                    as="select"
                    name="type"
                    className="border-[#ccc] p-1 border-none rounded-md w-2/3 focus:outline-none"
                  >
                    <option value="red">Truck</option>
                    <option value="green">Car</option>
                    <option value="blue">Taxi</option>
                    <option value="blue">Coaster</option>
                    <option value="blue">Boda</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="text-red-500"
                  />
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
                      <Field type="radio" name="gender" value="Male" />
                      Male
                    </label>
                    <label>
                      <Field type="radio" name="gender" value="Female" />
                      Female
                    </label>
                    {/* <div>Picked: {values.picked}</div> */}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gap-2 bg-[#3A36E4] py-2 px-2 w-1/4 border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </Fragment>
  );
};

export default RegisterVehicle;
