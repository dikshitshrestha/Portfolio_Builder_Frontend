import React from "react";
import { FaArrowRight } from "react-icons/fa";
import photo from "../assets/Portfolio1.jpg";
import photo2 from "../assets/Portfolio2.jpg";
export default function Hero() {
  return (
    <div className="container mx-auto lg:px-[120px] lg:py-10 flex lg:flex-row flex-col-reverse justify-center items-center pb-8">
      <div className="text-center lg:text-left lg:w-1/2 lg:pr-48">
        <div className="lg:text-6xl py-3 font-bold">
          <h1>The Ultimate Portfolio Website Builder</h1>
        </div>
        <div className="lg:py-6 pb-4 lg:text-lg text-sm">
          <p>
            Trusted by beginners, marketer & professionals; Built with usability
            and performance in mind.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <button className="flex items-center bg-black text-sm py-2 px-3 gap-1 text-white lg:px-6 lg:py-3 lg:text-xl lg:gap-3 font-medium hover:opacity-90 rounded-md">
            Start Designing <FaArrowRight className="mt-1" />
          </button>
        </div>
        <hr className="lg:my-16 my-8 lg:w-full" />
        <div className="flex gap-5 justify-center lg:justify-start">
          <div>
            <h1 className="lg:text-2xl text-xl font-bold">1,000,000+</h1>
            <p className="text-gray-600 text-sm">People Trust Nirvanta</p>
          </div>
          <div>
            <h1 className="lg:text-2xl text-xl font-bold">1k+</h1>
            <p className="text-gray-600 text-sm">Average 5-Star Reviews</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:h-[500px] relative mr-1 px-4">
        <img
          src={photo}
          alt="photo"
          className="mr-10 rounded-md h-full object-cover"
        />
        <div className="absolute lg:-right-10 bottom-[10%] right-0">
          <img
            src={photo2}
            alt="photo2"
            className="lg:h-40 lg:w-40 h-20 w-20 rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
