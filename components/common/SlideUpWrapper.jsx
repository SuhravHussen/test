"use client";

import React, { useEffect, useRef, useState } from "react";

const SlideUp = ({
  children,
  threshold = 0.01,
  duration = "700",
  delay = "0",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  let delayClass = "delay-0";
  switch (delay) {
    case "100":
      delayClass = "delay-100";
      break;
    case "200":
      delayClass = "delay-200";
      break;
    case "300":
      delayClass = "delay-300";
    case "500":
      delayClass = "delay-500";
      break;
    case "700":
      delayClass = "delay-700";
      break;
    case "1000":
      delayClass = "delay-1000";
      break;
    case "1500":
      delayClass = "delay-[1500ms]";
      break;
    case "2000":
      delayClass = "delay-[2000ms]";
      break;
    default:
      delayClass = "delay-0";
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible ? " animate-slide-up opacity-100" : "opacity-0"
      } transition-opacity ${delayClass} duration-700`}
    >
      {children}
    </div>
  );
};

export default SlideUp;
