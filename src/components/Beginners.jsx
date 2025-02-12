import React from "react";
import photo from "../assets/womancoffee.jpg";
import { FaArrowRight } from "react-icons/fa6";
import banner from "../assets/banner.png";

export default function Beginners() {
  return (
    <div>
      <div className="h-[680px] bg-yellow-300 flex">
        <div className="bg-green-500 h-full w-3/6">
          <img src={photo} alt="photo" className="h-full object-cover" />
        </div>
        <div className="h-full py-28 px-24">
          <h1 className="text-xl font-semibold text-zinc-800">
            Nirvanta Is For Beginners
          </h1>
          <div className="py-5 text-6xl flex flex-col gap-2 font-bold text-zinc-800">
            <h1>Launching A</h1>
            <h1>Website Has</h1>
            <h1>Never Been</h1>
            <h1>Easier</h1>
          </div>
          <div className="text-xl py-2 text-zinc-800">
            <p>Highly flexible, with an intuitive Drag & Drop design</p>
            <p>interface that allows you complete design freedom.</p>
          </div>
          <div className="py-5">
            <button className="flex items-center gap-1.5 text-2xl font-semibold py-2 px-6 bg-zinc-800 text-gray-100 rounded-md hover:bg-black ease-in-out duration-300">
              Join Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="py-28">
        <div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-zinc-800">
              Design Any Website You Want
            </h1>
            <div className="py-10 text-xl flex flex-col gap-1.5 text-zinc-600">
              <p>
                109 prebuilt websites to get you started, extensive
                documentation & video tutorials, & world-class
              </p>
              <p>support to guide you at each step of the way.</p>
            </div>
          </div>
          <div className="py-4">
            <div className="flex text-xl justify-center font-semibold gap-4">
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Corporate
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Shop / WooCommerce
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Creative
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Education
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Portfolio
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Health & Beauty
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  One Page
                </button>
              </div>
            </div>
            <div className="flex justify-center font-semibold gap-4 mt-4 text-xl">
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Food
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Events
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Blog / Magazine
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Sports
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Travel
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Marketing
                </button>
              </div>
              <div>
                <button className="py-3 border-solid border px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  bbPress
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={banner} alt="photo" className="w-full py-20" />
        </div>
        <div className="py-20 bg-yellow-100"></div>
      </div>
    </div>
  );
}
