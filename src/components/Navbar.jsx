import React from "react";
import { BsStars } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import photo from "../assets/logo.png";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-[35px] px-[120px]">
      <div className="text-2xl font-bold flex items-center gap-1">
        <img src={photo} alt="logo" className="h-[50px]" />
        <h1>Nirvanta</h1>
      </div>
      <div className="font-medium text-lg flex gap-8">
        <a className="flex flex-row items-center gap-1 hover:bg-gray-100 hover:cursor-pointer p-2 duration-500 ease-in-out rounded-md">
          Nirvanta
          <RiArrowDropDownLine size={30} />
        </a>
        <a
          href=""
          className="flex flex-row items-center gap-1 hover:bg-gray-100 p-2 hover:cursor-pointer duration-500 ease-in-out rounded-md"
        >
          Nirvanta for
          <RiArrowDropDownLine size={30} />
        </a>
        <a
          href=""
          className="hover:bg-gray-100 hover:cursor-pointer p-2 duration-500 ease-in-out rounded-md"
        >
          Customization
        </a>
        <a
          href=""
          className="hover:bg-gray-100 hover:cursor-pointer p-2 duration-500 ease-in-out rounded-md"
        >
          Hosting
        </a>
        <a
          href=""
          className="flex flex-row items-center gap-1 hover:bg-gray-100 hover:cursor-pointer p-2 duration-500 ease-in-out rounded-md"
        >
          Resources
          <RiArrowDropDownLine size={30} />
        </a>
      </div>
      <div className="text-lg border px-3 py-2 border-black rounded-md hover:bg-black hover:text-white duration-500 ease-in-out">
        <a href="/" className="flex flex-row items-center gap-2">
          <BsStars />
          Nirvanta Log in
        </a>
      </div>
    </div>
  );
}
