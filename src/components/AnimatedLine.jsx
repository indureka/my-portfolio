import React, { useEffect, useRef, useState } from "react";

const AnimatedLine = ({
  triggerClass,
  width = "w-40",
  color = "bg-orange-500",
}) => {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={lineRef}
      className={`ml-4 h-0.5 ${color} transition-all duration-1000 ease-in-out ${
        isVisible ? width : "w-0"
      }`}
    ></div>
  );
};

export default AnimatedLine;
