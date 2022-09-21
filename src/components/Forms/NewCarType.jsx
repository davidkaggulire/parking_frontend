import React, { Fragment } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal";

const NewCarType = (props) => {
  return (
    <Fragment>
      <Modal onClose={props.onClose}>
        <div>
          <div className="flex flex-row justify-end ">
            <button className="hover:border-gray-600">
              <AiOutlineClose size={20} onClick={props.onClose} />
            </button>
          </div>

          <h1 className="text-center">Add Car Type</h1>
          <Formik
            initialValues={{ type: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.type) {
                errors.type = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 1));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col mt-4">
                <label className="mb-2">Car Type</label>
                <Field
                  type="text"
                  name="type"
                  className="border-[#ccc] border-2 rounded-md"
                />
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-red-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-between gap-2 bg-[#3A36E4] py-2 px-2 w-fit border-0 font text-white text-md rounded-md mt-6 transition ease-in-out delay-400 hover:bg-[#6472EE]"
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

export default NewCarType;
