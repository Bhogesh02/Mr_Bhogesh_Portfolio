import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "../utils/data/personal-data";
import heroPic from "../Images/svg/hero.svg";
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-6 md:py-10 lg:py-16 w-full">
      <img
        src={typeof heroPic === 'string' ? heroPic : (heroPic && heroPic.src) || ''}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-20 left-0 w-full max-w-none -z-10 object-cover"
      />

      <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-12 w-full max-w-6xl px-4 md:px-8">
        {/* Intro Section - always on top for mobile, left for desktop */}
        <div className="order-1 md:order-1 w-full flex flex-col items-start justify-center py-4 md:py-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-2">
            Hello,<br />
            This is <span className="text-pink-500">{personalData.name}</span><br />
            <span className="text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          <div className="my-8 flex flex-wrap items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href={personalData.facebook}
              target="_blank"
              rel="noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href={personalData.leetcode}
              target="_blank"
              rel="noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </a>
            <a
              href={personalData.twitter}
              target="_blank"
              rel="noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-4 text-xs sm:text-sm md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out flex items-center gap-2 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={18} />
              </button>
            </a>

            <a
              className="flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 sm:px-8 py-3 sm:py-4 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline"
              role="button"
              target="_blank"
              rel="noreferrer"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={18} />
            </a>
          </div>
        </div>


        {/* Code Profile Card - always below for mobile, right for desktop */}
        <div className="order-2 md:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full max-w-xl mx-auto mt-8 md:mt-0">

  {/* Top Gradient Bars */}
  <div className="flex flex-row">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
  </div>

  {/* Window Controls */}
  <div className="px-4 md:px-8 py-5">
    <div className="flex flex-row space-x-2">
      <div className="h-3 w-3 rounded-full bg-red-400"></div>
      <div className="h-3 w-3 rounded-full bg-orange-400"></div>
      <div className="h-3 w-3 rounded-full bg-green-200"></div>
    </div>
  </div>

  {/* Coder Object */}
  <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 md:px-8 py-4 md:py-8">
    <code className="font-mono text-xs sm:text-sm md:text-base leading-6">

      {/* Start */}
      <div>
        <span className="text-pink-500">const</span>
        <span className="mx-2 text-white">coderProfile</span>
        <span className="text-pink-500">=</span>
        <span className="text-gray-400">{" {"}</span>
      </div>

      {/* Basic Info */}
      <div>
        <span className="ml-8 text-white">name:</span>
        <span className="text-gray-400">{" '"}</span>
        <span className="text-amber-300">{personalData.name}</span>
        <span className="text-gray-400">{"',"}</span>
      </div>

      <div>
        <span className="ml-8 text-white">role:</span>
        <span className="text-gray-400">{" '"}</span>
        <span className="text-amber-300">Full Stack Developer</span>
        <span className="text-gray-400">{"',"}</span>
      </div>

      {/* Skills */}
      <div>
        <span className="ml-8 text-white">skills:</span>
        <span className="text-gray-400">{" ["}</span>
      </div>

      <div className="ml-16">
        <span className="text-amber-300">'React.js'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'Next.js'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'Node.js'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'Express.js'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'TypeScript'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'MongoDB'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'Docker'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'CI/CD'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'Cloud Engineering'</span><span className="text-gray-400">, </span>
        <span className="text-amber-300">'Performance Optimization'</span>
      </div>

      <div>
        <span className="ml-8 text-gray-400">{" ],"}</span>
      </div>

      {/* Traits (Clean & Meaningful) */}
      <div>
        <span className="ml-8 text-white">traits:</span>
        <span className="text-gray-400"> {"{"}</span>
      </div>

      <div className="ml-16">
        <span className="text-white">hardWorker:</span>
        <span className="mx-1 text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>

      <div className="ml-16">
        <span className="text-white">quickLearner:</span>
        <span className="mx-1 text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>

      <div className="ml-16">
        <span className="text-white">problemSolver:</span>
        <span className="mx-1 text-orange-400">true</span>
      </div>

      <div>
        <span className="ml-8 text-gray-400">{"},"}</span>
      </div>

      {/* Hireable Logic – meaningful & modern */}
      <div>
        <span className="ml-8 text-green-400">hireable:</span>
        <span className="mx-2 text-orange-400">function</span>
        <span className="text-gray-400">{"() {"}</span>
      </div>

      <div className="ml-16">
        <span className="text-orange-400">return</span>
        <span className="mx-1 text-gray-400">{"("}</span>
      </div>

      <div className="ml-24">
        <span className="text-cyan-400">this.</span>
        <span className="text-white">traits.hardWorker</span>
        <span className="mx-1 text-amber-300">&amp;&amp;</span>
      </div>

      <div className="ml-24">
        <span className="text-cyan-400">this.</span>
        <span className="text-white">traits.problemSolver</span>
        <span className="mx-1 text-amber-300">&amp;&amp;</span>
      </div>

      <div className="ml-24">
        <span className="text-cyan-400">this.</span>
        <span className="text-white">skills.length</span>
        <span className="mx-2 text-amber-300">&gt;</span>
        <span className="text-orange-400">5</span>
      </div>

      <div>
        <span className="ml-16 text-gray-400">{");"}</span>
      </div>

      <div>
        <span className="ml-8 text-gray-400">{"},"}</span>
      </div>

      {/* End */}
      <div>
        <span className="text-gray-400">{"};"}</span>
      </div>

    </code>
  </div>
</div>




      </div>
    </section>
  );
};

export default Hero;
