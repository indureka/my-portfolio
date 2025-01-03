import React from "react";
import indupic from "../assets/indu-pic.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import AnimatedLine from "./AnimatedLine";

const About = () => {
  return (
    <section id="about" className="py-10 mt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-white font-light mb-8 pl-10 flex items-center">
          About
          <AnimatedLine />
        </h2>

        <div className="flex justify-between gap-8 px-10 ml-20">
          <div className="flex flex-col items-center w-2/12">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4 border-2 border-orange-500">
              <img
                src={indupic}
                alt="Your Name"
                className="w-full h-full bg-white  object-cover"
              />
            </div>
            <p className="text-lg font-light text-white">
              I'm Indu, a MERN Stack Developer
            </p>
          </div>

          <div className="flex w-9/12">
            <div className="flex flex-col w-7/12 items-start text-left">
              <div className="space-y-4 text-white p-4">
                <div className="flex items-start">
                  <span className="text-orange-500 text-md mr-2">+</span>
                  <p className="text-sm font-light">
                    Passionate about web development and continuously learning
                    new technologies.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-orange-500 text-sm mr-2">+</span>
                  <p className="text-sm font-light">
                    A dedicated problem solver with a strong attention to
                    detail, committed to delivering high-quality work.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-orange-500 text-md mr-2">+</span>
                  <p className="text-sm font-light">
                    Always eager to collaborate on innovative projects with
                    like-minded individuals and push the boundaries of front-end
                    development.
                  </p>
                </div>
              </div>

              <div className="relative inline-block group mt-10 ml-8">
                <a
                  href="#contact"
                  className="relative z-10 text-lg font-light border border-orange-500 text-white py-3 px-8 rounded-lg hover:border-2 hover:border-orange-600"
                >
                  Let's Talk
                </a>
                <span className="absolute top-0 left-0 w-full h-full rounded-full blur-xl opacity-30 transition-transform duration-300 group-hover:scale-125"></span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-5/12 space-y-6 ml-auto mr-20">
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
