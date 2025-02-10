import React from "react";
import photo1 from "../assets/Website1.png";
import photo2 from "../assets/Website2.png";
import photo3 from "../assets/Website3.png";

export default function Landing() {
  return (
    <div className="px-[120px] py-20 flex gap-7">
      <a href="#" className="w-1/3">
        <div className="bg-yellow-300 h-[550px] px-16 py-12 rounded-md cursor-pointer hover:scale-y-105 hover:scale-x-105 transition-transform duration-500 origin-bottom">
          <div className="text-center text-lg font-semibold">For Beginners</div>
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
        <div className="bg-lime-300 h-[550px] px-16 py-12 rounded-md cursor-pointer transition-transform duration-500 hover:scale-105 origin-bottom">
          <div className="text-center text-lg font-semibold">For Marketers</div>
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
        <div className=" bg-sky-300 h-[550px] px-16 py-12 rounded-md cursor-pointer transition-transform duration-500 hover:scale-105 origin-bottom">
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
  );
}
