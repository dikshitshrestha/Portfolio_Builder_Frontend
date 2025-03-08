import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import expert from "../assets/expert.jpg";
import codeable from "../assets/codeable.png";
import { FaStar } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import developer from "../assets/developer.jpg";
import { IoMdCheckmark } from "react-icons/io";

export default function Customization() {
  return (
    <div className="container mx-auto">
      <div className="lg:h-[550px] flex lg:flex-row flex-col">
        <div className="lg:w-1/2">
          <img src={expert} alt="expert" className="h-full object-cover" />
        </div>
        <div className="lg:w-1/2 bg-yellow-300 h-full xl:px-24 lg:px-14 flex flex-col justify-center pb-3">
          <h1 className="lg:text-[18px] text-sm font-semibold text-zinc-800 lg:text-start text-center py-2">
            Partner
          </h1>
          <div className="lg:text-5xl font-bold text-zinc-800 lg:pt-2 flex justify-center lg:flex-col lg:gap-1.5 gap-1">
            <h1>Expert Nirvanta</h1>
            <h1>Customization</h1>
          </div>
          <div className="lg:text-[18px] text-sm text-justify lg:text-start lg:leading-relaxed xl:pr-16 lg:py-8 py-3 lg:px-0 px-2 text-zinc-800">
            <p>
              Get premium development support from pre-vetted Nirvanta &
              WordPress experts from our customization partners at Codeable.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center text-white rounded-md lg:gap-3 gap-1.5 lg:py-3 lg:px-7 lg:text-xl text-sm px-3 py-2 font-semibold bg-zinc-800 hover:bg-black ease-in-out duration-300">
              Start a Project <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-16">
        <div className="flex justify-center">
          <img src={codeable} alt="codeable" className="lg:h-24 h-10" />
        </div>
        <div className="text-center lg:py-10 py-4 lg:text-3xl lg:leading-relaxed xl:px-80 text-xl font-bold text-zinc-800">
          <h1>
            Your Hub Of World-Class Experts For Short-Term, Recurring, And
            Full-time WordPress Work.
          </h1>
        </div>
        <div>
          <div className="lg:text-4xl text-xl flex justify-center text-yellow-400 pb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h1 className="text-center text-zinc-700 lg:text-xl text-sm">
            Focused On Quality
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:pt-20 lg:px-0 xl:px-20 px-20 pt-10 gap-8 lg:gap-0 lg:justify-evenly text-center items-center">
          <div className="flex flex-col lg:gap-4 gap-2">
            <div className="text-4xl flex justify-center">
              <FaUsersGear />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold">
              Pre-Screened Developers
            </h1>
            <div className="lg:text-[17px] text-sm text-zinc-600 text-justify lg:leading-relaxed px-3 xl:px-16 lg:text-center">
              <p>
                Your development work will be delivered by hand-picked,
                world-class WordPress experts who have passed a strict
                application and vetting process.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:gap-4 gap-2">
            <div className="text-4xl flex justify-center">
              <BsPatchQuestionFill />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold">
              Fast & Reliable Support
            </h1>
            <div className="lg:text-[17px] text-sm text-zinc-600 text-justify lg:leading-relaxed px-3 xl:px-16 lg:text-center">
              <p>
                Our dedicated team of on-boarding assistants and experts in
                support is available to help you get any job done quickly, every
                step of the way. All day!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:gap-4">
            <div className="text-4xl flex justify-center">
              <RiMoneyDollarCircleFill />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold">
              Money-Back Guarantee
            </h1>
            <div className="lg:text-[17px] text-sm text-zinc-600 text-justify px-3 lg:leading-relaxed xl:px-16 lg:text-center">
              <p>
                Your work with Codeable experts is 100% risk-free! Your
                developer will fix any bugs for free for 28 days after project
                delivered or we will provide a full refund if not satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-20 xl:px-[120px] lg:px-12 bg-lime-100 flex lg:flex-row flex-col lg:h-[700px] h-full">
        <div className="lg:w-3/7 p-5 lg:p-0">
          <img src={developer} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:w-3/5 flex items-center lg:pl-10 xl:pl-20 px-3 lg:px-0">
          <div className="lg:flex lg:flex-col lg:gap-6">
            <div className="xl:text-3xl lg:text-xl text-[17px] font-bold">
              <h1>
                Top Rated & World-Class Developers For Your Nirvanta Project
              </h1>
            </div>
            <div className="xl:text-[18px] lg:text-sm text-zinc-700  lg:leading-relaxed py-3 text-sm text-justify">
              <p>
                Get on-demand help with your WordPress site by posting your
                project and having vetted WordPress developers provide a free
                estimate. Codeable provides a healthy working environment for
                both clients and WordPress experts to meet and complete high
                quality work together.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 text-zinc-700 text-sm xl:text-[17px]">
              <p className="flex items-center gap-4">
                <IoMdCheckmark className="text-green-500" /> Focused on quality
                – 4.95/5 average project rating
              </p>

              <p className="flex items-center gap-4">
                <IoMdCheckmark className="text-green-500" />
                Free estimates, no obligation to hire, 100% risk free
              </p>

              <p className="flex items-center gap-4">
                <IoMdCheckmark className="text-green-500" />
                One-time or ongoing WordPress projects of any size
              </p>
            </div>
            <div className="flex justify-center py-4 lg:justify-start">
              <button className="bg-zinc-800 py-3 text-white rounded-md lg:px-7 px-5 xl:text-xl text-xs font-semibold flex items-center xl:gap-3 gap-1 hover:bg-black duration-300 ease-in-out">
                Hire a Codeable Expert <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
