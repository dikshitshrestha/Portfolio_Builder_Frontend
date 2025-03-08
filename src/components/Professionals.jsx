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
      <div className="lg:h-[580px] flex lg:flex-row flex-col">
        <div className="lg:w-1/2 h-full">
          <img
            src={project}
            alt="project"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 h-full lg:py-28 py-8 px-2 lg:px-24 flex flex-col gap-2 lg:gap-6 bg-sky-300">
          <h1 className="text-sm lg:text-[18px] font-semibold">
            Nirvanta Is For Professionals
          </h1>
          <div className="lg:text-6xl text-xl font-bold text-zinc-800">
            <h1>Take Your Projects To Next Level</h1>
          </div>
          <div className="lg:text-xl text-sm py-3">
            <p>
              Nirvanta's workflow makes it possible for you to develop & deploy
              websites rapidy, with a consistent uodates schedule to guarantee
              stability.
            </p>
          </div>
          <div className="flex lg:justify-start justify-center">
            <button className="flex items-center gap-1.5 lg:text-xl text-xs font-semibold text-white bg-zinc-800 py-4 px-7 rounded-md hover:bg-black ease-in-out duration-300">
              Join Nivanta Now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-14 lg:px-[120px] flex lg:flex-row flex-col gap-10 lg:justify-evenly text-center">
        <div className="flex flex-col lg:gap-4 gap-2">
          <div className="flex justify-center text-4xl">
            <PiSpeedometerFill />
          </div>
          <h1 className="lg:text-2xl text-xl font-semibold">
            Accelerate Your Workflow
          </h1>
          <div className="lg:text-[17px] lg:text-center text-sm text-justify px-2 text-zinc-600">
            <p>
              With an intuitive Live Editor & an extensive library of prebuilt
              content.
            </p>
          </div>
          <a
            href="#"
            className="lg:text-[18px] text-sm underline font-semibold"
          >
            Discover Website Builder
          </a>
        </div>
        <div className="flex flex-col lg:gap-4 gap-2">
          <div className="flex justify-center text-4xl">
            <FaTools />
          </div>
          <h1 className="lg:text-2xl text-xl font-semibold">
            Superior Website Tools
          </h1>
          <div className="lg:text-[17px] lg:text-center text-sm text-justify px-2 text-zinc-600">
            <p>
              You have total design control to deliver scalable client websites
              fast.
            </p>
          </div>
          <a
            href="#"
            className="lg:text-[18px] text-sm underline font-semibold"
          >
            View All Feature List
          </a>
        </div>
        <div className="flex flex-col lg:gap-4 gap-2">
          <div className="flex justify-center text-4xl">
            <MdCalendarMonth />
          </div>
          <h1 className="lg:text-2xl text-xl font-semibold">
            Build Websites For The Future
          </h1>
          <div className="lg:text-[17px] lg:text-center text-sm text-justify px-2 text-zinc-600">
            <p>
              Receive free updates, compatible with industry standards & trends,
              for life.
            </p>
          </div>
          <a
            href="#"
            className="lg:text-[18px] text-sm underline font-semibold"
          >
            Get Dedicated Support
          </a>
        </div>
      </div>
      <div className="h-auto lg:py-28 py-14 bg-sky-100 lg:px-[120px]">
        <div className="text-center">
          <h1 className="lg:text-5xl text-xl font-bold text-zinc-800">
            Accelerate Your Workflow
          </h1>
          <div className="text-zinc-700 lg:text-[18px] lg:py-8 text-justify px-2 py-2">
            <p>
              With Nirvanta’s Drag & Drop live editor, Layout Builders, Dynamic
              Content options, Global content control, & extensive prebuilt
              websites & prebuilt content.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-evenly text-center py-10 gap-12">
          <div className="lg:w-1/3">
            <div className="lg:h-56 h-52 px-2">
              <img
                src={build}
                alt="build"
                className="h-full object-cover w-full"
              />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold lg:pt-8 lg:pb-3 py-2">
              Full Website Building Toolkit
            </h1>
            <div className="text-zinc-600 text-sm">
              <p>
                Nirvanta’s extensive resources will give you the confidence to
                deliver projects within budget.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="lg:h-56 h-52 px-2">
              <img
                src={visual}
                alt="visual"
                className="h-full object-cover w-full"
              />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold lg:pt-8 lg:pb-3 py-2">
              Live Visual Builder
            </h1>
            <div className="text-zinc-600 text-sm">
              <p>
                Live editing means faster design & project deployment with
                accuracy & attention to detail.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="lg:h-56 h-52 px-2">
              <img
                src={layout}
                alt="layout"
                className="h-full object-cover w-full"
              />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold lg:pt-8 lg:pb-3 py-2">
              Global Layout Control
            </h1>
            <div className="text-zinc-600 text-sm">
              <p>
                Create content to be reused anywhere, as often as required &
                managed centrally.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:py-20 py-5">
          <h1 className="text-center lg:text-4xl font-bold text-zinc-800">
            Build Each Aspect Of Your Site
          </h1>
          <div className="lg:py-16 py-5 flex lg:flex-row flex-col gap-5 lg:gap-10">
            <div className="grid grid-cols-3 grid-rows-2 lg:grid-cols-1 gap-2 h-full lg:gap-3 px-1">
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
                  className={`lg:text-xl text-[10px] font-semibold ease-in-out duration-200 hover:bg-gray-50 lg:py-4 px-1 py-2 rounded-md lg:px-6 lg:w-56 flex items-center lg:gap-2 gap-1 ${
                    activeButton === key ? "bg-gray-50" : "bg-transparent"
                  }`}
                  onClick={() => handleClick(key)}
                >
                  {label} {icon}
                </button>
              ))}
            </div>
            <div
              className="lg:h-[600px] lg:w-4/5 h-52"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                transition: "background 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-14 text-center">
          <div className="lg:h-[550px] lg:w-[600px] bg-white rounded-md lg:p-16 p-4">
            <div className="lg:h-[300px] h-52">
              <img src={dynamic} alt="dynamic" className="h-full w-full" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold py-2 lg:pt-8 lg:pb-3">
              Dynamic Content
            </h1>
            <div className="text-zinc-700 text-sm lg:text-center text-justify">
              <p>
                Build bespoke page & post layouts by harnessing the power of
                WordPress database content.
              </p>
            </div>
          </div>
          <div className="lg:h-[550px] lg:w-[600px] bg-white rounded-md lg:p-16 p-4">
            <div className="lg:h-[300px] h-52">
              <img src={library} alt="library" className="h-full w-full" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold py-2 lg:pt-8 lg:pb-3">
              Content Library
            </h1>
            <div className="text-zinc-700 text-sm lg:text-center text-justify">
              <p>
                Prebuilt content is designed to save you time & with an
                extensive suppky of style & design choices.
              </p>
            </div>
          </div>
          <div className="lg:h-[550px] lg:w-[600px] bg-white rounded-md lg:p-16 p-4">
            <div className="lg:h-[300px] h-52">
              <img src={prebuilt} alt="prebuilt" className="h-full w-full" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold py-2 lg:pt-8 lg:pb-3">
              109 Prebuilt Websites
            </h1>
            <div className="text-zinc-700 text-sm lg:text-center text-justify">
              <p>
                Each is professionally designed, categorized by industry & will
                save you valuable project time.
              </p>
            </div>
          </div>
          <div className="lg:h-[550px] lg:w-[600px] bg-white rounded-md lg:p-16 p-4">
            <div className="lg:h-[300px] h-52">
              <img src={acf} alt="acf" className="h-full w-full" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold py-2 lg:pt-8 lg:pb-3">
              ACF Repeater Support
            </h1>
            <div className="text-zinc-700 text-sm lg:text-center text-justify">
              <p>
                Create an interactive website, captivate visitors with dynamic
                animations and elevate user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-28 py-14 px-4 lg:px-[120px]">
        <div className="text-center">
          <h1 className="lg:text-5xl text-xl font-bold text-zinc-800">
            Superior Website Tools
          </h1>
          <div className="lg:text-[18px] lg:text-center lg:leading-relaxed lg:py-8 py-3 text-sm text-justify text-zinc-700">
            <p>
              For 12+ years, Nirvanta has been 100% developed & maintained
              in-house, allowing us not to rely on 3rd party vendors. As a
              result, our passionate team has evolved Avada into an
              industry-leading powerhouse.
            </p>
          </div>
        </div>
        <div className="pt-10 grid lg:grid-cols-2 grid-rows-4 gap-12 lg:gap-16">
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center">
              <img src={standards} alt="standards" />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                Coding Standards
              </h1>
              <div className="text-zinc-800 lg:text-center text-sm text-justify">
                <p>
                  The Nirvanta codebase adheres to strict WordPress & PHP
                  standards.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center">
              <img src={Compatibility} alt="compatibilty" />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                Compatibility
              </h1>
              <div className="text-zinc-800 lg:text-center text-sm text-justify">
                <p>
                  Nirvanta is compatible & integrated with popular WordPress
                  plugins.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center">
              <img src={mobile} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                Mobile Friendly
              </h1>
              <div className="text-zinc-800 text-sm text-justify lg:text-center">
                <p>
                  100% responsive across all device types, from mobile to
                  desktop.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center">
              <img src={css} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                Critical CSS
              </h1>
              <div className="text-zinc-800 lg:text-center text-sm text-justify">
                <p>
                  Faster content loading & a shorter render-blocking
                  continuance.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center">
              <img src={performance} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                Performance Wizard
              </h1>
              <div className="text-zinc-800 lg:text-center text-sm text-justify">
                <p>
                  To scan & implement changes for superior website performance.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center">
              <img src={seo} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                SEO Friendly
              </h1>
              <div className="text-zinc-800 lg:text-center text-sm text-justify">
                <p>
                  Nirvanta is built & designed to follow strict HTML & SEO
                  practices.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center">
              <img src={wcag} alt="" />
            </div>
            <div className="flex flex-col justify-center lg:pl-6">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                WCAG Compliance
              </h1>
              <div className="text-zinc-800 lg:text-center text-sm text-justify">
                <p>
                  Nirvanta is built with accessibility in mind & is WCAG 2.1 AA
                  compliant.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[250px] flex lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-center justify-center">
              <img src={branding} alt="" className="h-[220px]" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="lg:text-2xl py-3 text-xl text-center font-semibold">
                Custom Branding
              </h1>
              <div className="text-zinc-800 lg:text-center text-sm text-justify">
                <p>
                  Built into Nirvanta, you can easily white label your client
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-50 lg:px-[180px] flex lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="lg:text-5xl lg:text-start font-bold text-xl py-4 text-center">
            Nirvanta Studio
          </h1>
          <div className="lg:py-8 lg:text-[18px] lg:leading-relaxed text-sm px-2 text-zinc-600">
            <p>
              Expansive library of multi-use content designed professionally to
              speed up your workflow. Get a head start with prebuilt headers to
              footers, containers to elements, and everything in between.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center lg:gap-4 gap-1 py-3">
              <p className="underline text-sm lg:text-[18px] font-semibold">
                Explore Prebuilt Content
              </p>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-16 lg:h-[400px] object-cover">
          <img src={bgphoto} alt="bg" className="h-full rounded-t-md" />
        </div>
      </div>
      <div className="lg:py-28 py-14 lg:px-[120px]">
        <div className="text-center">
          <h1 className="lg:text-5xl text-xl font-bold text-zinc-800">
            Build Websites For The Future
          </h1>
          <div className="lg:text-[18px] px-2 lg:text-center lg:px-20 lg:leading-relaxed text-justify text-sm text-zinc-700 py-3 lg:py-8">
            <p>
              Supercharge your website projects with an intuitive workflow &
              with confidence in regular maintenance & a consistent update
              schedule from the Nirvanta team.
            </p>
          </div>
        </div>
        <div className="text-center grid lg:grid-cols-3 grid-rows-2 gap-10 py-5 lg:gap-20 lg:mt-10">
          <div>
            <div className="w-full h-32 flex justify-center items-center">
              <img src={track} alt="track" className="h-full" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold lg:pt-8 py-3 lg:pb-3">
              A Track Record You Can Trust
            </h1>
            <div className="text-zinc-600 lg:text-center text-sm text-justify px-2">
              <p>
                The #1 selling Website Builder on Themeforest for 12+ years &
                counting.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-32 flex justify-center items-center">
              <img src={built} alt="built" className="h-full" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold lg:pt-8 py-3 lg:pb-3">
              100% Built In-House
            </h1>
            <div className="text-zinc-600 px-2 lg:text-center text-sm text-justify">
              <p>
                No dependence on 3rd parties to deliver a stable & seamless
                website building experience.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-32 flex justify-center items-center">
              <img src={support} alt="support" className="h-full" />
            </div>
            <h1 className="lg:text-2xl text-xl py-3 font-semibold lg:pt-8 lg:pb-3">
              World-Class Support
            </h1>
            <div className="text-zinc-600 text-sm lg:text-center text-justify px-2">
              <p>
                We build long-term professional relationships that you can rely
                on & trust.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-32 flex justify-center items-center">
              <img src={roadmap} alt="roadmap" className="h-full" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold lg:pt-8 py-3 lg:pb-3">
              Roadmap & Feature Requests
            </h1>
            <div className="text-zinc-600 text-sm lg:text-center text-justify px-2">
              <p>
                You can have your say and help shape the future of Nirvanta &
                vote for the top features that matter.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={update} alt="update" className="h-32" />
            </div>
            <h1 className="lg:text-2xl text-xl py-3 font-semibold lg:pt-8 lg:pb-3">
              Free Lifetime Updates
            </h1>
            <div className="text-zinc-600 lg:text-center text-justify text-sm px-2">
              <p>
                Each Nirvanta website will receive consistent & comprehensive
                updates, free for life.
              </p>
            </div>
          </div>
          <div>
            <div className="w-full h-50 flex justify-center items-center">
              <img src={patcher} alt="patcher" className="h-32" />
            </div>
            <h1 className="lg:text-2xl text-xl font-semibold py-3 lg:pt-8 lg:pb-3">
              Maintenance Patcher Tool
            </h1>
            <div className="text-zinc-600 lg:text-center text-sm text-justify px-2">
              <p>
                Recieve maintenance patches pushed to all Nirvanta installs
                without the need for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
