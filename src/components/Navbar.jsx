import React from "react";
import { BsStars } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import photo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container mx-auto flex items-center justify-between lg:py-[30px] lg:px-[120px]">
      <div className="lg:text-2xl text-base font-bold flex items-center lg:gap-1">
        <img src={photo} alt="logo" className="h-[50px]" />
        <h1>Nirvanta</h1>
      </div>
      <div className="font-medium lg:text-lg text-sm flex lg:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-row items-center lg:gap-1 hover:bg-gray-100 hover:cursor-pointer lg:p-2 duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100" : ""
            }`
          }
        >
          Nirvanta
          <RiArrowDropDownLine size={30} />
        </NavLink>
        <NavLink
          to="/landing"
          className={({ isActive }) =>
            `flex flex-row items-center lg:gap-1 hover:bg-gray-100 lg:p-2 hover:cursor-pointer duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100" : ""
            }`
          }
        >
          Nirvanta for
          <RiArrowDropDownLine size={30} />
        </NavLink>
        <NavLink
          to="/customization"
          className={({ isActive }) =>
            `hover:bg-gray-100 hover:cursor-pointer lg:p-2 duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100" : ""
            }`
          }
        >
          Customization
        </NavLink>
        <NavLink
          to="/hosting"
          className={({ isActive }) =>
            `hover:bg-gray-100 hover:cursor-pointer lg:p-2 duration-500 ease-in-out rounded-md ${
              isActive ? "bg-gray-100" : ""
            }`
          }
        >
          Hosting
        </NavLink>
      </div>
      <div className="lg:text-lg text-sm border lg:px-3 py-2 border-black rounded-md hover:bg-black hover:text-white duration-500 ease-in-out">
        <NavLink to="#" className="flex flex-row items-center gap-2">
          <BsStars />
          Nirvanta Log in
        </NavLink>
      </div>
    </div>
  );
}
