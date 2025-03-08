import React from "react";
import photo from "../assets/womancoffee.jpg";
import { FaArrowRight } from "react-icons/fa6";
import banner from "../assets/banner.png";
import wordpress from "../assets/WordPress.png";
import prebuilt from "../assets/prebuilt.png";
import design from "../assets/design.png";
import { FaStar } from "react-icons/fa6";
import website from "../assets/webdesign.png";
import store from "../assets/store.png";
import launch from "../assets/content.png";
import layout from "../assets/layouts.png";
import setup1 from "../assets/setup1.png";
import setup2 from "../assets/setup2.png";
import setup3 from "../assets/setup3.png";
import bgphoto from "../assets/bg.jpg";
import dynamic from "../assets/Dynamic.png";
import { CiCircleCheck } from "react-icons/ci";
import clients from "../assets/customers.jpg";
import video from "../assets/video.jpg";
import document from "../assets/document.jpg";
import BegginingFooter from "./BegginingFooter";

export default function Beginners() {
  return (
    <div className="container mx-auto">
      <div className="lg:h-[680px] bg-yellow-300 flex lg:flex-row flex-col">
        <div className="h-full lg:w-1/2">
          <img src={photo} alt="photo" className="h-full object-cover" />
        </div>
        <div className="h-full lg:flex lg:flex-col lg:justify-center lg:py-28 lg:w-1/2 lg:px-24 px-2 pt-5">
          <h1 className="lg:text-xl text-xs font-semibold text-zinc-800">
            Nirvanta Is For Beginners
          </h1>
          <div className="lg:py-5 py-2 lg:text-6xl font-bold text-zinc-800">
            <h1>Launching A Website Has Never Been Easier</h1>
          </div>
          <div className="lg:text-xl lg:py-2 text-xs text-justify text-zinc-800">
            <p>
              Highly flexible, with an intuitive Drag & Drop design interface
              that allows you complete design freedom.
            </p>
          </div>
          <div className="lg:pt-5 py-5 flex justify-center lg:justify-start">
            <button className="flex items-center gap-1.5 lg:text-2xl text-xs font-semibold py-2 px-6 bg-zinc-800 text-gray-100 rounded-md hover:bg-black ease-in-out duration-300">
              Join Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-16">
        <div>
          <div className="text-center">
            <h1 className="lg:text-5xl text-xl font-bold text-zinc-800">
              Design Any Website You Want
            </h1>
            <div className="lg:py-10 py-3 lg:text-xl text-sm flex flex-col gap-1.5 text-zinc-600">
              <p>
                109 prebuilt websites to get you started, extensive
                documentation & video tutorials, & world-class support to guide
                you at each step of the way.
              </p>
            </div>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-3 lg:grid-cols-7 gap-3 pl-6 lg:pl-0 lg:text-xl text-xs font-semibold lg:gap-4">
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Corporate
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Shop
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Creative
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Education
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Portfolio
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Health
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  One Page
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Food
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Events
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Blogs
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Sports
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Travel
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  Marketing
                </button>
              </div>
              <div className="lg:flex lg:justify-center">
                <button className="lg:py-3 py-2 px-2 border-solid border lg:px-5 border-gray-300 rounded-md hover:border-black ease-in-out duration-200">
                  bbPress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BegginingFooter />
      <div className="w-full pt-32 lg:px-[120px]">
        <div className="text-center">
          <h1 className="lg:pb-8 pb-2 lg:text-5xl text-xl font-bold text-zinc-800">
            Why Choose Nirvanta?
          </h1>
          <div className="lg:text-xl text-sm text-zinc-600">
            <p>
              Nirvanta is an intuitive, reliable, mobile-friendly website
              building solution with extensive resources and a world-class
              support team. We are invested in what matters most to you, your
              vision.
            </p>
          </div>
        </div>
        <div className="lg:py-20 py-10 flex lg:flex-row flex-col px-2 gap-4 lg:gap-14 rounded-md">
          <div className="bg-yellow-200 lg:w-1/3 py-7 px-6 text-center rounded-md">
            <div className="flex justify-center">
              <FaStar className="text-white text-6xl" />
            </div>
            <h1 className="py-2 text-9xl font-bold text-zinc-800">#1</h1>
            <div className="text-zinc-800">
              <p>The #1 selling Website Builder on</p>
              <p>Themeforest for 12+ Years.</p>
            </div>
            <div className="mt-12">
              <button className="font-semibold bg-white px-8 py-3 rounded-md">
                Trusted By 1,000+ Website Owners
              </button>
            </div>
          </div>
          <div className="lg:w-2/3 lg:p-16 p-4 bg-gray-50 flex lg:flex-row flex-col-reverse">
            <div className="lg:w-2/5">
              <div className="lg:text-3xl text-[17px] py-3 font-bold flex flex-col gap-1.5 text-zinc-800">
                <h1>No Coding Knowledge Required</h1>
              </div>
              <div className=" text-zinc-700">
                <p>
                  Intuitive & infinitely flexible, you can build any type of
                  website, with the only limit being your imagination.
                </p>
              </div>
            </div>
            <div className="lg:w-3/5">
              <img src={website} alt="design" />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 text-center">
          <div className="lg:w-1/3">
            <div className="flex justify-center items-center">
              <img src={launch} alt="layout" className="h-52" />
            </div>
            <div className="lg:pt-6 lg:pb-3 py-1 lg:text-2xl font-semibold">
              <h1>Launch Your Website Online, Fast</h1>
            </div>
            <p className="text-zinc-600 text-sm lg:text-[16px]">
              Save time with the Avada Website Builder.
            </p>
          </div>
          <div className="lg:w-1/3">
            <div className="flex justify-center items-center">
              <img src={layout} alt="layout" className="h-52" />
            </div>
            <div className="lg:pt-6 lg:pb-3 py-1 lg:text-2xl font-semibold">
              <h1>Intuitive Visual Drag & Drop Builder</h1>
            </div>
            <p className="text-zinc-600 text-sm lg:text-[16px]">
              User friendly & highly customizable.
            </p>
          </div>
          <div className="lg:w-1/3">
            <div className="flex justify-center items-center">
              <img src={store} alt="store" className="h-52" />
            </div>
            <div className="lg:pt-6 lg:pb-3 py-1 lg:text-2xl font-semibold">
              <h1>Setup Online Store With Few Clicks</h1>
            </div>
            <p className="text-zinc-600 text-sm lg:text-[16px]">
              Seamless integration with WooCommerce.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full z-10 top-[680px] pt-32">
        <hr />
        <div className="lg:py-28 py-16 lg:px-[120px] relative">
          <div className="text-center lg:mb-20 mb-6">
            <h1 className="lg:text-5xl text-xl font-bold lg:mb-7">
              Nirvanta Setup Wizard
            </h1>
            <p className="lg:text-xl text-sm py-2 text-zinc-600">
              A step-by-step website setup wizard that makes it easy to generate
              websites on the fly and fast.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col gap-12">
            <div className="lg:w-1/3 bg-gray-100 py-7 rounded-md lg:px-10 px-6 text-center">
              <div className="lg:h-40 flex items-center justify-center">
                <img src={setup1} alt="setup1" />
              </div>
              <div className="lg:text-2xl font-semibold py-3 text-sm">
                <h1>Build A Website From Scratch With Ease</h1>
              </div>
              <div className="text-zinc-600 text-xs lg:text-sm lg:text-center text-justify">
                <p>
                  The Nirvanta step-by-step setup wizard makes it easy for you
                  to generate websites on the fly, and fast.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 bg-gray-100 py-7 rounded-md lg:px-10 px-6 text-center">
              <div className="lg:h-40 flex items-center justify-center">
                <img src={setup2} alt="setup2" />
              </div>
              <div className="lg:text-2xl font-semibold py-3 text-sm">
                <h1>Choose Content And Layouts You Prefer</h1>
              </div>
              <div className="text-zinc-600 text-xs lg:text-sm lg:text-center text-justify">
                <p>
                  Choose layouts, import content, activate extended features and
                  launch your website.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 bg-gray-100 py-7 rounded-md lg:px-10 px-6 text-center">
              <div className="lg:h-40 flex items-center justify-center">
                <img src={setup3} alt="setup3" />
              </div>
              <div className="lg:text-2xl font-semibold py-3 text-sm">
                <h1>Choose A Color Palette & Typography Set</h1>
              </div>
              <div className="text-zinc-600 text-xs lg:text-sm lg:text-center text-justify">
                <p>
                  Choose from predefined color palettes and typography sets to
                  style your website.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 lg:px-[180px] flex lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 flex flex-col justify-center py-3">
            <h1 className="lg:text-5xl text-xl text-center font-bold">
              Nirvanta Studio
            </h1>
            <div className="lg:py-8 py-3 text-sm text-justify px-2 lg:text-[18px] text-zinc-600">
              <p>
                Expansive library of multi-use content designed professionally
                to speed up your workflow. Get a head start with prebuilt
                headers to footers, containers to elements, and everythinh in
                between.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center gap-4">
                <p className="underline lg:text-[18px] font-semibold">
                  Explore Prebuilt Content
                </p>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-16 mt-4 lg:h-[400px] object-cover">
            <img src={bgphoto} alt="bg" className="h-full rounded-t-md" />
          </div>
        </div>
        <div className="lg:px-[120px] lg:py-32 py-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
          <div className="lg:w-2/3 bg-gray-100 lg:gap-5 flex lg:flex-row flex-col-reverse justify-evenly items-center lg:h-[400px] p-8 rounded-md">
            <div className="w-1/2">
              <h1 className="lg:text-3xl text-xl font-bold lg:mb-5 py-3 text-center">
                Mobile Ready
              </h1>
              <div className="text-zinc-700 text-justify">
                <p>
                  Nirvanta is 100% fluid & responsive across all device types,
                  from mobile to desktop & tablets.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={dynamic} alt="dynamic" className="lg:h-52 h-28" />
            </div>
          </div>
          <div className="lg:w-1/3 bg-amber-200 rounded-md text-center flex flex-col justify-center h-full gap-2 py-4 lg:pt-12 lg:pb-16">
            <div className="flex justify-center text-8xl">
              <CiCircleCheck />
            </div>
            <div className="font-semibold">
              <h1>No reliance on 3rd party Builders or external tools.</h1>
            </div>
            <div className="flex justify-center text-8xl">
              <CiCircleCheck />
            </div>
            <div className="font-semibold">
              <h1>No hidden fees or additional purchases are required.</h1>
            </div>
          </div>
        </div>
        <div className="lg:px-[120px] flex lg:flex-row gap-10 flex-col justify-evenly">
          <div className="text-center lg:w-1/3">
            <div className="flex items-center justify-center">
              <img src={clients} alt="" className="h-64" />
            </div>
            <h1 className="lg:py-4 py-2 lg:text-2xl font-semibold">
              World-Class Support
            </h1>
            <div className="text-zinc-600 text-sm">
              <p>
                We build long-term professional relationships with our customers
                that you can rely on & trust.
              </p>
            </div>
          </div>
          <div className="text-center lg:w-1/3">
            <div className="flex items-center justify-center">
              <img src={document} alt="" className="h-64" />
            </div>
            <h1 className="lg:py-4 py-2 lg:text-2xl font-semibold">
              Documentation
            </h1>
            <div className="text-zinc-600 text-sm">
              <p>
                Comprehensive & detailed, the library of help files will make
                building websites with Nirvanta even easier.
              </p>
            </div>
          </div>
          <div className="text-center lg:w-1/3">
            <div className="flex items-center justify-center">
              <img src={video} alt="" className="h-64" />
            </div>
            <h1 className="lg:py-4 py-2 lg:text-2xl font-semibold">
              Video Tutorials
            </h1>
            <div className="text-zinc-600 text-sm">
              <p>
                An extensive library of YouTube videos that provide insight &
                detailed steps on how to get the best out of Nirvanta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
