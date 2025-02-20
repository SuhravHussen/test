import Image from "next/image";
import React from "react";

export default function FeatureCard({ img, title, description }) {
  return (
    <div className="bg-[--background] rounded-xl text-white  justify-center items-center   skew-y-[-5deg] group hover:skew-y-[0deg] transition-all duration-500 min-w-[315px]">
      <div className="skew-y-[5deg] py-10 px-16 flex flex-col gap-4 justify-center items-center w-full group-hover:skew-y-[0deg] transition-all duration-500">
        <Image src={img} alt={title} width={100} height={100} />

        <p className="text-4xl font-bold">{title}</p>
        <p className="text-xl font-medium">{description}</p>
      </div>
    </div>
  );
}
