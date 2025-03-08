import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import marketer from "../assets/marketers.jpg";
import { GiMoebiusTriangle } from "react-icons/gi";
import { RiLayout4Fill } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import nirvanta from "../assets/nirvanta.png";
import nir1 from "../assets/nir1.png";
import nir2 from "../assets/nir2.png";
import support from "../assets/customers.jpg";
import prebuilt from "../assets/prebuilt.png";
import coding from "../assets/Website1.png";
import website from "../assets/store.png";
import canvas from "../assets/canvas.png";
import form from "../assets/form.png";
import plug from "../assets/plugins.png";
import performance from "../assets/performance.png";
import mobile from "../assets/Dynamic.png";
import language from "../assets/language.png";
import seo from "../assets/seo.png";
import motion from "../assets/motion.png";
import bgphoto from "../assets/bg.jpg";

export default function Marketers() {
  return (
    <div>
      <div className="lg:h-[580px] flex lg:flex-row flex-col">
        <div className="lg:w-1/2 h-full">
          <img
            src={marketer}
            alt="marketer"
            className="h-full object-cover w-full"
          />
        </div>
        <div className="lg:w-1/2 h-full lg:py-28 py-8 px-4 lg:px-24 flex flex-col gap-2 lg:gap-6 bg-lime-300">
          <h1 className="text-sm lg:text-xl font-semibold">
            Nirvanta Is For Marketers
          </h1>
          <div className="lg:text-6xl text-xl lg:pr-20 font-bold text-zinc-800">
            <h1>Generate Leads & Conversions</h1>
          </div>
          <div className="lg:text-xl text-sm py-3">
            <p>
              Design & build branded websites, including targeted content
              layouts, thta perfectly align with you inbound marketing
              startegies.
            </p>
          </div>
          <div className="flex lg:justify-start justify-center">
            <button className="flex items-center gap-1.5 lg:text-xl text-xs font-semibold text-white bg-zinc-800 py-4 px-7 rounded-md hover:bg-black ease-in-out duration-300">
              Join Nirvanta Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row lg:px-[120px] flex-col justify-evenly text-center lg:py-28 py-16 gap-12">
        <div>
          <div className="flex items-center justify-center text-4xl lg:pb-5 pb-2">
            <GiMoebiusTriangle />
          </div>
          <h1 className="text-2xl  font-semibold">Design Freedom</h1>
          <div className="text-zinc-700 lg:py-5 py-3 text-justify px-2">
            <p>
              Design unique websites & content that aligns with your marketing
              goals to convert leads into sales
            </p>
          </div>
          <div>
            <a href="#" className="text-[18px] font-semibold underline">
              Take Control Over Desgin
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center text-4xl lg:pb-5 pb-2">
            <RiLayout4Fill />
          </div>
          <h1 className="text-2xl font-semibold">Create Any Website, Fast!</h1>
          <div className="text-zinc-700 lg:py-5 py-3 text-justify px-2">
            <p>
              Nirvanta is highly flexible, with an intuitive Drag & Drop
              Interface that gives you absolute design control.
            </p>
          </div>
          <a href="#" className="text-[18px] font-semibold underline">
            Build Custom Website
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center text-4xl lg:pb-5 pb-2">
            <MdOutlineAddShoppingCart />
          </div>
          <h1 className="text-2xl font-semibold">Launch Websites That Sell</h1>
          <div className="text-zinc-700 lg:py-5 py-3 text-justify px-2">
            <p>
              Set up and online store with only a few clicks, & customize the
              storefront & product layouts with ease.
            </p>
          </div>
          <a href="#" className="text-[18px] font-semibold underline">
            Grow Your Business
          </a>
        </div>
      </div>
      <div className="bg-lime-100 py-16 lg:py-28 lg:px-[170px]">
        <div className="text-center">
          <h1 className="lg:text-5xl font-bold text-zinc-800">
            Design Freedom
          </h1>
          <div className="lg:text-[18px] lg:text-center lg:mt-7 mt-3 text-sm text-justify px-2 text-zinc-600">
            <p>
              You have total control over the creative process to elevate the
              website’s brand message above the competition.
            </p>
          </div>
        </div>
        <div className="text-center lg:py-16 py-6">
          <div className="lg:h-[800px] h-52 px-2">
            <img
              src={nirvanta}
              alt="nirvanta"
              className="h-full object-cover w-full rounded-2xl border-solid border-4 border-black"
            />
          </div>
        </div>
        <div className="lg:py-14 py-7">
          <h1 className="text-center lg:text-3xl font-bold text-zinc-800">
            Visual Drag & Drop Website Builder
          </h1>
          <div className="text-justify lg:text-center lg:text-[18px] px-2 text-sm text-zinc-600 lg:py-5 py-3">
            <p>
              Nirvanta’s visual workflow & layout options will give you the
              confidence to manage your website’s content on the fly.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col text-center justify-evenly gap-12">
          <div className="flex flex-col lg:gap-5 gap-2">
            <div className="lg:h-[380px] h-52 flex justify-center">
              <img src={nir1} alt="nirvanta" className="h-full" />
            </div>
            <h1 className="lg:text-2xl font-semibold">
              120+ Design & Layout Elements
            </h1>
            <div className="lg:text-[17px] lg:text-center text-justify px-2 text-sm">
              <p>
                Tools that make it possible for you to convey your brands’
                message accurately & no coding knowledge is required.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:gap-5 gap-2">
            <div className="lg:h-[380px] h-52 flex justify-center">
              <img src={nir2} alt="nirvanta" className="h-full" />
            </div>
            <h1 className="lg:text-2xl font-semibold">
              Design Anything & Build Everything
            </h1>
            <div className="lg:text-[17px] lg:text-center text-justify px-2 text-sm">
              <p>
                Align your website with your inbound marketing strategy & turn
                potential customers into repeat customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-14 lg:px-[120px]">
        <div className="text-center">
          <h1 className="lg:text-5xl text-xl font-bold text-zinc-800">
            Create Any Website, Fast!
          </h1>
          <div className="lg:pt-8 py-2 lg:text-center text-[18px] text-justify px-2 text-sm text-zinc-600">
            <p>
              Prebuilt websites & content, options to build the layouts you
              want, extensive help resources & world-class support will
              guarantee an efficient workflow to save you time.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col py-5 lg:mt-20 gap-16">
          <div className="lg:w-1/3 text-center">
            <div className="lg:h-[300px] h-52">
              <img
                src={prebuilt}
                alt="prebuilt"
                className="h-full w-full object-center"
              />
            </div>
            <h1 className="lg:text-2xl font-semibold lg:pb-3 lg:pt-8 py-3 text-xl">
              Prebuilt Websites & Content
            </h1>
            <div className="text-zinc-700 lg:text-center px-2 text-justify text-sm">
              <p>
                Prebuilt resources are designed to save you time, providing your
                workflow with an extensive library of style & design choices.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 text-center">
            <div className="lg:h-[300px] h-52 flex justify-center">
              <img src={coding} alt="coding" className="h-full object-center" />
            </div>
            <h1 className="lg:text-2xl font-semibold lg:pb-3 lg:pt-8 text-xl py-3">
              No Coding Knowledge Required
            </h1>
            <div className="text-zinc-700 lg:text-center text-sm text-justify px-2">
              <p>
                Years of evolution guarantee that Nirvanta’s website building
                tools are intuitive, with an extensive range of options.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 text-center">
            <div className="lg:h-[300px] h-52">
              <img
                src={support}
                alt="support"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="lg:text-2xl font-semibold lg:pb-3 lg:pt-8 text-xl py-3">
              World-Class Support
            </h1>
            <div className="text-zinc-700 lg:text-center text-sm text-justify px-2">
              <p>
                Our team focuses on building long-term professional
                relationships with our customers that you can rely on & trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="lg:pt-28 lg:pb-14 lg:px-[150px]">
        <div className="text-center">
          <h1 className="lg:text-5xl text-xl font-bold text-zinc-800">
            Launch Websites That Sell
          </h1>
          <div className="lg:py-8 py-3 lg:text-center lg:leading-relaxed text-justify px-2 text-sm lg:text-[18px] text-zinc-700">
            <p>
              WooCommerce is perfectly integrated with Nirvanta, ensuring
              continual compatibility as online business requirements & trends
              evolve. Setting up an eCommerce store could not be any easier.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse lg:py-10 py-5">
          <div className="lg:w-1/2 flex flex-col justify-center lg:pl-8">
            <h1 className="lg:text-4xl text-xl text-center font-bold text-zinc-800">
              Online Store Builder
            </h1>
            <div className="lg:text-[18px] lg:text-center lg:leading-relaxed text-sm text-zinc-600 px-2 py-3 lg:py-6">
              <p>
                Design bespoke storefronts & product pages that will increase
                engagement for new and returning customers
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex lg:text-[18px] text-sm items-center lg:gap-3 gap-1"
              >
                <p className="underline font-semibold">Build Your Store</p>{" "}
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 py-4">
            <div className="lg:h-96 h-36 flex items-center">
              <img
                src={website}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:py-10 py-5">
          <div className="lg:w-1/2 py-4 px-2">
            <div className="lg:h-96 h-52 flex items-center">
              <img src={canvas} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-[400px] flex flex-col justify-center lg:pl-32">
            <h1 className="lg:text-4xl text-xl text-center font-bold text-zinc-800">
              Off-Canvas Builder
            </h1>
            <div className="lg:text-[18px] lg:text-center lg:leading-relaxed text-sm text-zinc-600 px-2 py-3 lg:py-6">
              <p>
                Build traditional popups, sliding bars, and even fullscreen
                overlays with many feature that will allow you to trigger or
                control the behavior.
              </p>
            </div>
            <div>
              <a
                href="#"
                className="flex lg:text-[18px] text-sm items-center lg:gap-3 gap-1 justify-center"
              >
                <p className="underline font-semibold">Grow Your Business</p>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex py-10 lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2 flex flex-col justify-center lg:pl-8">
            <h1 className="lg:text-4xl text-xl text-center font-bold text-zinc-800">
              Form Builder
            </h1>
            <div className="lg:text-[18px] lg:text-center lg:leading-relaxed text-sm text-zinc-600 px-2 py-3 lg:py-6">
              <p>
                Build custom branded forms for any purpose & add them anywhere.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex lg:text-[18px] text-sm items-center lg:gap-3 gap-1"
              >
                <p className="underline font-semibold">Build Website Forms</p>
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:py-10 py-5 px-2">
            <div className="lg:h-96 h-36 flex items-center">
              <img src={form} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-14 gap-7 px-4 lg:px-[120px] pb-20 text-center">
        <div className="bg-gray-100 h-[450px] px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">Plugin Integrations</h1>
          </div>
          <div className="pt-3 pb-7 text-gray-700">
            <p>Nirvanta is compatible with popular WordPress plugins.</p>
          </div>
          <div className="h-[220px] flex items-center">
            <img src={plug} alt="plugins" />
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">Website Performance</h1>
          </div>
          <div className="pt-3 pb-2 text-gray-700">
            <p>
              Nirvanta includes optimization tools for improved performance.
            </p>
          </div>
          <div className="h-[220px] pt-12 flex items-center">
            <img src={performance} alt="plugins" className="h-full" />
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">Avada Motion Effects</h1>
          </div>
          <div className="pt-3 pb-7 text-gray-700">
            <p>
              Create an interactive website, impress visitors and enhance user
              experience.
            </p>
          </div>
          <div className="h-[220px] flex items-center">
            <img src={motion} alt="plugins" />
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">Mobile Friendly</h1>
          </div>
          <div className="pt-3 pb-7 text-gray-700">
            <p>
              100% responsive across all device types, from mobile to desktop.
            </p>
          </div>
          <div className="h-[220px] flex items-center">
            <img src={mobile} alt="plugins" />
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">SEO Friendly</h1>
          </div>
          <div className="pt-3 pb-7 text-gray-700">
            <p>
              Nirvanta is built & designed to follow strict HTML & SEO
              practices.
            </p>
          </div>
          <div className="h-[220px] flex items-center p-8">
            <img src={seo} alt="plugins" />
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">Multilangual Support</h1>
          </div>
          <div className="pt-3 pb-7 text-gray-700">
            <p>
              Nirvanta is 100% RTL & multilingual ready to build any
              international site.
            </p>
          </div>
          <div className="h-[220px] flex items-center">
            <img src={language} alt="plugins" />
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 lg:px-[180px] flex flex-col-reverse lg:gap-10 py-5 lg:flex-row mb-10">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="lg:text-5xl text-xl font-bold lg:text-start text-center">
            Nirvanta Studio
          </h1>
          <div className="lg:py-8 py-4 text-sm text-justify px-2 lg:px-0 lg:leading-relaxed lg:text-[18px] text-zinc-600">
            <p>
              Expansive library of multi-use content designed professionally to
              speed up your workflow. Get a head start with prebuilt headers to
              footers, containers to elements, and everythinh in between.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center lg:gap-4 gap-1">
              <p className="underline text-sm lg:text-[18px] font-semibold">
                Explore Prebuilt Content
              </p>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 pb-6 lg:mt-16 lg:h-[400px] object-cover">
          <img src={bgphoto} alt="bg" className="h-full rounded-t-md" />
        </div>
      </div>
    </div>
  );
}
