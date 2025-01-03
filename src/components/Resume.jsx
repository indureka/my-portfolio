import React from "react";
import AnimatedLine from "./AnimatedLine";

const Resume = () => {
  const resumeLink = "/assets/indureka_VA_.pdf"; // Provide the correct path

  return (
    <section id="resume" className="py-10 text-center text-white">
      <div className="container mx-auto py-8">
        {/* Heading */}
        <div className="relative mb-10">
          <h2 className="text-4xl text-white font-light mb-4">My Resume</h2>
          {/* Animated Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mb-4">
            <AnimatedLine />
          </div>
        </div>

        <p className="text-lg font-light text-gray-100 mt-4 mb-8">
          "Discover my journey of innovation, skills, and dedication—download my
          resume to explore how I can bring value to your next project!"
        </p>

        {/* Download Button */}
        <div className="relative inline-block group mt-4 mb-10">
          <a
            href={resumeLink}
            download="Indureka_VA_.pdf"
            className="relative z-10 text-lg font-light border border-orange-500  text-white py-4 px-10 rounded-lg hover:border-2 hover:border-orange-600"
          >
            Download Resume
          </a>
          <span className="absolute top-0 left-0 w-full h-full rounded-full blur-xl opacity-30 transition-transform duration-300 group-hover:scale-125"></span>
        </div>

        {/* Motivational Message */}
        <p className="text-sm font-light italic text-gray-100 mb-10">
          "Your journey is shaped by the challenges you take and the
          opportunities you seize!"
        </p>

        {/* Decorative Background Element */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent)",
            opacity: 0.5,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Resume;
