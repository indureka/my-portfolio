import React, { useEffect, useRef, useState } from "react";

import AnimatedLine from "./AnimatedLine";

import { CodeIcon } from "@heroicons/react/solid";

import { SiTailwindcss } from "react-icons/si";

export const TechnologiesSection = () => {
  return (
    <section id="skills" className="py-10 bg-[#101011]">
      <div className="container mx-auto text-left">
        <h2 className="text-3xl text-white font-light mb-8 pl-10 flex items-center">
          Technologies I Use
          <AnimatedLine />
        </h2>

        <div className="bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-1 p-10 gap-8 items-center">
            {/* Left Column - Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {/* Technology Items */}
              <div className="p-4 border border-gray-900 text-center bg-transparent rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-html5 text-4xl text-orange-600"></i>
                <p className="mt-2 text-sm font-light text-white">HTML</p>
              </div>

              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-css3 text-4xl text-blue-600"></i>
                <p className="mt-2 text-sm font-light text-white">CSS</p>
              </div>
              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-js text-4xl text-yellow-500"></i>
                <p className="mt-2 text-sm font-light text-white">JavaScript</p>
              </div>
              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-react text-4xl text-sky-500"></i>
                <p className="mt-2 text-sm font-light text-white">React</p>
              </div>
              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-solid fa-database text-4xl text-green-600"></i>
                <p className="mt-2 text-sm font-light text-white">MongoDB</p>
              </div>
              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-node text-4xl text-green-500"></i>
                <p className="mt-2 text-sm font-light text-white">Node.js</p>
              </div>
              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-node-js text-4xl text-green-400"></i>
                <p className="mt-2 text-sm font-light text-white">Express.js</p>
              </div>
              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-wordpress text-4xl text-blue-400"></i>
                <p className="mt-2 text-sm font-light text-white">WordPress</p>
              </div>
              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <i className="fa-brands fa-github text-4xl text-white"></i>
                <p className="mt-2 text-sm font-light text-white">
                  Git & github
                </p>
              </div>

              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <SiTailwindcss className="h-10 w-10 text-blue-400 mx-auto" />
                <p className="mt-2 text-sm font-light text-white">
                  Tailwind CSS
                </p>
              </div>

              <div className="p-4 border border-gray-900 text-center rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-lg ">
                <CodeIcon className="h-10 w-10 text-blue-400 mx-auto" />
                <p className="mt-2 text-sm font-light text-white">
                  Visual Studio Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
