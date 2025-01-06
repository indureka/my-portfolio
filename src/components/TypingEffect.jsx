import React from "react";

import { useState, useEffect } from "react";

const TypingEffect = () => {
    const textArray = ["I'm", "I'm a", "I'm a FULL", "I'm a FULL STACK", "I'm a FULL STACK DEVELOPER"];
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDisplayText(textArray[index]);
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [index]);

    return (
      <section className="bg-[#101011] text-white text-center py-20 sm:py-10 md:py-20 lg:py-32">
        <div className="text-center w-full h-96 px-4">
          <h3 className="p-2 text-4xl text-orange-500">
            Hello, I'm Indureka.
          </h3>
          <h1 className="font-mono py-8 text-white text-6xl sm:text-6xl md:text-6xl lg:text-9xl">
            {displayText}
            {/* <span className="typing-cursor"></span> */}
          </h1>
        </div>
      </section>
    );
  
   
  };
  
  export default TypingEffect;