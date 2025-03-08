import React from "react";
import { BsStars } from "react-icons/bs";
import photo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 lg:py-[30px] lg:px-[120px]">
      <div className="lg:text-2xl text-base font-bold flex items-center lg::gap-1">
        <img src={photo} alt="logo" className="lg::h-[50px] h-4" />
        <h1 className="text-xs text-center lg:text-xl">Nirvanta</h1>
      </div>
      <div className="flex py-2 lg:font-medium lg:text-lg text-xs items-center gap-3 lg:flex lg:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-row items-center lg:gap-1 hover:bg-gray-100 hover:cursor-pointer 2xl:p-2 duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100 py-2 px-2" : ""
            }`
          }
        >
          Nirvanta
        </NavLink>
        <NavLink
          to="/landing"
          className={({ isActive }) =>
            `flex flex-row items-center lg:gap-1 hover:bg-gray-100 lg:p-2 hover:cursor-pointer duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100 py-2 px-2" : ""
            }`
          }
        >
          Nirvanta for
        </NavLink>
        <NavLink
          to="/customization"
          className={({ isActive }) =>
            `hover:bg-gray-100 hover:cursor-pointer lg:p-2 duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100 py-2 px-2" : ""
            }`
          }
        >
          Customization
        </NavLink>
        <NavLink
          to="/hosting"
          className={({ isActive }) =>
            `hover:bg-gray-100 hover:cursor-pointer lg:p-2 duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100 py-2 px-2" : ""
            }`
          }
        >
          Hosting
        </NavLink>
      </div>
      <div className="lg:text-lg text-xs border px-1 py-2 lg:px-3 lg:py-2 border-black rounded-md hover:bg-black hover:text-white duration-500 ease-in-out">
        <NavLink to="#" className="flex flex-row items-center gap-2">
          <BsStars />
          Nirvanta Log in
        </NavLink>
      </div>
    </div>
  );
}
