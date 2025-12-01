// @flow strict

import { personalData } from "../utils/data/personal-data";
import profileImage from "../Images/Bhogesh02.webp";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col justify-center h-full">
          <p className="font-semibold mb-4 text-[#16f2b3] text-xl uppercase text-left lg:text-center">
            Who I am?
          </p>
          <p className="text-gray-100 text-base lg:text-lg leading-relaxed text-left lg:text-center font-medium">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2">
          <img
            src={typeof profileImage === 'string' ? profileImage : (profileImage && profileImage.src) || ''}
            width={320}
            height={280}
            alt="bhogesh"
            className="rounded-lg p-3 border-2 border-transparent shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;