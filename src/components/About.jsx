import React from "react";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import AnimatedLine from "./AnimatedLine";

const About = () => {

    return (
      <section id="about" className="bg-[#101011] py-10 mt-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-white font-light mb-8 pl-10 flex items-center justify-center">
            About
            <AnimatedLine />
          </h2>
  
          <div className="flex flex-col md:flex-row justify-between gap-8 px-4 md:px-10">
            {/* Profile Image and Description */}
            <div className="flex flex-col items-center w-full md:w-2/12 mb-8 md:mb-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mb-4 border-2 border-orange-500">
                <img
                  src="/assets/indu-pic.png"
                  alt="Your Name"
                  className="w-full h-full bg-white object-cover"
                />
              </div>
              <p className="text-base md:text-lg font-light text-white">
                I'm Indu, a MERN Stack Developer
              </p>
            </div>
  
            {/* Text and Button Section */}
            <div className="flex flex-col md:flex-row w-full md:w-9/12">
              <div className="flex flex-col w-full md:w-7/12 items-start text-left space-y-4 text-white p-4">
                <div className="flex items-start">
                  <span className="text-orange-500 text-md mr-2">+</span>
                  <p className="text-sm font-light">
                
                    I hold a B.E. in Electronics & Communication Engineering, with a strong foundation in analytical and problem-solving skills.
                  </p>
                </div>
  
                
                <div className="flex items-start">
                  <span className="text-orange-500 text-sm mr-2">+</span>
                  <p className="text-sm font-light">
                
                    Transformed my passion for technology into a dynamic career in web development, continuously evolving and embracing new challenges to craft innovative solutions.
                  </p>
                </div>
  
                <div className="flex items-start">
                  <span className="text-orange-500 text-md mr-2">+</span>
                  <p className="text-sm font-light">
                  
                    Blending engineering expertise with creative coding to deliver intuitive, scalable applications.
                    Passionate about collaboration and crafting solutions that make a real impact.
                  </p>
                </div>
                
               
  
                <div className="relative inline-block group pt-6">
                  <a
                    href="#contact"
                    className="relative z-10 text-lg font-light border border-orange-500 text-white py-3 px-8 rounded-lg hover:border-2 hover:border-orange-600"
                  >
                    Let's Talk
                  </a>
                  </div>
              </div>
  
              {/* Social Media Links */}
              <div className="flex flex-col items-center justify-center w-full md:w-5/12 space-y-6 mt-8 md:mt-0">
                <a
                  href="https://www.linkedin.com/in/indureka-arulprakasam-7a78582a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500"
                >
                  <FaLinkedin size={25} />
                </a>
                <a
                  href="https://github.com/indureka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-500"
                >
                  <FaGithub size={25} />
                </a>
                <a
                  href="mailto:induarulprakasam94@gmail.com"
                  className="text-white hover:text-orange-500"
                >
                  <FaEnvelope size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  };

  export default About;

