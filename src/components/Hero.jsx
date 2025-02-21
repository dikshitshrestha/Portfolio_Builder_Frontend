import React from "react";
import { FaArrowRight } from "react-icons/fa";
import photo from "../assets/Portfolio1.jpg";
import photo2 from "../assets/Portfolio2.jpg";
export default function Hero() {
  return (
    <div className="container mx-auto lg:px-[120px] lg:py-10 flex">
      <div className="w-1/2">
        <div className="text-6xl font-bold space-y-3">
          <h1>The Ultimate</h1>
          <h1>Portfolio</h1>
          <h1>Website Builder</h1>
        </div>
        <div className="py-6 text-lg">
          <p>Trusted by beginners, marketer & professionals;</p>
          <p>Built with usability and performance in mind.</p>
        </div>
        <button className="flex items-center bg-black text-white px-6 py-3 text-2xl gap-3 font-medium hover:opacity-90 rounded-md">
          Start Designing <FaArrowRight size={18} className="mt-1" />
        </button>
        <hr className="my-16 w-1/2" />
        <div className="flex gap-5">
          <div>
            <h1 className="text-2xl font-bold">1,000,000+</h1>
            <p className="text-gray-600">People Trust Nirvanta</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">1k+</h1>
            <p className="text-gray-600">Average 5-Star Reviews</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative mr-1">
        <img
          src={photo}
          alt="photo"
          className="mr-10 rounded-md h-full object-cover"
        />
        <div className="absolute -right-10 bottom-[10%]">
          <img
            src={photo2}
            alt="photo2"
            className="h-40 w-40 rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
