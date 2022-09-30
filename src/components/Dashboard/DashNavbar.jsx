import React, { Fragment, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaParking } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRoute } from "../../utils/APIRoutes";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastFile";

const DashNavbar = () => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);

  const email = useSelector((state) => state.login.email);

  const token = useSelector((state) => state.login.token);

  // getting username from email
  const username = email.slice(0, email.indexOf("@"));

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSideNav = () => {
    console.log("here we are");
    setNav(!nav);
  };

  const menuHandler = () => {
    console.log("menu items");
    console.log(email);
    console.log(token);
    setMenu(!menu);
  };

  const homeRouter = () => {
    navigate("dashboard");
  };

  const logoutHandler = async () => {
    const response = await fetch(logoutRoute, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    const data = await response.json();
    console.log(data);

    if (data.status === "fail") {
      console.log("failed");
      toast.error(data.message, toastOptions);
    }

    if (data.status === "success") {
      console.log("success");
      dispatch({ type: "DESTROY_SESSION"})
      navigate("/");
    }

    navigate("/");
  };

  return (
    <Fragment>
      <nav className=" w-fit md:w-full shadow-md z-1000 bg-white">
        <ul className="flex flex-row justify-between md:justify-end p-2">
          <div className="w-screen flex flex-row md:hidden justify-between items-center">
            <div>
              <h3
                onClick={homeRouter}
                className="italic text-2xl font-bold my-2 p-[0.28rem] flex gap-1 items-center hover:cursor-pointer"
              >
                <FaParking className="text-[#6472EE]" />
                PARKEY
              </h3>
            </div>

            <div onClick={handleSideNav} className="mr-8">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <ul
              className={
                nav
                  ? "fixed left-0 top-0 w-[60%] h-full shadow-md bg-white ease-in-out duration-500 text-black"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <h1 className="w-full text-2xl font-bold text-[#00df9a] m-4 flex gap-2 items-center italic">
                <FaParking className="text-[#6472EE]" />
                PARKEY
              </h1>
              <li className="p-4 border-b border-gray-600">Trucks</li>
              <li className="p-4 border-b border-gray-600">Cars</li>
              <li className="p-4 border-b border-gray-600">Taxi</li>
              <li className="p-4 border-b border-gray-600">Coasters</li>
              <li className="p-4">Boda</li>
            </ul>
          </div>

          <div className="hidden md:flex justify-between gap-4 items-center mr-5 ">
            <img className="rounded-full h-10 bg-black" src={Avatar} alt="" />
            <p>{username}</p>
            <BiDotsVerticalRounded
              size={25}
              onClick={menuHandler}
              className="hover:cursor-pointer"
            />
          </div>
        </ul>
      </nav>
      {menu && (
        <div className="fixed w-[15%] right-0 top-16 shadow-md mr-2 flex justify-end p-6 pr-5 border-1 rounded-md bg-gradient-to-r from-gray-100 to-gray-100 z-600">
          <ul className="flex flex-col items-center">
            <p onClick={logoutHandler} className="p-2 hover:cursor-pointer">
              Logout
            </p>
            {/* <p onClick={logoutHandler} className="p-2">Logout</p>
          <p onClick={logoutHandler} className="p-2">Logout</p> */}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default DashNavbar;
