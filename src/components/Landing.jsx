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
import image1 from "../assets/Portfolio1.jpg";
import image2 from "../assets/Portfolio2.jpg";
import { useState } from "react";
import bg1 from "../assets/bg.jpg";
import bg2 from "../assets/document.jpg";
import bg3 from "../assets/developer.jpg";
import bg4 from "../assets/desktop.jpg";
import bg5 from "../assets/Portfolio2.jpg";
import bg6 from "../assets/womancoffee.jpg";
import bg7 from "../assets/Portfolio1.jpg";
import bg8 from "../assets/project.jpg";
import bg9 from "../assets/marketers.jpg";
import { NavLink } from "react-router-dom";

export default function Landing() {
  const images = {
    live: bg1,
    layout: bg2,
    header: bg3,
    mega: bg4,
    footer: bg5,
    form: bg6,
    canvas: bg7,
    setup: bg8,
    performance: bg9,
  };

  const [bgImage, setBgImage] = useState(bg1);

  const [activeButton, setActiveButton] = useState("live");

  function handleClick(key) {
    setActiveButton(key);
    setBgImage(images[key]);
  }
  return (
    <div className="container mx-auto px-4">
      <div className="2xl:px-[120px] gap-5 2xl:py-20 lg:py-10 flex lg:flex-row flex-col lg:gap-7">
        <NavLink to="/beginners" className="w-full">
          <div className="bg-yellow-300 2xl:h-[550px] 2xl:px-16 py-4 2xl:py-12 rounded-md cursor-pointer hover:scale-y-105 hover:scale-x-105 transition-transform duration-500 origin-bottom hover:bg-yellow-400">
            <div className="text-center text-sm xl:text-lg font-semibold">
              For Beginners
            </div>
            <div className="lg:py-3 text-xl py-1.5 text-center 2xl:text-3xl font-bold">
              <h1>Launch Your First Website</h1>
            </div>
            <div className="2xl:py-8 py-3 flex justify-center">
              <img src={photo1} alt="photo" className="lg:h-44 h-36" />
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
        </NavLink>
        <NavLink to="/marketers" className="w-full">
          <div className="bg-lime-300 2xl:h-[550px] 2xl:px-16 py-4 2xl:py-12 rounded-md cursor-pointer hover:scale-y-105 hover:scale-x-105 transition-transform duration-500 origin-bottom hover:bg-lime-400">
            <div className="text-center text-sm 2xl:text-lg font-semibold">
              For Marketers
            </div>
            <div className="lg:py-3 text-xl py-1.5 text-center 2xl:text-3xl font-bold">
              <h1>Create Leads and Conversions</h1>
            </div>
            <div className="2xl:py-8 py-3 flex justify-center">
              <img src={photo2} alt="photo" className="lg:h-44 h-36" />
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
        </NavLink>
        <NavLink to="/professionals" className="w-full">
          <div className="bg-sky-300 2xl:h-[550px] 2xl:px-16 py-4 lg:py-5 2xl:py-12 rounded-md cursor-pointer hover:scale-y-105 hover:scale-x-105 transition-transform duration-500 origin-bottom hover:bg-sky-400">
            <div className="text-center text-sm 2xl:text-lg font-semibold">
              For Professionals
            </div>
            <div className="2xl:py-3 text-xl py-1.5 text-center 2xl:text-3xl font-bold">
              <h1>Take Projects To Next Level</h1>
            </div>
            <div className="2xl:py-8 py-3 flex justify-center">
              <img src={photo3} alt="photo" className="lg:h-44 h-36" />
            </div>
            <div className="flex justify-center gap-1.5 py-2 text-sm">
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
        </NavLink>
      </div>
      <div className="2xl:px-[120px] 2xl:py-16 py-8">
        <div className="flex justify-center">
          <img src={logo} alt="" className="xl:h-20 lg:h-16 h-10" />
        </div>
        <div className="flex justify-center lg:py-5 py-2">
          <h1 className="xl:text-5xl lg:text-3xl font-bold">
            Design Anything, Build Everything
          </h1>
        </div>
        <div className="flex justify-center xl:py-2">
          <h2 className="xl:text-xl text-sm text-gray-700 text-justify">
            Design and launch your wesbite fast & no coding knowledge is
            required.
          </h2>
        </div>
      </div>
      <div className="xl:px-[120px] md xl:py-5 flex md:flex-row md:justify-center md:gap-10 flex-col">
        <div className="md:flex md:flex-col grid grid-cols-3 gap-1.5 xl:gap-3 xl:w-1/4 pb-3">
          {[
            { key: "live", label: "Live Visual Builder", icon: <FaFileCode /> },
            {
              key: "layout",
              label: "Layout Builder",
              icon: <TbLayoutFilled />,
            },
            {
              key: "header",
              label: "Header Builder",
              icon: <RiLayoutTopFill />,
            },
            { key: "mega", label: "Mega Menu", icon: <ImNewspaper /> },
            {
              key: "footer",
              label: "Footer Builder",
              icon: <RiLayoutBottomFill />,
            },
            { key: "form", label: "Form Builder", icon: <SiTask /> },
            { key: "canvas", label: "Off Canvas", icon: <RiTodoFill /> },
            {
              key: "setup",
              label: "Setup Wizard",
              icon: <ImCheckboxChecked />,
            },
            {
              key: "performance",
              label: "Performance Wizard",
              icon: <GrTasks />,
            },
          ].map(({ key, label, icon }) => (
            <button
              key={key}
              className={`xl:py-3 xl:px-5 lg:px-2 py-2 px-1 xl:w-64 lg:text-lg xl:text-xl text-[8px] lg:gap-1.5 font-semibold flex items-center gap-0.5 rounded-sm lg:rounded-md hover:bg-gray-100 ${
                activeButton === key ? "bg-gray-100" : "bg-white"
              }`}
              onClick={() => handleClick(key)}
            >
              {label}
              <div>{icon}</div>
            </button>
          ))}
        </div>
        <div
          className="xl:h-[600px] lg:h-[500px] md:h-[300px] md:w-3/4 h-48 rounded-md"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            transition: "background 0.3s ease-in-out",
          }}
        ></div>
      </div>
      <div className="xl:px-[120px] lg:py-28 py-16">
        <div className="text-center">
          <h1 className="lg:text-5xl text-xl font-bold py-1 lg:py-3">
            All-In-One Website Builder
          </h1>
          <p className="lg:mt-7 lg:text-xl mt-3 text-sm text-gray-600">
            Experience total control over your website creation process.
          </p>
        </div>
        <div className="lg:py-16 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img src={prebuilt} alt="" className="lg:h-52 h-24" />
              </div>
              <h1 className="lg:text-2xl text-sm font-semibold py-1 lg:py-3">
                109 Prebuilt Websites
              </h1>
              <div className="text-gray-600 text-xs text-justify lg:text-center lg:text-[16px] lg:px-5 lg:leading-relaxed">
                <p>
                  Prebuilt websites are designed to save you time. Import with a
                  few clicks & customize it to suit your requirements.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img src={design} alt="" className="lg:h-52 h-24" />
              </div>
              <h1 className="lg:text-2xl text-sm font-semibold py-1 lg:py-3">
                120+ Design Elements
              </h1>
              <div className="text-gray-600 text-xs text-justify lg:text-center lg:text-[16px] lg:px-5 lg:leading-relaxed">
                <p>
                  Packed with options, they are highly flexible for any design &
                  for any purpose. The only limit is your imagination.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img src={performance} alt="" className="lg:h-52 h-24" />
              </div>
              <h1 className="lg:text-2xl text-sm font-semibold py-1 lg:py-3">
                Built For Performance
              </h1>
              <div className=" text-gray-600 text-justify  lg:text-center text-xs lg:text-[16px] lg:px-5 lg:leading-relaxed">
                <p>
                  Experience total control of your website's features that will
                  empower you to make superor performance-related decisions.
                </p>
              </div>
            </div>
            <div className="text-center lg:mt-5">
              <div className="flex items-center justify-center">
                <img src={dynamic} alt="" className="lg:h-48 h-24" />
              </div>
              <h1 className="lg:text-2xl text-sm font-semibold py-1 lg:py-3">
                Mobile Friedly
              </h1>
              <div className="text-gray-600 text-xs text-justify lg:text-center lg:text-[16px] lg:px-5 lg:leading-relaxed">
                <p>
                  Nirvanta is 100% fluid & responsive across all device types,
                  from mobile to desktop & tablets, with no compromise.
                </p>
              </div>
            </div>
            <div className="text-center lg:mt-5">
              <div className="flex items-center justify-center">
                <img src={content} alt="" className="lg:h-48 h-24" />
              </div>
              <h1 className="lg:text-2xl text-sm font-semibold py-1 lg:py-3">
                Dynamic Content
              </h1>
              <div className="text-gray-600 text-xs text-justify lg:text-center lg:text-[16px] lg:px-5 lg:leading-relaxed">
                <p>
                  Build unique pages & post layouts for your website by
                  harnessing the power of Nirvanta's dynamic content
                  functionality.
                </p>
              </div>
            </div>
            <div className="text-center lg:mt-5">
              <div className="flex items-center justify-center">
                <img src={shopping} alt="" className="lg:h-48 h-24" />
              </div>
              <h1 className="lg:text-2xl text-sm font-semibold py-1 lg:py-3">
                Online Store Builder
              </h1>
              <div className=" text-gray-600 text-xs text-justify lg:text-center lg:text-[16px] lg:px-5 lg:leading-relaxed">
                <p>
                  Nirvanta is integrated with WooCommerce, allowing you to build
                  successful online stores to sell anything online.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center lg:gap-2 lg:text-xl text-xs gap-1 font-semibold text-white bg-zinc-800 lg:px-6 px-3 py-3 rounded-md hover:bg-black">
            Discover More
            <FaArrowRight />
          </button>
        </div>
      </div>
      <hr />
      <div className="lg:py-20 py-10 xl:px-[120px]">
        <div className="text-center">
          <div className="flex lg:gap-2 gap-1 items-center justify-center lg:flex-col">
            <h1 className="lg:text-5xl text-[15px] font-semibold lg:font-bold text-zinc-800">
              1,000+ Website Owners
            </h1>
            <h1 className="lg:text-5xl text-[15px] font-semibold lg:font-bold text-zinc-800 py-2">
              Trust Nirvanta
            </h1>
          </div>
          <p className="lg:py-6 py-1 lg:text-xl text-[10px] text-zinc-600">
            The #1 selling Website Builder on Themeforest for 12+ years.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:py-14 py-5">
          <div className="">
            <div className="flex justify-center">
              <img src={logo1} alt="logo" className="lg:h-20 h-10" />
            </div>
            <div className="text-center lg:py-5">
              <h1 className="py-3 font-semibold lg:text-xl">
                World-Class Support
              </h1>
              <div className="text-zinc-600 text-xs lg:text-[16px] lg:leading-relaxed">
                <p>
                  We build long-term professional relationships with our
                  custimers that you can rely on & trust.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img src={logo2} alt="logo" className="lg:h-20 h-10" />
            </div>
            <div className="text-center lg:py-5">
              <h1 className="py-3 lg:text-xl font-semibold">
                Documentation & Tutorials
              </h1>
              <div className="text-zinc-600 text-xs lg:text-[16px] lg:leading-relaxed">
                <p>
                  Over 550 help files & 200 tutorial videos will make building
                  websites with Nirvants even easier and faster.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img src={logo3} alt="logo" className="lg:h-20 h-10" />
            </div>
            <div className="text-center lg:py-5">
              <h1 className="py-3 lg:text-xl font-semibold">
                100% Built In-House
              </h1>
              <div className="text-zinc-600 text-xs lg:text-[16px] lg:leading-relaxed">
                <p>
                  Nirvanta is not reliant on 3rd party tools to deliver a
                  reliable & stable website building experience.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img src={logo4} alt="logo" className="lg:h-20 h-10" />
            </div>
            <div className="text-center lg:py-5">
              <h1 className="py-3 lg:text-xl font-semibold">
                Free Lifetime Updates
              </h1>
              <div className="text-zinc-600 text-xs lg:text-[16px] lg:leading-relaxed">
                <p>
                  Your website will receive free & regular updates, compatible
                  with industry standards & trends, for life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="2xl:px-[120px]">
        <div className="bg-lime-400 lg:h-[500px] rounded-md flex flex-col-reverse lg:flex-row">
          <div className="lg:ml-20 lg:py-28 lg:w-1/2">
            <div className="lg:text-5xl text-2xl lg:text-start font-bold text-zinc-800 text-center">
              <h1>Build Successful</h1>
              <h1 className="lg:py-3">Websites With Nirvanta</h1>
            </div>
            <div className="py-3 lg:text-xl lg:text-start text-zinc-700 px-2 text-justify">
              <p>
                Whether your are a beginner, marketer, or professional, Nirvanta
                has the tools & resources you can rely on to succeed.
              </p>
            </div>
            <div className="lg:py-8 py-2 flex lg:justify-start justify-center">
              <button className="bg-zinc-800 lg:py-3 lg:px-6 gap-1.5 flex items-center text-sm py-2 px-4 lg:text-xl text-gray-100 rounded-md hover:bg-black ease-in-out duration-300">
                Join Now <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="relative p-10 lg:w-1/2">
            <img
              src={image1}
              alt="photo"
              className="lg:mr-10 rounded-md h-full object-cover"
            />
            <div className="absolute right-2 bottom-[10%]">
              <img
                src={image2}
                alt="photo2"
                className="lg:h-40 lg:w-40 h-20 w-20 rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
