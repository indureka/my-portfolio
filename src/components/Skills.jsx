import React from "react";

import AnimatedLine from "./AnimatedLine";

const Skills = () => {
  return (
    <section id="skills" className="py-20 ">
      <div className="container mx-auto text-center">
        <p className="uppercase mb-4 text-gray-300 text-sm font-light">
          "Every challenge is an opportunity to create something extraordinary."
        </p>

        {/* Skills & Experience Heading */}
        <div className="relative mb-10">
          <h2 className="text-4xl text-white font-light mb-4">
            Skills & Experience
          </h2>
          {/* Animated Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mb-4">
            <AnimatedLine />
          </div>
        </div>
        <p className="text-base font-light text-gray-100 leading-relaxed px-4 my-4">
          As a passionate MERN Stack Developer, I specialize in crafting
          scalable and efficient web solutions.
        </p>

        <div className="p-10 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between gap-4">
              {/* First Box */}
              <div className="flex items-start bg-transparent shadow-md rounded-lg p-6 border-l-4 border-orange-500 w-full md:w-[48%]">
                <div className="text-orange-500 text-2xl mr-4">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <p className="text-gray-100 text-sm font-light">
                    Proficient in MongoDB, Express.js, React, and Node.js, I
                    excel in building dynamic web applications with intuitive
                    user interfaces and seamless backend integrations.
                  </p>
                </div>
              </div>

              {/* Second Box */}
              <div className="flex items-start bg-transparent shadow-md rounded-lg p-6 border-l-4 border-orange-500 w-full md:w-[48%]">
                <div className="text-orange-500 text-2xl mr-4">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <p className="text-gray-100 text-sm font-light">
                    My expertise includes developing RESTful APIs, implementing
                    secure authentication systems, and optimizing database
                    performance for both small and large-scale applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-between gap-4">
              {/* First Box */}
              <div className="flex items-start bg-transparent shadow-md rounded-lg p-6 border-l-4 border-orange-500 w-full md:w-[48%]">
                <div className="text-orange-500 text-2xl mr-4">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <p className="text-gray-100 text-sm font-light">
                    I also thrive in React frontend projects, building
                    responsive interfaces using React, custom plugins,
                    animations, and interactive layouts that enhance user
                    experience and engagement.
                  </p>
                </div>
              </div>

              {/* Second Box */}
              <div className="flex items-start bg-transparent shadow-md rounded-lg p-6 border-l-4 border-orange-500 w-full md:w-[48%]">
                <div className="text-orange-500 text-2xl mr-4">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div>
                  <p className="text-gray-100 text-sm font-light">
                    Beyond the stack, I have experience in deploying
                    applications on cloud platforms like Netlify and Render, and
                    using tools like Git, and Postman to ensure smooth
                    development workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm font-light text-gray-100 leading-relaxed my-4">
          Visit my{" "}
          <a
            href="https://www.linkedin.com/in/indureka-arulprakasam-7a78582a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600 hover:underline"
          >
            LinkedIn
          </a>{" "}
          to learn more about my journey and accomplishments.
        </p>
      </div>
    </section>
  );
};

export default Skills;
