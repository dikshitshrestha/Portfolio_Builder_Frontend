import React from "react";
import desktop from "../assets/desktop.jpg";
import { FaArrowRight } from "react-icons/fa6";
import siteground from "../assets/siteground.png";
import purchase from "../assets/purchase.png";
import code from "../assets/code.png";
import signup from "../assets/signup.png";
import siteweb from "../assets/siteweb.png";
import custom from "../assets/custom.png";
import wpengine from "../assets/wp.png";

export default function Hosting() {
  return (
    <div className="container mx-auto">
      <div className="lg:h-[550px] flex lg:flex-row flex-col ">
        <div className="lg:w-1/2">
          <img src={desktop} alt="desktop" className="h-full object-cover" />
        </div>
        <div className="lg:w-1/2 h-full bg-amber-300 lg:px-8 flex flex-col justify-center xl:px-20 px-6 py-8 xl:py-24">
          <h1 className="lg:text-[18px] text-sm font-semibold text-zinc-800">
            Special Nirvanta Hosting
          </h1>
          <div className="lg:text-5xl text-xl gap-1 font-bold py-3 lg:py-7 text-zinc-800">
            <h1>High-Performance</h1>
            <h1>WordPress Hosting</h1>
          </div>
          <div className="lg:text-[18px] text-zinc-800 lg:pr-20 lg:pb-2 lg:leading-relaxed flex flex-col gap-1.5 text-justify">
            <p>
              We have partnered with SiteGround to bring you full-service
              WordPress hosting for all types of Nirvanta websites.
            </p>
            <p className="font-semibold">Starting from $1.99 /mo.</p>
          </div>
          <div className="pt-6 flex justify-center lg:justify-start">
            <button className="flex lg:text-[18px] text-xs font-semibold items-center gap-3 py-4 px-7 bg-zinc-800 text-white rounded-md hover:bg-black ease-in-out duration-300">
              Sign Up Now - Up To 85% Off <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:py-32 py-16">
        <div>
          <div className="flex justify-center">
            <img src={siteground} alt="" />
          </div>
          <h1 className="lg:text-5xl lg:py-10 py-5 text-center font-bold text-zinc-800">
            Premium WordPress Hosting Solutions
          </h1>
          <div className="lg:py-16 flex lg:flex-row flex-col text-center items-center justify-evenly xl:px-[100px]">
            <div>
              <div className="lg:h-52 h-20 flex justify-center items-center">
                <img src={purchase} alt="purchase" className="h-full" />
              </div>
              <div className="lg:text-2xl font-semibold lg:py-7 text-sm py-2">
                <h1 className="xl:px-20">Purchase Nirvanta on Themeforest</h1>
              </div>
            </div>
            <div className="py-8">
              <div className="lg:h-52 h-20 flex justify-center items-center">
                <img src={signup} alt="purchase" className="h-full" />
              </div>
              <div className="lg:text-2xl font-semibold lg:py-7 text-sm py-2">
                <h1 className="xl:px-20">Click To Sign Up For Hosting</h1>
              </div>
            </div>
            <div>
              <div className="lg:h-52 h-20 flex justify-center items-center">
                <img src={code} alt="code" className="h-full" />
              </div>
              <div className="lg:text-2xl font-semibold lg:py-7 text-sm py-2">
                <h1 className="xl:px-20">
                  Enter The Purchase Code to Activate Nirvanta
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:px-[200px] lg:px-10 py-14 flex flex-col-reverse lg:flex-row lg:items-center lg:h-[700px]">
          <div className="lg:w-1/2 flex items-center">
            <div>
              <h1 className="lg:text-3xl py-2 lg:py-0 lg:text-start text-center font-bold text-zinc-800">
                Nirvanta Installed With 1-Click
              </h1>
              <div className="lg:py-5 lg:text-[18px] lg:pr-20 text-justify lg:leading-relaxed lg:px-0 px-2 text-sm text-zinc-700">
                <p>
                  Nirvanta’s Live Design Interface gives you complete creative
                  freedom, allowing for an intuitive workflow that will empower
                  you to create any website style of choice. The only limit is
                  your imagination.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-[500px] flex justify-center">
            <img
              src={siteweb}
              alt=""
              className="rounded-md border-solid border-black border-2 h-52 lg:h-full"
            />
          </div>
        </div>
        <div className="xl:px-[150px] lg:px-10 flex lg:flex-row flex-col">
          <div className="lg:w-1/2 lg:h-[500px] flex justify-center">
            <img
              src={custom}
              alt="custom"
              className="rounded-md border-solid border-black border-2 lg:h-full h-40"
            />
          </div>
          <div className="lg:w-1/2 flex items-center">
            <div className="lg:pl-10">
              <h1 className="lg:text-3xl font-bold text-zinc-800 text-center py-2 lg:py-0">
                Customize Your Website
              </h1>
              <div className="lg:py-5 lg:text-[18px] text-sm text-zinc-700 px-2 lg:px-10 lg:leading-relaxed">
                <p>
                  More than just a Website Builder, Nirvanta is a set of
                  intuitive workflow tools that gives you complete creative
                  control and gives you the confidence to design and build
                  websites like a professional.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pt-28 text-center">
          <div className="flex justify-center py-6">
            <button className="flex items-center lg:text-xl text-xs text-center font-semibold gap-3 lg:w-[364px] bg-zinc-800 py-4 px-7 text-white rounded-md hover:bg-black ease-in-out duration-300">
              Sign Up For Hosting - 85% Off <FaArrowRight />
            </button>
          </div>
          <h1 className="text-xs lg:text-sm">
            * Hosting offer valid for existing Avada customers only; Avada
            purchase required. Terms and Conditions apply.
          </h1>
        </div>
      </div>
      <div className="xl:px-[120px] lg:px-10 bg-sky-100 lg:py-28 px-4 py-10 flex lg:flex-row flex-col-reverse items-center">
        <div className="flex flex-col lg:gap-10 gap-4 lg:w-1/2">
          <div className="lg:text-5xl font-bold text-zinc-800 pt-6">
            <h1>High-Performance WordPress Hosting</h1>
          </div>
          <div className="lg:text-[18px] text-sm lg:pr-28 lg:leading-relaxed text-zinc-600 text-justify">
            <p>
              WP Engine is the leading WordPress digital experience platform at
              the intersection of software innovation and service. They provide
              the perfect platform for brands to create remarkable sites and
              apps on WordPress, that drive businesses forward faster.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center gap-3 text-xs lg:text-xl font-semibold bg-zinc-800 py-3 px-7 text-white rounded-md hover:bg-black ease-in-out duration-300">
              Sign Up For Hosting - 20% Off <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={wpengine}
            alt="wpengine"
            className="rounded-md border-solid border-black border-2 h-60 lg:h-full lg:w-full"
          />
        </div>
      </div>
    </div>
  );
}
