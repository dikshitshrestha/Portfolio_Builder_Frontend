import React from "react";
import desktop from "../assets/desktop.jpg";
import { FaArrowRight } from "react-icons/fa6";
import siteground from "../assets/siteground.png";
import purchase from "../assets/purchase.png";
import code from "../assets/code.png";
import signup from "../assets/signup.png";
import siteweb from "../assets/siteweb.png";
import custom from "../assets/custom.png";
import wp from "../assets/wpengine.png";
import wpengine from "../assets/wp.png";
import PageEnd from "./PageEnd.jsx";

export default function Hosting() {
  return (
    <div>
      <div className="h-[550px] flex">
        <div className="w-1/2">
          <img src={desktop} alt="desktop" className="h-full object-cover" />
        </div>
        <div className="w-1/2 h-full bg-amber-300 px-20 py-24">
          <h1 className="text-[18px] font-semibold text-zinc-800">
            Special Nirvanta Hosting
          </h1>
          <div className="text-5xl font-bold pt-3 text-zinc-800">
            <h1>High-Performance</h1>
            <h1>WordPress Hosting</h1>
          </div>
          <div className="text-[18px] py-9 text-zinc-800 flex flex-col gap-1.5">
            <p>We have partnered with SiteGround to bring you full-</p>
            <p>service WordPress hosting for all types of Nirvanta websites.</p>
            <p className="font-semibold">Starting from $1.99 /mo.</p>
          </div>
          <div>
            <button className="flex text-[18px] font-semibold items-center gap-3 py-4 px-7 bg-zinc-800 text-white rounded-md hover:bg-black ease-in-out duration-300">
              Sign Up Now - Up To 85% Off <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="py-32">
        <div>
          <div className="flex justify-center">
            <img src={siteground} alt="" />
          </div>
          <h1 className="text-5xl py-10 text-center font-bold text-zinc-800">
            Premium WordPress Hosting Solutions
          </h1>
          <div className="py-16 flex text-center items-center justify-evenly">
            <div>
              <div className="h-52">
                <img src={purchase} alt="purchase" className="h-full" />
              </div>
              <div className="text-2xl font-semibold py-7">
                <h1>Purchase Nirvanta on</h1>
                <h1>Themeforest</h1>
              </div>
            </div>
            <div>
              <div className="h-52">
                <img src={signup} alt="purchase" className="h-full" />
              </div>
              <div className="text-2xl font-semibold py-7">
                <h1>Click To Sign Up</h1>
                <h1>For Hosting</h1>
              </div>
            </div>
            <div>
              <div className="h-52">
                <img src={code} alt="code" className="h-full" />
              </div>
              <div className="text-2xl font-semibold py-7">
                <h1>Enter The Purchase Code</h1>
                <h1>to Activate Nirvanta</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[200px] py-14 flex h-[700px]">
          <div className="w-1/2 flex items-center">
            <div>
              <h1 className="text-3xl font-bold text-zinc-800">
                Nirvanta Installed With 1-Click
              </h1>
              <div className="py-5 text-[18px] text-zinc-700">
                <p>Nirvanta’s Live Design Interface gives you complete</p>
                <p>creative freedom, allowing for an intuitive workflow that</p>
                <p>will empower you to create any website style of choice.</p>
                <p>The only limit is your imagination.</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={siteweb}
              alt=""
              className="rounded-md border-solid border-black border-2"
            />
          </div>
        </div>
        <div className="px-[150px] flex ">
          <div className="w-1/2">
            <img
              src={custom}
              alt="custom"
              className="rounded-md border-solid border-black border-2"
            />
          </div>
          <div className="w-1/2 flex items-center">
            <div className="pl-20">
              <h1 className="text-3xl font-bold text-zinc-800">
                Start Customizing Your Website
              </h1>
              <div className="py-5 text-[18px] text-zinc-700">
                <p>More than just a Website Builder, Nirvanta is a set of</p>
                <p>intuitive workflow tools that gives you complete</p>
                <p>creative control and gives you the confidence to design</p>
                <p>and build websites like a professional.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-28 text-center">
          <div className="flex justify-center">
            <button className="flex items-center text-xl text-center font-semibold gap-3 w-[364px] bg-zinc-800 py-4 px-7 text-white rounded-md hover:bg-black ease-in-out duration-300">
              Sign Up For Hosting - 85% Off <FaArrowRight />
            </button>
          </div>
          <h1 className="pt-5">
            * Hosting offer valid for existing Avada customers only; Avada
            purchase required. Terms and Conditions apply.
          </h1>
        </div>
      </div>
      <div className="px-[120px] bg-sky-100 py-28 flex items-center">
        <div className="flex flex-col gap-10 w-1/2">
          <div className="bg-white w-52 py-3 px-6 h-16 flex items-center rounded-md border-solid border-black border-2">
            <img src={wp} alt="wp" />
          </div>
          <div className="text-5xl font-bold text-zinc-800">
            <h1>High-Performance</h1>
            <h1>WordPress Hosting</h1>
          </div>
          <div className="text-[18px] text-zinc-600">
            <p>
              WP Engine is the leading WordPress digital experience platform at
            </p>
            <p>
              the intersection of software innovation and service. They provide
            </p>
            <p>
              the perfect platform for brands to create remarkable sites and
            </p>
            <p>apps on WordPress, that drive businesses forward faster.</p>
          </div>
          <div>
            <button className="flex items-center gap-3 text-xl font-semibold bg-zinc-800 py-3 px-7 text-white rounded-md hover:bg-black ease-in-out duration-300">
              Sign Up For Hosting - 20% Off <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={wpengine}
            alt="wpengine"
            className="rounded-md border-solid border-black border-2"
          />
        </div>
      </div>
      <PageEnd />
    </div>
  );
}
