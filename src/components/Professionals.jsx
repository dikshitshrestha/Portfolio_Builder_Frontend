import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import project from "../assets/project.jpg";
import { PiSpeedometerFill } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import layout from "../assets/layouts.png";
import build from "../assets/Website2.png";
import visual from "../assets/nir2.png";
import { RiLayoutTopFill } from "react-icons/ri";
import { TbLayoutFilled } from "react-icons/tb";
import { RiLayoutBottomFill } from "react-icons/ri";
import { BsCartDashFill } from "react-icons/bs";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { MdOutlineDocumentScanner } from "react-icons/md";
import prebuilt from "../assets/prebuilt.png";
import library from "../assets/library.png";
import dynamic from "../assets/dyna.png";
import acf from "../assets/acf.png";
import standards from "../assets/codingstandards.jpg";
import Compatibility from "../assets/compatibilty.jpg";
import css from "../assets/criticalcss.jpg";
import performance from "../assets/performance.jpg";
import wcag from "../assets/wag.jpg";
import branding from "../assets/custombranding.jpg";
import seo from "../assets/seo.png";
import mobile from "../assets/Dynamic.png";
import bgphoto from "../assets/bg.jpg";
import track from "../assets/track.png";
import built from "../assets/built.png";
import support from "../assets/support.png";
import roadmap from "../assets/roadmap.png";
import update from "../assets/updates.png";
import patcher from "../assets/maintenance.png";
import PageEnd from "./PageEnd";
import bg1 from "../assets/desktop.jpg";
import bg2 from "../assets/document.jpg";
import bg3 from "../assets/developer.jpg";
import bg4 from "../assets/marketers.jpg";
import bg5 from "../assets/Portfolio1.jpg";
import bg6 from "../assets/womancoffee.jpg";

export default function Professionals() {
  const image = {
    header: bg1,
    layout: bg2,
    footer: bg3,
    commerce: bg4,
    form: bg5,
    canvas: bg6,
  };

  const [activeButton, setActiveButton] = useState("header");
  const [bgImage, setBgImage] = useState(bg1);

  function handleClick(key) {
    setActiveButton(key);
    setBgImage(image[key]);
  }

  return (
    <div>
      <div className="h-[600px] flex">
        <div className="w-1/2">
          <img src={project} alt="project" className="h-full object-cover" />
        </div>
        <div className="w-1/2 bg-sky-300 py-24 px-20">
          <h1 className="text-[18px] font-semibold">
            Avada Is For Professionals
          </h1>
          <div className="text-6xl font-bold text-zinc-800 py-6 flex flex-col gap-2">
            <h1>Take Your</h1>
            <h1>Projects To The</h1>
            <h1>Next Level</h1>
          </div>
          <div className="text-[18px] text-zinc-800">
            <p>Nirvanta's workflow makes it possible for you to develop &</p>
            <p>deploy websites rapidy, with a consistent uodates</p>
            <p>schedule to guarantee stability.</p>
          </div>
          <div>
            <button className="px-6 py-3 bg-zinc-800 flex text-white items-center gap-2 text-xl font-semibold rounded-md hover:bg-black ease-in-out duration-300 mt-8">
              Join Nivanta Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="py-28 flex justify-evenly text-center">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center text-4xl">
            <PiSpeedometerFill />
          </div>
          <h1 className="text-2xl font-semibold">Accelerate Your Workflow</h1>
          <div className="text-[17px] text-zinc-600">
            <p>With an intuitive Live Editor & an extensive</p>
            <p>library of prebuilt content.</p>
          </div>
          <a href="#" className="text-[18px] underline font-semibold">
            Discover Website Builder
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center text-4xl">
            <FaTools />
          </div>
          <h1 className="text-2xl font-semibold">Superior Website Tools</h1>
          <div className="text-[17px] text-zinc-600">
            <p>You have total design control to deliver</p>
            <p>scalable client websites fast.</p>
          </div>
          <a href="#" className="text-[18px] underline font-semibold">
            View All Feature List
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center text-4xl">
            <MdCalendarMonth />
          </div>
          <h1 className="text-2xl font-semibold">
            Build Websites For The Future
          </h1>
          <div className="text-[17px] text-zinc-600">
            <p>Receive free updates, compatible with industry</p>
            <p>standards & trends, for life.</p>
          </div>
          <a href="#" className="text-[18px] underline font-semibold">
            Get Dedicated Support
          </a>
        </div>
      </div>
      <div className="h-auto py-28 bg-sky-100 px-[120px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800">
            Accelerate Your Workflow
          </h1>
          <div className="text-zinc-700 text-[18px] py-8">
            <p>
              With Nirvanta’s Drag & Drop live editor, Layout Builders, Dynamic
              Content options, Global
            </p>
            <p>
              content control, & extensive prebuilt websites & prebuilt content.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly text-center py-10 gap-12">
          <div className="w-1/3">
            <div className="h-56">
              <img
                src={build}
                alt="build"
                className="h-56 object-cover w-full"
              />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Complete Website Building Toolkit
            </h1>
            <div className="text-zinc-600">
              <p>Nirvanta’s extensive resources will give you the</p>
              <p>confidence to deliver projects within budget.</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="h-56">
              <img
                src={visual}
                alt="visual"
                className="h-56 object-cover w-full"
              />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Live Visual Builder
            </h1>
            <div className="text-zinc-600">
              <p>Live editing means faster design & project</p>
              <p>deployment with accuracy & attention to detail.</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="h-56">
              <img
                src={layout}
                alt="layout"
                className="h-56 object-cover w-full"
              />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Global Layout Control
            </h1>
            <div className="text-zinc-600">
              <p>Create content to be reused anywhere, as often</p>
              <p>as required & managed centrally.</p>
            </div>
          </div>
        </div>
        <div className="py-20">
          <h1 className="text-center text-4xl font-bold text-zinc-800">
            Build Each Aspect Of Your Site
          </h1>
          <div className="py-16 flex gap-10">
            <div className="flex flex-col gap-3 h-[480px]">
              {[
                {
                  key: "header",
                  label: "Header Builder",
                  icon: <RiLayoutTopFill />,
                },
                {
                  key: "layout",
                  label: "Layout Builder",
                  icon: <TbLayoutFilled />,
                },
                {
                  key: "footer",
                  label: "Footer Builder",
                  icon: <RiLayoutBottomFill />,
                },
                {
                  key: "commerce",
                  label: "WooCommerce",
                  icon: <BsCartDashFill />,
                },
                {
                  key: "form",
                  label: "Form Builder",
                  icon: <MdOutlineDocumentScanner />,
                },
                {
                  key: "canvas",
                  label: "Off Canvas",
                  icon: <BsReverseLayoutTextWindowReverse />,
                },
              ].map(({ key, label, icon }) => (
                <button
                  key={key}
                  className={`text-xl font-semibold ease-in-out duration-200 hover:bg-gray-50 py-4 rounded-md px-6 w-56 flex items-center gap-2 ${
                    activeButton === key ? "bg-gray-50" : "bg-transparent"
                  }`}
                  onClick={() => handleClick(key)}
                >
                  {label} {icon}
                </button>
              ))}
            </div>
            <div
              className="h-[600px] w-4/5"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                transition: "background 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-14 text-center">
          <div className="h-[550px] w-[600px] bg-white rounded-md px-16 py-16">
            <div className="h-[300px]">
              <img src={dynamic} alt="dynamic" className="h-full w-full" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Dynamic Content
            </h1>
            <div className="text-zinc-700">
              <p>
                Build bespoke page & post layouts by harnessing the power of
              </p>
              <p>WordPress database content.</p>
            </div>
          </div>
          <div className="h-[550px] w-[600px] bg-white rounded-md px-16 py-16">
            <div className="h-[300px]">
              <img src={library} alt="library" className="h-full w-full" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Content Library
            </h1>
            <div className="text-zinc-700">
              <p>
                Prebuilt content is designed to save you time & with an
                extensive
              </p>
              <p>suppky of style & design choices.</p>
            </div>
          </div>
          <div className="h-[550px] w-[600px] bg-white rounded-md px-16 py-16">
            <div className="h-[300px]">
              <img src={prebuilt} alt="prebuilt" className="h-full w-full" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              109 Prebuilt Websites
            </h1>
            <div className="text-zinc-700">
              <p>
                Each is professionally designed, categorized by industry & will
                save
              </p>
              <p>you valuable project time.</p>
            </div>
          </div>
          <div className="h-[550px] w-[600px] bg-white rounded-md px-16 py-16">
            <div className="h-[300px]">
              <img src={acf} alt="acf" className="h-full w-full" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              ACF Repeater Support
            </h1>
            <div className="text-zinc-700">
              <p>
                Create an interactive website, captivate visitors with dynamic
              </p>
              <p>animations and elevate user experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-28 px-[120px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800">
            Superior Website Tools
          </h1>
          <div className="text-[18px] py-8 text-zinc-700">
            <p>
              For 12+ years, Nirvanta has been 100% developed & maintained
              in-house, allowing us not to rely on 3rd party
            </p>
            <p>
              vendors. As a result, our passionate team has evolved Avada into
              an industry-leading powerhouse.
            </p>
          </div>
        </div>
        <div className="pt-10 grid grid-cols-2 grid-rows-4 gap-16">
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center">
              <img src={standards} alt="standards" />
            </div>
            <div className="flex flex-col justify-center gap-3 pl-6">
              <h1 className="text-2xl font-semibold">Coding Standards</h1>
              <div className="text-zinc-800">
                <p>The Nirvanta codebase adheres to</p>
                <p>strict WordPress & PHP standards.</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center">
              <img src={Compatibility} alt="compatibilty" />
            </div>
            <div className="flex flex-col justify-center gap-3 pl-6">
              <h1 className="text-2xl font-semibold">Compatibility</h1>
              <div className="text-zinc-800">
                <p>Nirvanta is compatible & integrated</p>
                <p>with popular WordPress plugins.</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center">
              <img src={mobile} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-3 pl-6">
              <h1 className="text-2xl font-semibold">Mobile Friendly</h1>
              <div className="text-zinc-800">
                <p>100% responsive across all device</p>
                <p>types, from mobile to desktop.</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center">
              <img src={css} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-3 pl-6">
              <h1 className="text-2xl font-semibold">Critical CSS</h1>
              <div className="text-zinc-800">
                <p>Faster content loading & a shorter</p>
                <p>render-blocking continuance.</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center">
              <img src={performance} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-3 pl-6">
              <h1 className="text-2xl font-semibold">Performance Wizard</h1>
              <div className="text-zinc-800">
                <p>To scan & implement changes for</p>
                <p>superior website performance.</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center">
              <img src={seo} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-3 pl-6">
              <h1 className="text-2xl font-semibold">SEO Friendly</h1>
              <div className="text-zinc-800">
                <p>Nirvanta is built & designed to follow</p>
                <p>strict HTML & SEO practices.</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center">
              <img src={wcag} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-3 pl-6">
              <h1 className="text-2xl font-semibold">WCAG Compliance</h1>
              <div className="text-zinc-800">
                <p>Nirvanta is built with accessibility in</p>
                <p>mind & is WCAG 2.1 AA compliant.</p>
              </div>
            </div>
          </div>
          <div className="h-[250px] flex">
            <div className="w-1/2 flex items-center justify-center">
              <img src={branding} alt="" className="h-[220px]" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-semibold">Custom Branding</h1>
              <div className="text-zinc-800">
                <p>Built into Nirvanta, you can easily white</p>
                <p>label your client projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-50 px-[180px] flex">
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
      <div className="py-28 px-[120px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800">
            Build Websites For The Future
          </h1>
          <div className="text-[18px] text-zinc-700 py-8">
            <p>
              Supercharge your website projects with an intuitive workflow &
              with confidence in regular maintenance & a
            </p>
            <p>consistent update schedule from the Nirvanta team.</p>
          </div>
        </div>
        <div className="text-center grid grid-cols-3 grid-rows-2 gap-20 mt-20">
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={track} alt="track" className="h-32" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              A Track Record You Can Trust
            </h1>
            <div className="text-zinc-600">
              <p>The #1 selling Website Builder on Themeforest for</p>
              <p>12+ years & counting.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={built} alt="built" className="h-32" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              100% Built In-House
            </h1>
            <div className="text-zinc-600">
              <p>No dependence on 3rd parties to deliver a stable &</p>
              <p>seamless website building experience.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={support} alt="support" className="h-32" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              World-Class Support
            </h1>
            <div className="text-zinc-600">
              <p>We build long-term professional relationships that</p>
              <p>you can rely on & trust.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={roadmap} alt="roadmap" className="h-32" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Roadmap & Feature Requests
            </h1>
            <div className="text-zinc-600">
              <p>You can have your say and help shape the future of</p>
              <p>Nirvanta & vote for the top features that matter.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={update} alt="update" className="h-32" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Free Lifetime Updates
            </h1>
            <div className="text-zinc-600">
              <p>Each Nirvanta website will receive consistent &</p>
              <p>comprehensive updates, free for life.</p>
            </div>
          </div>
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={patcher} alt="patcher" className="h-32" />
            </div>
            <h1 className="text-2xl font-semibold pt-8 pb-3">
              Maintenance Patcher Tool
            </h1>
            <div className="text-zinc-600">
              <p>Recieve maintenance patches pushed to all Avada</p>
              <p>installs without the need for updates.</p>
            </div>
          </div>
        </div>
      </div>
      <PageEnd />
    </div>
  );
}
