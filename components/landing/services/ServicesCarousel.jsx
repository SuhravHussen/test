"use client";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WebDesignIcon from "../../../public/service-icon-1.png";
import UIUXIcon from "../../../public/service-icon-2.png";
import SoftwareDevelopmentIcon from "../../../public/service-icon-3.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ServicesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const services = [
    {
      icon: WebDesignIcon,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas.",
    },
    {
      icon: UIUXIcon,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas.",
    },
    {
      icon: SoftwareDevelopmentIcon,
      title: "Software Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas.",
    },
    {
      icon: UIUXIcon,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas.",
    },
  ];

  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full max-w-[70%] md:max-w-xl lg:max-w-5xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 ">
              <Card className="group shadow-lg text-white border-0 bg-[--secondary]  transition-all duration-700 card-hover">
                <CardContent className="flex flex-col aspect-square items-center  p-6 gap-4">
                  <div className="flex items-center justify-between w-full ">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={90}
                      height={82}
                    />
                    <p className="text-stroke text-5xl font-bold ">
                      0{index + 1}
                    </p>
                  </div>

                  <div className="flex flex-col items-start justify-center h-[50%] group-hover:text-white">
                    <h1 className="text-2xl font-medium">{service.title}</h1>
                    <p className="line-clamp-3">{service.description}</p>
                  </div>
                  <div className="w-full flex justify-end mt-8">
                    <Link
                      href="/"
                      className="circular-border  text-[17px] group-hover:text-white"
                    >
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-[--secondary]" />
      <CarouselNext className="bg-[--secondary]" />
    </Carousel>
  );
}
