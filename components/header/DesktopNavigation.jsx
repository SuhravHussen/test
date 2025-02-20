import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <div className="hidden xl:flex gap-10 w-[70%] justify-center text-[#e4e4e4] font-semibold relative">
      <div className="flex items-center group relative cursor-pointer h-[75px]">
        Home
        <ChevronDown size={20} />
        <div className="absolute hidden group-hover:flex bg-white top-[75px]  rounded shadow-md">
          <ul className="flex flex-col gap-2 w-[200px] text-[--primary]  ">
            <Link
              href="/sds"
              className="px-4 py-2 border-b border-bottom-animation relative"
            >
              Home 1
            </Link>
            <Link
              href="/"
              className="px-4 py-2 border-b  border-bottom-animation relative"
            >
              Home 2
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center group relative cursor-pointer">
        About Us
      </div>
      <div className="flex items-center group relative cursor-pointer h-[75px]">
        Services
        <ChevronDown size={20} />
        <div className="absolute hidden group-hover:flex bg-white top-[75px]  rounded shadow-md">
          <ul className="flex flex-col gap-2 w-[200px] text-[--primary]  ">
            <Link
              href="/sds"
              className="px-4 py-2 border-b border-bottom-animation relative"
            >
              Service 1
            </Link>
            <Link
              href="/"
              className="px-4 py-2 border-b  border-bottom-animation relative"
            >
              Service 2
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center group relative cursor-pointer h-[75px]">
        Projects
        <ChevronDown size={20} />
        <div className="absolute hidden group-hover:flex bg-white top-[75px]  rounded shadow-md">
          <ul className="flex flex-col gap-2 w-[200px] text-[--primary]  ">
            <Link
              href="/sds"
              className="px-4 py-2 border-b border-bottom-animation relative"
            >
              Project 1
            </Link>
            <Link
              href="/"
              className="px-4 py-2 border-b  border-bottom-animation relative"
            >
              Project 2
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex items-center group relative cursor-pointer">
        Contact Us
      </div>
    </div>
  );
}
