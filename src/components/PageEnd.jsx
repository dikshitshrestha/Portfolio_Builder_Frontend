import React from "react";
import logo from "../assets/Logo.png";

export default function PageEnd() {
  return (
    <div className="bg-zinc-900 py-16 text-white mt-20">
      <div className="container mx-auto lg:flex justify-evenly">
        <div className="flex items-center gap-1.5">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="text-3xl font-semibold">Nirvanta</h1>
        </div>
        <div className="font-semibold flex flex-col gap-1.5">
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Help Center
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Nirvanta Studio
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Prebuilt Websites
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Reviews
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Submit A Ticket
            </a>
          </li>
        </div>
        <div className="font-semibold flex flex-col gap-1.5">
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              About Us
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Careers
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Support Policy
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Terms And Conditions
            </a>
          </li>
          <li className="list-none">
            <a
              href="#"
              className="hover:text-green-500 ease-in-out duration-300"
            >
              Privacy Policy
            </a>
          </li>
        </div>
        <div>
          <div>
            <h1>Sign up to our newsletter and get all of the</h1>
            <h1>latest news and updates.</h1>
          </div>
          <div className="flex mt-6 items-center">
            <input
              type="text"
              placeholder="Your email *"
              className="p-2 rounded-l-md h-12 outline-none text-black"
            />
            <div className="bg-white h-12 rounded-r-md p-1.5">
              <button className="bg-zinc-800 py-2 px-4 text-sm rounded-md hover:bg-green-500 ease-in-out duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
