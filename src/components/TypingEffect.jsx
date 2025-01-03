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
      <section className="bg-[#101011] text-white text-center py-20">


        <div className="text-center w-full h-96">
            <h3 className="text-center p-2 text-4xl text-orange-500">
               Hello, I'm Indureka.</h3>
        <h1 className="text-9xl font-mono p-4 text-white">
         {displayText}
          <span className="typing-cursor"></span>
        </h1>
        
        </div>
      </section>
    );
  };
  
  export default TypingEffect;