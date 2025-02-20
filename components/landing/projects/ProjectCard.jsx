import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[385px] rounded-xl overflow-hidden cursor-pointer">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="rounded-xl hover:scale-110 transition-all duration-500"
      />

      <div className="bg-[--secondary] px-4 py-6 rounded-lg absolute bottom-4  w-[95%] left-1/2 -translate-x-1/2">
        <p className="border-b border-[--primary] max-w-max font-medium">
          {project.category}
        </p>
        <h1 className="text-2xl font-medium mt-2 line-clamp-1">
          {project.title}
        </h1>
        <div className="w-full flex justify-end mt-8">
          <Link
            href="/"
            className="circular-border  text-[17px] group-hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
