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
import PageEnd from "./PageEnd";
import video from "../assets/video.jpg";
import document from "../assets/document.jpg";

export default function Beginners() {
  return (
    <div>
      <div className="h-[680px] bg-yellow-300 flex">
        <div className="h-full w-3/6">
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
          <div className="pt-4">
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
      </div>
      <div className="relative w-full h-auto">
        <div className="relative w-full z-10">
          <img src={banner} alt="photo" className="w-full" />
        </div>
        <div className="absolute w-full px-[120px] h-auto bg-yellow-50 z-0 top-[200px]">
          <div className="pt-64 text-center">
            <h1 className="text-5xl font-bold text-gray-800">
              What Is Nirvanta?
            </h1>
            <div className="py-8 text-xl text-gray-700 flex flex-col gap-2">
              <p>
                Nirvanta is a WordPress Website Builder with an award winning
                history of providing reliable &
              </p>
              <p>intuitive design tools to individuals of all skill levels.</p>
            </div>
          </div>
          <div className="flex gap-8 py-20 text-center">
            <div className="w-1/3">
              <div className="h-64 flex justify-center items-center">
                <img src={wordpress} alt="wordpress" />
              </div>
              <div className="py-8">
                <h1 className="text-2xl mb-2 font-semibold">
                  Based On WordPress
                </h1>
                <div className="text-zinc-600">
                  <p>The #1 Content Management System, powering</p>
                  <p>40% of the entire internet.</p>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="h-64">
                <img src={design} alt="design" />
              </div>
              <div className="py-8">
                <h1 className="text-2xl mb-2 font-semibold">
                  Creative Freedom
                </h1>
                <div className="text-zinc-600">
                  <p>To design any style of website, with the only limit</p>
                  <p>being your imagination.</p>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="h-64 flex items-center">
                <img src={prebuilt} alt="prebuilt" />
              </div>
              <div className="py-8">
                <h1 className="text-2xl mb-2 font-semibold">
                  108 Prebuilt Websites
                </h1>
                <div className="text-zinc-600">
                  <p>Built to save you time. Designed with usability &</p>
                  <p>flexibility in mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full z-10 top-[850px] py-32 px-[120px]">
          <div className="text-center">
            <h1 className="pb-8 text-5xl font-bold text-zinc-800">
              Why Choose Nirvanta?
            </h1>
            <div className="text-xl text-zinc-600">
              <p>
                Nirvanta is an intuitive, reliable, mobile-friendly website
                building solution with extensive resources
              </p>
              <p>
                and a world-class support team. We are invested in what matters
                most to you, your vision.
              </p>
            </div>
          </div>
          <div className="py-20 flex gap-14 rounded-md">
            <div className="bg-yellow-200 w-1/3 py-7 px-6 text-center rounded-md">
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
            <div className="w-2/3 px-16 py-16 bg-gray-50 flex">
              <div className="w-2/5">
                <div className="text-3xl font-bold flex flex-col gap-1.5 text-zinc-800">
                  <h1>No Coding</h1>
                  <h1>Knowledge</h1>
                  <h1>Required</h1>
                </div>
                <div className="pt-8 text-zinc-700">
                  <p>Intuitive & infinitely flexible, you</p>
                  <p>can build any type of website,</p>
                  <p>with the only limit being your</p>
                  <p>imagination.</p>
                </div>
              </div>
              <div className="w-3/5">
                <img src={website} alt="design" />
              </div>
            </div>
          </div>
          <div className="flex text-center">
            <div className="w-1/3">
              <div className="flex justify-center items-center">
                <img src={launch} alt="layout" className="h-52" />
              </div>
              <div className="pt-6 pb-3 text-2xl font-semibold">
                <h1>Launch Your Website</h1>
                <h1>Online, Fast</h1>
              </div>
              <p className="text-zinc-600">
                Save time with the Avada Website Builder.
              </p>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center items-center">
                <img src={layout} alt="layout" className="h-52" />
              </div>
              <div className="pt-6 pb-3 text-2xl font-semibold">
                <h1>Intuitive Visual</h1>
                <h1>Drag & Drop Builder</h1>
              </div>
              <p className="text-zinc-600">
                User friendly & highly customizable.
              </p>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center items-center">
                <img src={store} alt="store" className="h-52" />
              </div>
              <div className="pt-6 pb-3 text-2xl font-semibold">
                <h1>Setup An Online Store</h1>
                <h1>With A Few Clicks</h1>
              </div>
              <p className="text-zinc-600 p">
                Seamless integration with WooCommerce.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full z-10 top-[680px] py-32">
          <hr />
          <div className="py-28 px-[120px]">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-bold mb-7">Nirvanta Setup Wizard</h1>
              <p className="text-xl text-zinc-600">
                A step-by-step website setup wizard that makes it easy to
                generate websites on the fly and fast.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="w-1/3 bg-gray-100 py-7 px-10 rounded-md text-center">
                <div className="h-40 flex items-center justify-center">
                  <img src={setup1} alt="setup1" />
                </div>
                <div className="text-2xl font-semibold mt-6 mb-4">
                  <h1>Build A Website From</h1>
                  <h1>Scratch With Ease</h1>
                </div>
                <div className="text-zinc-600">
                  <p>The Avada step-by-step setup wizard</p>
                  <p>makes it easy for you to generate</p>
                  <p>websites on the fly, and fast.</p>
                </div>
              </div>
              <div className="w-1/3 bg-gray-100 py-7 px-10 rounded-md text-center">
                <div className="h-40 flex items-center justify-center">
                  <img src={setup2} alt="setup2" />
                </div>
                <div className="text-2xl font-semibold mt-6 mb-4">
                  <h1>Choose The Content And</h1>
                  <h1>Layouts You Prefer</h1>
                </div>
                <div className="text-zinc-600">
                  <p>Choose layouts, import content,</p>
                  <p>activate extended features and launch</p>
                  <p>your website.</p>
                </div>
              </div>
              <div className="w-1/3 bg-gray-100 py-7 rounded-md px-10 text-center">
                <div className="h-40 flex items-center justify-center">
                  <img src={setup3} alt="setup3" />
                </div>
                <div className="text-2xl font-semibold mt-6 mb-4">
                  <h1>Choose A Color Palette &</h1>
                  <h1>Typography Set</h1>
                </div>
                <div className="text-zinc-600">
                  <p>Choose from predefined color palettes</p>
                  <p>and typography sets to style your</p>
                  <p>website.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 px-[180px] flex">
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="text-5xl font-bold">Nirvanta Studio</h1>
              <div className="py-8 text-[18px] text-zinc-600">
                <p>Expansive library of multi-use content designed</p>
                <p>professionally to speed up your workflow. Get a head</p>
                <p>start with prebuilt headers to footers, containers to</p>
                <p>elements, and everythinh in between.</p>
              </div>
              <div>
                <button className="flex items-center gap-4">
                  <p className="underline text-[18px] font-semibold">
                    Explore Prebuilt Content
                  </p>
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="w-1/2 mt-16 h-[400px] object-cover">
              <img src={bgphoto} alt="bg" className="h-full rounded-t-md" />
            </div>
          </div>
          <div className="px-[120px] py-32 flex gap-16">
            <div className="w-2/3 bg-gray-100 flex justify-evenly items-center h-[400px] rounded-md">
              <div>
                <h1 className="text-3xl font-bold mb-5">Mobile Ready</h1>
                <div className="text-zinc-700">
                  <p>Nirvanta is 100% fluid & responsive</p>
                  <p>across all device types, from</p>
                  <p>mobile to desktop & tablets.</p>
                </div>
              </div>
              <div>
                <img src={dynamic} alt="dynamic" className="h-52" />
              </div>
            </div>
            <div className="w-1/3 bg-amber-200 rounded-md text-center flex flex-col justify-center gap-2">
              <div className="flex justify-center text-8xl">
                <CiCircleCheck />
              </div>
              <div className="font-semibold">
                <h1>No reliance on 3rd party Builders</h1>
                <h1>or external tools.</h1>
              </div>
              <div className="flex justify-center text-8xl">
                <CiCircleCheck />
              </div>
              <div className="font-semibold">
                <h1>No hidden fees or additional</h1>
                <h1>purchases are required.</h1>
              </div>
            </div>
          </div>
          <div className="px-[120px] flex justify-evenly">
            <div className="text-center w-1/3">
              <div className="flex items-center justify-center">
                <img src={clients} alt="" className="h-64" />
              </div>
              <h1 className="py-4 text-2xl font-semibold">
                World-Class Support
              </h1>
              <div className="text-zinc-600">
                <p>We build long-term professional</p>
                <p>relationships with our customers that you</p>
                <p>can rely on & trust.</p>
              </div>
            </div>
            <div className="text-center w-1/3">
              <div className="flex items-center justify-center">
                <img src={document} alt="" className="h-64" />
              </div>
              <h1 className="py-4 text-2xl font-semibold">Documentation</h1>
              <div className="text-zinc-600">
                <p>Comprehensive & detailed, the library of help</p>
                <p>files will make building websites with Nirvanta</p>
                <p>even easier.</p>
              </div>
            </div>
            <div className="text-center w-1/3">
              <div className="flex items-center justify-center">
                <img src={video} alt="" className="h-64" />
              </div>
              <h1 className="py-4 text-2xl font-semibold">Video Tutorials</h1>
              <div className="text-zinc-600">
                <p>An extensive library of YouTube videos that</p>
                <p>provide insight & detailed steps on how to get</p>
                <p>the best out of Nirvanta.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-[590px] z-10 mt-20">
          <PageEnd />
        </div>
      </div>
    </div>
  );
}
