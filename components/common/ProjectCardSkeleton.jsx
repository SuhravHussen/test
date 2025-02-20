import React from "react";

export default function ProjectCardSkeleton() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[385px] rounded-xl overflow-hidden cursor-pointer animate-pulse">
      <div className="w-full h-full bg-gray-300 rounded-xl"></div>
      <div className="bg-[--secondary] px-4 py-6 rounded-lg absolute bottom-4 w-[95%] left-1/2 -translate-x-1/2">
        <div className="w-24 h-4 bg-gray-400 mb-2"></div>
        <div className="w-3/4 h-6 bg-gray-400 mb-4"></div>
        <div className="w-20 h-5 bg-gray-400 ml-auto"></div>
      </div>
    </div>
  );
}
