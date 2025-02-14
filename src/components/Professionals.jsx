import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import project from "../assets/project.jpg";
import { PiSpeedometerFill } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { FaTools } from "react-icons/fa";

export default function Professionals() {
  return (
    <div>
      <div className="h-[600px] flex">
        <div className="w-1/2">
          <img src={project} alt="project" className="h-full object-cover" />
        </div>
        <div className="w-1/2 bg-sky-300 py-24 px-20">
          <h1 className="text-[18px] font-semibold">
            Avada Is For Professionals
          </h1>
          <div className="text-6xl font-bold text-zinc-800 py-6 flex flex-col gap-2">
            <h1>Take Your</h1>
            <h1>Projects To The</h1>
            <h1>Next Level</h1>
          </div>
          <div className="text-[18px] text-zinc-800">
            <p>Nirvanta's workflow makes it possible for you to develop &</p>
            <p>deploy websites rapidy, with a consistent uodates</p>
            <p>schedule to guarantee stability.</p>
          </div>
          <div>
            <button className="px-6 py-3 bg-zinc-800 flex text-white items-center gap-2 text-xl font-semibold rounded-md hover:bg-black ease-in-out duration-300 mt-8">
              Join Nivanta Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="py-28 flex justify-evenly text-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center text-4xl">
            <PiSpeedometerFill />
          </div>
          <h1 className="text-2xl font-semibold">Accelerate Your Workflow</h1>
          <div className="text-[17px] text-zinc-600">
            <p>With an intuitive Live Editor & an extensive</p>
            <p>library of prebuilt content.</p>
          </div>
          <a href="#" className="text-[18px] underline font-semibold">
            Discover Website Builder
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center text-4xl">
            <FaTools />
          </div>
          <h1 className="text-2xl font-semibold">Superior Website Tools</h1>
          <div className="text-[17px] text-zinc-600">
            <p>You have total design control to deliver</p>
            <p>scalable client websites fast.</p>
          </div>
          <a href="#" className="text-[18px] underline font-semibold">
            View All Feature List
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center text-4xl">
            <MdCalendarMonth />
          </div>
          <h1 className="text-2xl font-semibold">
            Build Websites For The Future
          </h1>
          <div className="text-[17px] text-zinc-600">
            <p>Receive free updates, compatible with industry</p>
            <p>standards & trends, for life.</p>
          </div>
          <a href="#" className="text-[18px] underline font-semibold">
            Get Dedicated Support
          </a>
        </div>
      </div>
    </div>
  );
}
