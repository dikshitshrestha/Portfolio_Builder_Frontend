import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import expert from "../assets/expert.jpg";
import codeable from "../assets/codeable.png";
import { FaStar } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import developer from "../assets/developer.jpg";
import PageEnd from "./PageEnd.jsx";
import { IoMdCheckmark } from "react-icons/io";

export default function Customization() {
  return (
    <div>
      <div className="h-[550px] flex">
        <div className="w-1/2">
          <img src={expert} alt="expert" className="h-full object-cover" />
        </div>
        <div className="w-1/2 bg-yellow-300 h-full px-24 flex flex-col justify-center">
          <h1 className="text-[18px] font-semibold text-zinc-800">Partner</h1>
          <div className="text-5xl font-bold text-zinc-800 pt-3 flex flex-col gap-1.5">
            <h1>Expert Nirvanta</h1>
            <h1>Customization</h1>
          </div>
          <div className="text-[18px] py-8 text-zinc-800">
            <p>Get premium development support from pre-vetted Nirvanta</p>
            <p>& WordPress experts from our customization partners at</p>
            <p>Codeable.</p>
          </div>
          <div>
            <button className="flex items-center text-white rounded-md gap-3 py-3 px-7 text-xl font-semibold bg-zinc-800 hover:bg-black ease-in-out duration-300">
              Start a Project <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="py-28">
        <div className="flex justify-center">
          <img src={codeable} alt="codeable" className="h-24" />
        </div>
        <div className="text-center py-10 text-3xl font-bold text-zinc-800">
          <h1>Your Hub Of World-Class Experts For Short-Term, Recurring,</h1>
          <h1>And Full-time WordPress Work.</h1>
        </div>
        <div>
          <div className="text-4xl flex justify-center text-yellow-400 pb-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h1 className="text-center text-zinc-700">Focused On Quality</h1>
        </div>
        <div className="flex pt-20 justify-evenly text-center items-center">
          <div className="flex flex-col gap-4">
            <div className="text-4xl flex justify-center">
              <FaUsersGear />
            </div>
            <h1 className="text-2xl font-semibold">Pre-Screened Developers</h1>
            <div className="text-[17px] text-zinc-600">
              <p>Your development work will be delivered by</p>
              <p>hand-picked, world-class WordPress experts</p>
              <p>who have passed a strict application and</p>
              <p>vetting process.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-4xl flex justify-center">
              <BsPatchQuestionFill />
            </div>
            <h1 className="text-2xl font-semibold">Fast & Reliable Support</h1>
            <div className="text-[17px] text-zinc-600">
              <p>Our dedicated team of on-boarding assistants</p>
              <p>and experts in support is available to help you</p>
              <p>get any job done quickly, every step of the</p>
              <p>way. All day, every day!</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-4xl flex justify-center">
              <RiMoneyDollarCircleFill />
            </div>
            <h1 className="text-2xl font-semibold">Money-Back Guarantee</h1>
            <div className="text-[17px] text-zinc-600">
              <p>Your work with Codeable experts is 100%</p>
              <p>risk-free! Your developer will fix any bugs</p>
              <p>for free for 28 days after project delivered</p>
              <p>or we will provide a full refund if not satisfied.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-[120px] bg-lime-100 flex h-[700px]">
        <div className="w-3/7">
          <img src={developer} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-3/5 flex items-center pl-20">
          <div>
            <div className="text-3xl font-bold">
              <h1>Top Rated & World-Class Developers</h1>
              <h1>For Your Avada Project</h1>
            </div>
            <div className="text-[18px] py-8 text-zinc-700">
              <p>Get on-demand help with your WordPress site by posting your</p>
              <p>
                project and having vetted WordPress developers provide a free
              </p>
              <p>
                estimate. Codeable provides a healthy working environment for
                both
              </p>
              <p>
                clients and WordPress experts to meet and complete high quality
              </p>
              <p>work together.</p>
            </div>
            <div className="pb-8 flex flex-col gap-2 text-zinc-700">
              <p className="flex items-center gap-4">
                <IoMdCheckmark className="text-green-500" /> Focused on quality
                – 4.95/5 average project rating
              </p>
              <hr />
              <p className="flex items-center gap-4">
                <IoMdCheckmark className="text-green-500" />
                Free estimates, no obligation to hire, 100% risk free
              </p>
              <hr />
              <p className="flex items-center gap-4">
                <IoMdCheckmark className="text-green-500" />
                One-time or ongoing WordPress projects of any size
              </p>
              <hr />
            </div>
            <div>
              <button className="bg-zinc-800 py-3 text-white rounded-md px-7 text-xl font-semibold flex items-center gap-3 hover:bg-black duration-300 ease-in-out">
                Hire a Codeable Expert <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PageEnd />
    </div>
  );
}
