import Image from "next/image";
import React from "react";
import ReviewCarousel from "./ReviewCarousel";

export default function Testimonial() {
  return (
    <div className="py-20">
      <div className="max-w-7xl w-[95%] mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-10 w-full lg:w-[40%] items-start justify-center ">
          <h1 className="text-3xl font-bold">Meet Our Super Clients</h1>
          <p>
            We are providing the best and suitable home insurance services for
            the people who are interested in treatment. Our clients are our main
            source of inspiration and we are very grateful to them for their
            trust.
          </p>
          <button className="animated-button px-8 py-3 border-2 border-[--secondary] rounded-lg bg-[--background]">
            View All Clients
          </button>
        </div>
        <div className="w-[100%] mx-auto lg:w-[60%] flex flex-col gap-10 relative items-end lg:ml-2">
          <ReviewCarousel />
        </div>
      </div>
    </div>
  );
}
