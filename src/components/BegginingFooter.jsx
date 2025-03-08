import React from "react";
import banner from "../assets/banner.png";
import wordpress from "../assets/WordPress.png";
import prebuilt from "../assets/prebuilt.png";
import design from "../assets/design.png";

export default function BegginingFooter() {
  return (
    <div className="w-full lg:pt-20">
      <div className="absolute z-50 w-full h-36 lg:top-[1280px] lg:overflow-hidden lg:h-full">
        <img src={banner} alt="photo" className="w-full" />
      </div>
      <div className="w-full lg:px-[120px] h-auto bg-yellow-50 relative z-0">
        <div className="lg:pt-64 pt-28 text-center">
          <h1 className="lg:text-5xl text-xl font-bold text-gray-800">
            What Is Nirvanta?
          </h1>
          <div className="lg:py-8 py-3 lg:text-xl text-sm px-2 lg:px-20 lg:text-center text-justify text-gray-700 flex flex-col gap-2">
            <p>
              Nirvanta is a WordPress Website Builder with an award winning
              history of providing reliable & intuitive design tools to
              individuals of all skill levels.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:py-20 text-center">
          <div className="lg:w-1/3">
            <div className="lg:h-64 flex justify-center items-center">
              <img src={wordpress} alt="wordpress" />
            </div>
            <div className="lg:py-8">
              <h1 className="lg:text-2xl text-xl mb-2 font-semibold">
                Based On WordPress
              </h1>
              <div className="text-zinc-600 text-sm lg:text-[17px] leading-relaxed">
                <p>
                  The #1 Content Management System, powering 40% of the entire
                  internet.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="lg:h-64">
              <img src={design} alt="design" />
            </div>
            <div className="lg:py-8 py-2">
              <h1 className="lg:text-2xl text-xl mb-2 font-semibold">
                Creative Freedom
              </h1>
              <div className="text-zinc-600 text-sm lg:text-[17px] leading-relaxed">
                <p>
                  To design any style of website, with the only limit being your
                  imagination.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 pb-14">
            <div className="lg:h-64 flex items-center">
              <img src={prebuilt} alt="prebuilt" />
            </div>
            <div className="lg:py-8 py-2">
              <h1 className="lg:text-2xl text-xl mb-2 font-semibold">
                108 Prebuilt Websites
              </h1>
              <div className="text-zinc-600 text-sm lg:text-[17px] leading-relaxed">
                <p>
                  Built to save you time. Designed with usability & flexibility
                  in mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
