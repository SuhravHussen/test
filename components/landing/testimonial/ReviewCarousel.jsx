"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ilham Yuda",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested in treatment.We are providing the best and suitable home insurance services for the people who are interested in treatment.",
  },
  {
    id: 2,
    name: "Ilham Yuda",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested to treatment.",
  },
  {
    id: 3,
    name: "Ilham Yuda",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested in treatment.",
  },
  {
    id: 4,
    name: "Ilham Yuda",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested to treatment.",
  },
  {
    id: 5,
    name: "Ilham Yuda",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested in treatment.",
  },
  {
    id: 6,
    name: "Ilham Yuda",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested to treatment.",
  },
  {
    id: 7,
    name: "Ilham Yuda",
    role: "Businessman",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    feedback:
      "We are providing the best and suitable home insurance services for the people who are interested in treatment.",
  },
];

export default function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    axis: "y",
  });

  const [centerSlide, setCenterSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCenterSlide(emblaApi.selectedScrollSnap()); // Get the index of the centered slide
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial center slide

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="review-embla w-full ">
      <div className="review-embla__container  relative select-none   ">
        {testimonials.map((testimonial, index) => {
          const isPrev =
            index ===
            (centerSlide - 1 + testimonials.length) % testimonials.length;
          const isNext = index === (centerSlide + 1) % testimonials.length;

          return (
            <div
              key={testimonial.id}
              className={`review-embla__slide w-[90%] lg:w-[70%] p-7 rounded-2xl bg-[--secondary] relative flex flex-col gap-4 transition-opacity duration-700 self-center
                ${
                  centerSlide === index
                    ? `opacity-100 z-10 ${
                        index !== 0
                          ? "!scale-110 lg:translate-x-[-50px] transition-transform duration-700"
                          : ""
                      }`
                    : "opacity-50"
                }
                ${isPrev ? "top-[20px]" : ""}
                ${isNext ? "top-[-20px]" : ""}
              `}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={45}
                height={45}
                className="absolute top-[-15px] left-[-15px] border-2 border-white rounded-full"
              />
              <p className="line-clamp-3 ">{testimonial.feedback}</p>
              <div className="w-full">
                <p>{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
