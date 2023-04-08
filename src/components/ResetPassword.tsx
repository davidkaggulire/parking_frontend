import { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import sendPasswordReset from "./sendPasswordReset";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";
import Modal from "./UI/Modal";

const ResetPassword = (props: any) => {
  const [values, setValues] = useState({
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const toastOptions: any = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const validate = () => {
    const { email } = values;
    if (!email.includes("@")) {
      toast.error("Email should contain '@'", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      setIsLoading(true);
      const { email } = values;
      console.log("clicked");

      const res = await sendPasswordReset(email);

      console.log(res);

      if (res.status === "fail") {
        console.log("failed");

        setIsLoading(false);
        // navigate("../resetPassword", { replace: true });
        toast.error(res.error.code, toastOptions);
      }

      if (res.status === "success") {
        console.log("success");
        toast.success("Sent password Reset link to your email", toastOptions);

        setIsLoading(false);

        // navigate("../login", { replace: true });
      }
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
        <div className="flex flex-col justify-center items-center gap-4 mb-10">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="flex items-center gap-4 justify-center">
              <h1 className="capitalize text-brightGreen text-2xl md:text-3xl ">
                Reset Password
              </h1>
            </div>
            <div className="mt-2">
              <input
                className=" w-80 text-lg text-gray-700 bg-transparent border border-[#ccc] transition ease-in-out delay-500 mt-1 p-1 rounded-md hover:border-[gray-200] focus:outline-none"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-row items-center gap-6  mt-6">
              <button
                type="submit"
                className="bg-[#3A36E4] p-2 w-full border-0 text-white text-lg rounded-md transition ease-in-out delay-400 hover:bg-[#6472EE]"
              >
                Reset Password
              </button>
              {/* <span className=""> */}
                <button onClick={() => props.openModal("signin")}
                  className="bg-[#858789] py-2 w-full border-0 text-white text-lg rounded-md  transition ease-in-out delay-400"
                >
                  Cancel
                </button>
              {/* </span> */}
            </div>
            <div className="">{isLoading && <LoadingSpinner />}</div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </Fragment>
  );
};
export default ResetPassword;
