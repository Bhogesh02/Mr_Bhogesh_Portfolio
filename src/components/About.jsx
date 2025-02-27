// @flow strict

import { personalData } from "../utils/data/personal-data";
import profileImage from "../Images/Profile3.jpg";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
        <img
  src={profileImage}
  width={220}
  height={200}
  alt="bhogesh"
  className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer 
  hover:border-4 hover:border-transparent hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1"
/>


        </div>
      </div>
    </div>
  );
};

export default AboutSection;