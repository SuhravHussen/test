"use client";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="xl:hidden relative">
      {/* Menu Button */}
      <button onClick={toggleMenu} className="p-2   text-[--primary]">
        <Menu size={30} />
      </button>

      {/* Slide Menu */}
      <div
        className={` fixed top-0 left-0 h-full w-64  bg-white text-[--secondary]  transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between py-4 border-b border-[--primary]">
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            width={140}
            height={75}
            // className="bg-red-400"
          />
          <button
            className="p-2 rounded-full bg-[--primary] text-white mr-4"
            onClick={toggleMenu}
          >
            <X size={20} strokeWidth={4} />
          </button>
        </div>
        <Accordion type="single" collapsible className="w-full p-2 ">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-base font-semibold hover:text-[--primary]">
              Home
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex flex-col  px-4 gap-2">
                <Link
                  href="/sds"
                  className=" cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary] "
                >
                  Home 1
                </Link>
                <Separator />
                <Link
                  href="/sds"
                  className="cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary] "
                >
                  Home 2
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <Link
              href="/about"
              className="py-4 inline-block w-full cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary]"
            >
              About Us
            </Link>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline text-base font-semibold hover:text-[--primary]">
              Services
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex flex-col  px-4 gap-2">
                <Link
                  href="/sds"
                  className=" cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary] "
                >
                  Service 1
                </Link>
                <Separator />
                <Link
                  href="/sds"
                  className="cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary] "
                >
                  Service 2
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <Link
              href="/contact"
              className="py-4 inline-block w-full cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary]"
            >
              Contact Us
            </Link>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline text-base font-semibold hover:text-[--primary]">
              Projects
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full flex flex-col  px-4 gap-2">
                <Link
                  href="/sds"
                  className=" cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary] "
                >
                  Project 1
                </Link>
                <Separator />
                <Link
                  href="/sds"
                  className="cursor-pointer hover:no-underline text-base font-semibold hover:text-[--primary] "
                >
                  Project 2
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <button className="rounded text-white animated-button px-8 py-4  font-semibold  text-[17px] mx-auto block  text-center mt-8">
          Get A Quote
        </button>
      </div>
    </div>
  );
};

export default SlideMenu;
