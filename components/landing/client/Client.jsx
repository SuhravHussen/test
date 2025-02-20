"use client";

import * as React from "react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.plugins()?.autoplay?.play();
    }

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="w-full bg-[--secondary]">
      <div className="py-20 bg-[--secondary] flex flex-col xl:flex-row max-w-7xl mx-auto gap-4">
        <div className="xl:w-[25%] w-[95%]  p-3 border-r-2 border-[--primary]">
          <p className="text-[--primary] font-bold border-b border-[--primary] max-w-max">
            Satisfied Clients
          </p>
          <h1 className="font-bold text-3xl mt-3">OUR CLIENTS</h1>
          <div className="mt-6">
            <button
              onClick={() => emblaApi.scrollPrev()}
              className="p-2 rounded-full bg-[var(--background)] font-bold"
            >
              <ChevronLeft strokeWidth={3} />
            </button>
            <button
              onClick={() => emblaApi.scrollNext()}
              className="p-2 rounded-full bg-[var(--background)] font-bold ml-2"
            >
              <ChevronRight strokeWidth={3} />
            </button>
          </div>
        </div>

        <div
          className="embla xl:w-[75%] w-[95%] mx-auto  items-center "
          ref={emblaRef}
        >
          <div className="embla__container items-center  ">
            <div className="embla__slide h-[120px] bg-[var(--background)] flex items-center justify-center rounded-xl ">
              <Image src="/partner-1.png" alt="" height={60} width={135} />
            </div>
            <div className="embla__slide    h-[120px]  bg-[var(--background)] flex items-center justify-center rounded-xl">
              <Image src="/partner-2.png" alt="" height={60} width={135} />
            </div>
            <div className="embla__slide  h-[120px] bg-[var(--background)] flex items-center justify-center rounded-xl    ">
              <Image src="/partner-3.png" alt="" height={60} width={135} />
            </div>
            <div className="embla__slide  h-[120px] bg-[var(--background)] flex items-center justify-center rounded-xl">
              <Image src="/partner-4.png" alt="" height={60} width={135} />
            </div>
            <div className="embla__slide     h-[120px] bg-[var(--background)] flex items-center justify-center rounded-xl">
              <Image src="/partner-5.png" alt="" height={60} width={135} />
            </div>
            <div className="embla__slide     h-[120px] bg-[var(--background)] flex items-center justify-center rounded-xl">
              <Image src="/partner-4.png" alt="" height={60} width={135} />
            </div>
            <div className="embla__slide  h-[120px] bg-[var(--background)] flex items-center justify-center rounded-xl    ">
              <Image src="/partner-3.png" alt="" height={60} width={135} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
