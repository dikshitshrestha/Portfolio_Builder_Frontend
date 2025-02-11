import React from "react";
import photo1 from "../assets/Website1.png";
import photo2 from "../assets/Website2.png";
import photo3 from "../assets/Website3.png";
import logo from "../assets/Logo.png";
import { TbLayoutFilled } from "react-icons/tb";
import { RiLayoutTopFill } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { RiLayoutBottomFill } from "react-icons/ri";
import { SiTask } from "react-icons/si";
import { ImCheckboxChecked } from "react-icons/im";
import { GrTasks } from "react-icons/gr";
import { RiTodoFill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import shopping from "../assets/Shopping.jpg";
import prebuilt from "../assets/prebuilt.png";
import design from "../assets/design.png";
import performance from "../assets/performance.png";
import dynamic from "../assets/Dynamic.png";
import content from "../assets/content.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import image1 from "../assets/portfolio1.jpg";
import image2 from "../assets/portfolio2.jpg";

export default function Landing() {
  return (
    <div>
      <div className="px-[120px] py-20 flex gap-7">
        <a href="#" className="w-1/3">
          <div className="bg-yellow-300 h-[550px] px-16 py-12 rounded-md cursor-pointer hover:scale-y-105 hover:scale-x-105 transition-transform duration-500 origin-bottom hover:bg-yellow-400">
            <div className="text-center text-lg font-semibold">
              For Beginners
            </div>
            <div className="py-3 text-center text-3xl font-bold">
              <h1>Launch Your First</h1>
              <h1>Website</h1>
            </div>
            <div className="py-8 flex justify-center">
              <img src={photo1} alt="photo" className="h-44" />
            </div>
            <div className="flex justify-center py-2 gap-1.5">
              <div className="bg-yellow-500 px-3 py-1.5 rounded-md font-semibold text-gray-100 text-sm">
                Visual Builder
              </div>
              <div className="bg-yellow-500 px-3 py-1.5 rounded-md font-semibold text-gray-100 text-sm">
                Documentation
              </div>
            </div>
            <div className="flex justify-center gap-1.5">
              <div className="bg-yellow-500 px-3 py-1.5 rounded-md font-semibold text-gray-100 text-sm">
                Support
              </div>
              <div className="bg-yellow-500 px-3 py-1.5 rounded-md font-semibold text-gray-100 text-sm">
                Prebuilt Websites
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="w-1/3">
          <div className="bg-lime-300 h-[550px] px-16 py-12 rounded-md cursor-pointer transition-transform duration-500 hover:scale-105 origin-bottom hover:bg-lime-400">
            <div className="text-center text-lg font-semibold">
              For Marketers
            </div>
            <div className="py-3 text-center text-3xl font-bold">
              <h1>Generate Leads and</h1>
              <h1>Conversions</h1>
            </div>
            <div className="py-8">
              <img src={photo2} alt="photo" />
            </div>
            <div className="flex justify-center gap-1.5 py-2">
              <div className="px-3 py-1.5 bg-lime-600 rounded-md text-sm font-semibold text-gray-100">
                Design
              </div>
              <div className="px-3 py-1.5 bg-lime-600 rounded-md text-sm font-semibold text-gray-100">
                SEO
              </div>
              <div className="px-3 py-1.5 bg-lime-600 rounded-md text-sm font-semibold text-gray-100">
                Shop Builder
              </div>
            </div>
            <div className="flex justify-center">
              <div className="px-3 py-1.5 bg-lime-600 rounded-md text-sm font-semibold text-gray-100">
                Form Builder
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="w-1/3">
          <div className=" bg-sky-300 h-[550px] px-16 py-12 rounded-md cursor-pointer transition-transform duration-500 hover:scale-105 origin-bottom hover:bg-sky-400">
            <div className="text-center text-lg font-semibold">
              For Professionals
            </div>
            <div className="py-3 text-center text-3xl font-bold">
              <h1>Take Your Projects</h1>
              <h1>To The Next Level</h1>
            </div>
            <div className="py-8 flex justify-center">
              <img src={photo3} alt="photo" className="h-44" />
            </div>
            <div className="flex justify-center py-2 gap-1.5 text-sm">
              <div className="bg-sky-600 px-3 py-1.5 text-gray-100 font-semibold rounded-md">
                All-in-one
              </div>
              <div className="bg-sky-600 px-3 py-1.5 text-gray-100 font-semibold rounded-md">
                Patcher
              </div>
              <div className="bg-sky-600 px-3 py-1.5 text-gray-100 font-semibold rounded-md">
                WCAG
              </div>
            </div>
            <div className="flex justify-center text-sm">
              <div className="bg-sky-600 py-1.5 px-3 text-gray-100 font-semibold rounded-md">
                Dynamic Data
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="px-[120px] py-16">
        <div className="flex justify-center">
          <img src={logo} alt="" className="h-20" />
        </div>
        <div className="flex justify-center py-5">
          <h1 className="text-5xl font-bold">
            Design Anything, Build Everything
          </h1>
        </div>
        <div className="flex justify-center py-2">
          <h2 className="text-xl text-gray-700">
            Design and launch your wesbite fast & no coding knowledge is
            required.
          </h2>
        </div>
      </div>
      <div className="px-[120px] py-5">
        <div className="flex flex-col gap-3 w-1/4">
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 hover:bg-gray-100 rounded-md">
              <FaFileCode />
              Live Visual Builder
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 hover:bg-gray-100 rounded-md">
              <TbLayoutFilled />
              Layout Builder
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 rounded-md hover:bg-gray-100">
              <RiLayoutTopFill />
              Header Builder
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 rounded-md hover:bg-gray-100">
              <ImNewspaper />
              Mega Menu
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 rounded-md hover:bg-gray-100">
              <RiLayoutBottomFill />
              Footer Builder
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 rounded-md hover:bg-gray-100">
              <SiTask />
              Form Builder
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 rounded-md hover:bg-gray-100">
              <RiTodoFill />
              Off Canvas
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 rounded-md hover:bg-gray-100">
              <ImCheckboxChecked />
              Setup Wizard
            </div>
          </a>
          <a href="#">
            <div className="py-3 px-5 w-64 text-xl font-semibold flex items-center gap-1.5 rounded-md hover:bg-gray-100">
              <GrTasks />
              Performance Wizard
            </div>
          </a>
        </div>
      </div>
      <div className="px-[120px] py-28">
        <div className="text-center">
          <h1 className="text-5xl font-bold">All-In-One Website Builder</h1>
          <p className="mt-7 text-xl text-gray-600">
            Experience total control over your website creation process.
          </p>
        </div>
        <div className="py-16">
          <div className="flex items-center">
            <div className="w-1/3 text-center">
              <div className="flex items-center justify-center">
                <img src={prebuilt} alt="" className="h-52" />
              </div>
              <h1 className="text-2xl font-semibold">109 Prebuilt Websites</h1>
              <div className="py-3 text-gray-600">
                <p>Prebuilt websites are designed to save you time.</p>
                <p>Import with a few clicks & customize it to suit</p>
                <p>your requirements.</p>
              </div>
            </div>
            <div className="w-1/3 text-center">
              <div className="flex items-center justify-center">
                <img src={design} alt="" className="h-48" />
              </div>
              <h1 className="text-2xl font-semibold py-3">
                120+ Design Elements
              </h1>
              <div className="text-gray-600">
                <p>Packed with options, they are highly flexible for</p>
                <p>any design & for any purpose. The only limit is</p>
                <p>your imagination.</p>
              </div>
            </div>
            <div className="w-1/3 text-center">
              <div className="flex items-center justify-center">
                <img src={performance} alt="" className="h-48" />
              </div>
              <h1 className="text-2xl font-semibold py-3">
                Built For Performance
              </h1>
              <div className=" text-gray-600">
                <p>Experience total control of your website's</p>
                <p>features that will empower you to make superor</p>
                <p>performance-related decisions.</p>
              </div>
            </div>
          </div>
          <div className="mt-14 flex items-center">
            <div className="w-1/3 text-center">
              <div className="flex items-center justify-center">
                <img src={dynamic} alt="" className="h-48" />
              </div>
              <h1 className="text-2xl font-semibold py-3">Mobile Friedly</h1>
              <div className="text-gray-600">
                <p>Nirvanta is 100% fluid & responsive across all</p>
                <p>device types, from mobile to desktop & tablets,</p>
                <p>with no compromise.</p>
              </div>
            </div>
            <div className="w-1/3 text-center">
              <div className="flex items-center justify-center">
                <img src={content} alt="" className="h-48" />
              </div>
              <h1 className="text-2xl font-semibold py-3">Dynamic Content</h1>
              <div className="text-gray-600">
                <p>Build unique pages & post layouts for your</p>
                <p>website by harnessing the power of Nirvanta's</p>
                <p>dynamic content functionality.</p>
              </div>
            </div>
            <div className="w-1/3 text-center">
              <div className="flex items-center justify-center">
                <img src={shopping} alt="" className="h-48" />
              </div>
              <h1 className="text-2xl font-semibold py-3">
                Online Store Builder
              </h1>
              <div className=" text-gray-600">
                <p>Nirvanta is integrated with WooCommerce, allowing</p>
                <p>you to build successful online stores to sell</p>
                <p>anything online.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 text-xl font-semibold text-white bg-zinc-800 px-6 py-3 rounded-md hover:bg-black">
            Discover More
            <FaArrowRight />
          </button>
        </div>
      </div>
      <hr />
      <div className="py-20 px-[120px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800">
            1,000+ Website Owners
          </h1>
          <h1 className="text-5xl font-bold text-zinc-800 py-2">
            Trust Nirvanta
          </h1>
          <p className="py-6 text-xl text-zinc-600">
            The #1 selling Website Builder on Themeforest for 12+ years.
          </p>
        </div>
        <div className="flex py-14">
          <div className="w-1/4">
            <div className="flex justify-center">
              <img src={logo1} alt="logo" className="h-20" />
            </div>
            <div className="text-center py-5">
              <h1 className="py-3 font-semibold text-xl">
                World-Class Support
              </h1>
              <div className="text-zinc-600">
                <p>We build long-term professional</p>
                <p>relationships with our custimers</p>
                <p>that you can rely on & trust.</p>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-center">
              <img src={logo2} alt="logo" className="h-20" />
            </div>
            <div className="text-center py-5">
              <h1 className="py-3 text-xl font-semibold">
                Documentation & Tutorials
              </h1>
              <div className="text-zinc-600">
                <p>Over 550 help files & 200 tutorial</p>
                <p>videos will make building websites</p>
                <p>with Nirvants even easier and faster.</p>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-center">
              <img src={logo3} alt="logo" className="h-20" />
            </div>
            <div className="text-center py-5">
              <h1 className="py-3 text-xl font-semibold">
                100% Built In-House
              </h1>
              <div className="text-zinc-600">
                <p>Nirvanta is not reliant on 3rd party</p>
                <p>tools to deliver a reliable & stable</p>
                <p>website building experience.</p>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex justify-center">
              <img src={logo4} alt="logo" className="h-20" />
            </div>
            <div className="text-center py-5">
              <h1 className="py-3 text-xl font-semibold">
                Free Lifetime Updates
              </h1>
              <div className="text-zinc-600">
                <p>Your website will receive free &</p>
                <p>regular updates, compatible with</p>
                <p>industry standards & trends, for life.</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="px-[120px]">
        <div className="bg-lime-400 h-[500px] rounded-md flex">
          <div className="w-1/2 ml-20 py-28">
            <div className="text-5xl font-bold text-zinc-800">
              <h1>Build Successful</h1>
              <h1 className="py-3">Websites With Nirvanta</h1>
            </div>
            <div className="py-3 text-xl text-zinc-700">
              <p>Whether your are a beginner, marketer, or professional,</p>
              <p>
                Nirvanta has the tools & resources you can rely on to succeed.
              </p>
            </div>
            <div className="py-8">
              <button className="bg-zinc-800 py-3 px-6 gap-1.5 flex items-center text-xl text-gray-100 rounded-md hover:bg-black ease-in-out duration-300">
                Join Now <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="w-1/2 relative p-10">
            <img
              src={image1}
              alt="photo"
              className="mr-10 rounded-md h-full object-cover"
            />
            <div className="absolute -right-10 bottom-[10%]">
              <img
                src={image2}
                alt="photo2"
                className="h-40 w-40 rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 mt-20 py-16 text-white flex justify-evenly">
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
