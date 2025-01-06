import React from "react";

import AnimatedLine from "./AnimatedLine";

const Projects = () => {
  
  return (
    <section id="projects" className="py-10">
      <div className="container text-center p-10">
        <h2 className="text-3xl text-white font-light mb-8 pl-10 flex items-center">
          Projects I've done
          <AnimatedLine />
        </h2>
      </div>

      {/* Project container grid*/}

      <div className="container mx-auto py-6 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="flex flex-wrap items-stretch rounded-lg shadow-lg border border-gray-900 overflow-hidden">
            {/* left Hand Side (Image and Content) */}
            <div className="flex-1 p-3">
              {/* Image */}
              <div className="w-full h-60 overflow-hidden mb-4">
                <img
                  src= "/assets/project_1.png"
                  alt="Time Tracker"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Heading */}
              <h3 className="uppercase text-3xl font-light text-orange-500 mb-2">
                Time Tracker
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                The Time Tracker Application is a dynamic and user-friendly web
                tool designed to enhance productivity and time management.
              </p>
            </div>

            {/* right Hand Side (Buttons) */}
            <div className="flex flex-col justify-between p-2 w-30">
              {/* Live Button */}
              <div className="text-right">
                <a
                  href="https://lucent-entremet-1c50c9.netlify.app/"
                  className="border-2 border-orange-500 text-white text-md font-light ml-4 w-24 h-24 rounded-full shadow-md flex items-center justify-center hover:border-orange-600 transition-colors duration-300"
                >
                  Live
                </a>
              </div>
              {/* Source Code Button */}
              <div className="text-right">
                <a
                  href="https://github.com/indureka/Time-Tracker.git"
                  className=" text-gray-300 text-lg font-light px-2 py-2 rounded-md shadow-md hover:underline transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-wrap items-stretch rounded-lg shadow-lg border border-gray-900 overflow-hidden">
            {/* left Hand Side (Image and Content) */}
            <div className="flex-1 p-3">
              {/* Image */}
              <div className="w-full h-60 overflow-hidden mb-4">
                <img
                  src="/assets/project_2.png"
                  alt="Landify"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Heading */}
              <h3 className="uppercase text-3xl font-light text-orange-500 mb-2">
                Landify
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                A modern design institute website offering expert coaching in
                technical skills. Inspiring creativity and innovation with
                user-friendly layouts and engaging content.
              </p>
            </div>

            {/* right Hand Side (Buttons) */}
            <div className="flex flex-col justify-between p-2 w-30">
              {/* Live Button */}
              <div className="text-right">
                <a
                  href="https://golden-toffee-3512b7.netlify.app/"
                  className="border-2 border-orange-500 text-white text-md font-light ml-4 w-24 h-24 rounded-full shadow-md flex items-center justify-center hover:border-orange-600 transition-colors duration-300"
                >
                  Live
                </a>
              </div>
              {/* Source Code Button */}
              <div className="text-right">
                <a
                  href="https://github.com/indureka/Landify.git"
                  className=" text-gray-300 text-lg font-light px-2 py-2 rounded-md shadow-md hover:underline transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-wrap items-stretch rounded-lg shadow-lg border border-gray-900 overflow-hidden">
            {/* left Hand Side (Image and Content) */}
            <div className="flex-1 p-3">
              {/* Image */}
              <div className="w-full h-60 overflow-hidden mb-4">
                <img
                  src="/assets/project_3.png"
                  alt="Ask Me Identity"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Heading */}
              <h3 className="uppercase text-3xl font-light text-orange-500 mb-2">
                Ask Me Identity
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                A professional website offering top-notch coaching and resources
                for mastering technical skills. Designed to inspire learning
                with user-friendly navigation and modern aesthetics.
              </p>
            </div>

            {/* right Hand Side (Buttons) */}
            <div className="flex flex-col justify-between p-2 w-30">
              {/* Live Button */}
              <div className="text-right">
                <a
                  href="https://brilliant-hotteok-79c410.netlify.app/"
                  className="border-2 border-orange-500 text-white text-md font-light ml-4 w-24 h-24 rounded-full shadow-md flex items-center justify-center hover:border-orange-600 transition-colors duration-300"
                >
                  Live
                </a>
              </div>
              {/* Source Code Button */}
              <div className="text-right">
                <a
                  href="https://github.com/indureka/AskmeID.git"
                  className=" text-gray-300 text-lg font-light px-2 py-2 rounded-md shadow-md hover:underline transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-wrap items-stretch rounded-lg shadow-lg border border-gray-900 overflow-hidden">
            {/* left Hand Side (Image and Content) */}
            <div className="flex-1 p-3">
              {/* Image */}
              <div className="w-full h-60 overflow-hidden mb-4">
                <img
                  src="/assets/project_4.png"
                  alt="Memory Game"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Heading */}
              <h3 className="uppercase text-3xl font-light text-orange-500 mb-2">
                Memory Game
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                A fun and interactive game where players match pairs of cards to
                test their memory. Features responsive design, smooth
                animations, and dynamic gameplay for endless entertainment.
              </p>
            </div>

            {/* right Hand Side (Buttons) */}
            <div className="flex flex-col justify-between p-2 w-30">
              {/* Live Button */}
              <div className="text-right">
                <a
                  href="https://stalwart-puppy-a69f9b.netlify.app"
                  className="border-2 border-orange-500 text-white text-md font-light ml-4 w-24 h-24 rounded-full shadow-md flex items-center justify-center hover:border-orange-600 transition-colors duration-300"
                >
                  Live
                </a>
              </div>
              {/* Source Code Button */}
              <div className="text-right">
                <a
                  href="https://github.com/indureka/MemoryGame.git"
                  className=" text-gray-300 text-lg font-light px-2 py-2 rounded-md shadow-md hover:underline transition-colors duration-300"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
