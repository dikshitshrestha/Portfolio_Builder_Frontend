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
import PageEnd from "./PageEnd";

export default function Marketers() {
  return (
    <div>
      <div className="h-[580px] flex">
        <div className="w-1/2 h-full">
          <img src={marketer} alt="marketer" className="h-full object-cover" />
        </div>
        <div className="w-1/2 h-full py-28 px-24 flex flex-col gap-6 bg-lime-300">
          <h1 className="text-xl font-semibold">Nirvanta Is For Marketers</h1>
          <div className="text-6xl font-bold text-zinc-800">
            <h1>Generate Leads</h1>
            <h1>& Conversions</h1>
          </div>
          <div className="flex flex-col gap-1.5 text-xl">
            <p>Design & build branded websites, including targeted</p>
            <p>content layouts, thta perfectly align with you inbound</p>
            <p>marketing startegies.</p>
          </div>
          <div>
            <button className="flex items-center gap-1.5 text-xl font-semibold text-white bg-zinc-800 py-4 px-7 rounded-md hover:bg-black ease-in-out duration-300">
              Join Nirvanta Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly text-center py-28">
        <div>
          <div className="flex items-center justify-center text-4xl pb-5">
            <GiMoebiusTriangle />
          </div>
          <h1 className="text-2xl font-semibold">Design Freedom</h1>
          <div className="text-zinc-700 py-5">
            <p>Design unique websites & content that aligns</p>
            <p>with your marketing goals to convert leads</p>
            <p>into sales</p>
          </div>
          <div>
            <a href="#" className="text-[18px] font-semibold underline">
              Take Control Over Desgin
            </a>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center text-4xl pb-5">
            <RiLayout4Fill />
          </div>
          <h1 className="text-2xl font-semibold">Create Any Website, Fast!</h1>
          <div className="text-zinc-700 py-5">
            <p>Nirvanta is highly flexible, with an intuitive Drag</p>
            <p>& Drop Interface that gives you absolute</p>
            <p>design control.</p>
          </div>
          <a href="#" className="text-[18px] font-semibold underline">
            Build Custom Website
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center text-4xl pb-5">
            <MdOutlineAddShoppingCart />
          </div>
          <h1 className="text-2xl font-semibold">Launch Websites That Sell</h1>
          <div className="text-zinc-700 py-5">
            <p>Set up and online store with only a few clicks, &</p>
            <p>customize the storefront & product layouts</p>
            <p>with ease.</p>
          </div>
          <a href="#" className="text-[18px] font-semibold underline">
            Grow Your Business
          </a>
        </div>
      </div>
      <div className="bg-lime-100 py-28 px-[170px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800">Design Freedom</h1>
          <div className="text-[18px] mt-7 text-zinc-600">
            <p>
              You have total control over the creative process to elevate the
              website’s brand
            </p>
            <p>message above the competition.</p>
          </div>
        </div>
        <div className="text-center py-16">
          <div className="h-[800px]">
            <img
              src={nirvanta}
              alt="nirvanta"
              className="h-full object-cover w-full rounded-2xl border-solid border-4 border-black"
            />
          </div>
        </div>
        <div className="py-14">
          <h1 className="text-center text-3xl font-bold text-zinc-800">
            Intuitive Visual Drag & Drop Website Builder
          </h1>
          <div className="text-center text-[18px] text-zinc-600 py-5">
            <p>
              Nirvanta’s visual workflow & layout options will give you the
              confidence to manage your
            </p>
            <p>website’s content on the fly.</p>
          </div>
        </div>
        <div className="flex text-center justify-evenly gap-12">
          <div className="flex flex-col gap-5">
            <div className="h-[380px]">
              <img src={nir1} alt="nirvanta" className="h-[380px]" />
            </div>
            <h1 className="text-2xl font-semibold">
              120+ Design & Layout Elements
            </h1>
            <div className="text-[17px]">
              <p>Tools that make it possible for you to convey your brands’</p>
              <p>message accurately & no coding knowledge is required.</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className=" h-[380px]">
              <img src={nir2} alt="nirvanta" className="h-[380px]" />
            </div>
            <h1 className="text-2xl font-semibold">
              Design Anything & Build Everything
            </h1>
            <div className="text-[17px]">
              <p>Align your website with your inbound marketing strategy &</p>
              <p>turn potential customers into repeat customers.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-28 px-[120px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800">
            Create Any Website, Fast!
          </h1>
          <div className="pt-8 text-[18px] text-zinc-600">
            <p>
              Prebuilt websites & content, options to build the layouts you
              want, extensive help resources & world-class
            </p>
            <p>
              support will guarantee an efficient workflow to save you time.
            </p>
          </div>
        </div>
        <div className="flex mt-20 gap-16">
          <div className="w-1/3 text-center">
            <div className="h-[300px]">
              <img
                src={prebuilt}
                alt="prebuilt"
                className="h-full w-full object-center"
              />
            </div>
            <h1 className="text-2xl font-semibold pb-3 pt-8">
              Prebuilt Websites & Content
            </h1>
            <div className="text-zinc-700">
              <p>Prebuilt resources are designed to save you</p>
              <p>time, providing your workflow with an</p>
              <p>extensive library of style & design choices.</p>
            </div>
          </div>
          <div className="w-1/3 text-center">
            <div className="h-[300px]">
              <img
                src={coding}
                alt="coding"
                className="h-full w-full object-center"
              />
            </div>
            <h1 className="text-2xl font-semibold pb-3 pt-8">
              No Coding Knowledge Required
            </h1>
            <div className="text-zinc-700">
              <p>Years of evolution guarantee that Nirvanta’s</p>
              <p>website building tools are intuitive, with an</p>
              <p>extensive range of options.</p>
            </div>
          </div>
          <div className="w-1/3 text-center">
            <div className="h-[300px]">
              <img
                src={support}
                alt="support"
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold pb-3 pt-8">
              World-Class Support
            </h1>
            <div className="text-zinc-700">
              <p>Our team focuses on building long-term</p>
              <p>professional relationships with our</p>
              <p>customers that you can rely on & trust.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-28 pb-14 px-[150px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800">
            Launch Websites That Sell
          </h1>
          <div className="py-8 text-[18px] text-zinc-700">
            <p>
              WooCommerce is perfectly integrated with Nirvanta, ensuring
              continual compatibility as online business
            </p>
            <p>
              requirements & trends evolve. Setting up an eCommerce store could
              not be any easier.
            </p>
          </div>
        </div>
        <div className="flex py-10">
          <div className="w-1/2 flex flex-col justify-center pl-8">
            <h1 className="text-4xl font-bold text-zinc-800">
              Online Store Builder
            </h1>
            <div className="text-[18px] text-zinc-600 py-6">
              <p>Design bespoke storefronts & product pages</p>
              <p>that will increase engagement for new and</p>
              <p>returning customers</p>
            </div>
            <div>
              <a href="#" className="flex text-[18px] items-center gap-3">
                <p className="underline font-semibold">Build Your Store</p>{" "}
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-96 flex items-center">
              <img src={website} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 flex items-center">
            <img src={canvas} alt="canvas" />
          </div>
          <div className="w-1/2 h-[400px] flex flex-col justify-center pl-32">
            <h1 className="text-3xl font-bold">Off-Canvas Builder</h1>
            <div className="text-[18px] py-4 text-zinc-600">
              <p>Build traditional popups, sliding bars, and even</p>
              <p>fullscreen overlays with many feature that will allow</p>
              <p>you to trigger or control the behavior.</p>
            </div>
            <div>
              <a href="#" className="text-[17px] flex gap-4 items-center">
                <p className="underline font-semibold">Grow Your Business</p>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="flex py-10">
          <div className="w-1/2 flex flex-col justify-center pl-8">
            <h1 className="text-4xl font-bold text-zinc-800">Form Builder</h1>
            <div className="text-[18px] text-zinc-600 py-6">
              <p>Build custom branded forms for any purpose &</p>
              <p>add them anywhere.</p>
            </div>
            <div>
              <a href="#" className="flex text-[18px] items-center gap-3">
                <p className="underline font-semibold">Build Website Forms</p>
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <div className="h-96 flex items-center">
              <img src={form} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-14 px-[120px] pb-20 text-center">
        <div className="bg-gray-100 h-[450px] px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">Plugin Integrations</h1>
          </div>
          <div className="pt-3 pb-7 text-gray-700">
            <p>Nirvanta is compatible with popular</p>
            <p>WordPress plugins.</p>
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
            <p>Nirvanta includes optimization tools for</p>
            <p>improved performance.</p>
          </div>
          <div className="h-[220px] flex items-center">
            <img src={performance} alt="plugins" className="h-full" />
          </div>
        </div>
        <div className="bg-gray-100 px-10 py-14 rounded-md">
          <div>
            <h1 className="font-semibold text-2xl">Avada Motion Effects</h1>
          </div>
          <div className="pt-3 pb-7 text-gray-700">
            <p>Create an interactive website, impress</p>
            <p>visitors and enhance user experience.</p>
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
            <p>100% responsive across all device types,</p>
            <p>from mobile to desktop.</p>
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
            <p>Nirvanta is built & designed to follow</p>
            <p>strict HTML & SEO practices.</p>
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
            <p>Nirvanta is 100% RTL & multilingual</p>
            <p>ready to build any international site.</p>
          </div>
          <div className="h-[220px] flex items-center">
            <img src={language} alt="plugins" />
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 px-[180px] flex mb-10">
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
      <PageEnd />
    </div>
  );
}
