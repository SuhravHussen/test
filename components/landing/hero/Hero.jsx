import Link from "next/link";
import Links from "./Links";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[100dvh] overflow-hidden bg-[--secondary] bg-[url('/hero.png')] bg-cover  flex flex-col-reverse xl:flex-row items-center">
      <Links />
      <div className="w-full xl:w-[40%] h-full flex flex-col items-start justify-center p-4 xl:p-0">
        <p className="text-[#e4e4e4] text-[clamp(35px,5vw,52px)] font-bold">
          INTELLIZLAB
        </p>
        <p className=" text-[clamp(35px,5vw,52px)] font-bold text-stroke tracking-wider">
          IT AGENCY
        </p>
        <p className="text-[#e4e4e4]  w-[90%] xl:w-[70%]  mt-10">
          Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
          porttitor. ol Duis a orci nunc. Suspendisse ac convallis sapien, quis
          commodo libero. Donec nec dui luctus, pellentesque lacus sed, mollis
          leo.
        </p>

        <div className="flex gap-4 mt-10">
          <Link
            href="/about-us"
            className="text-[#e4e4e4] animated-button px-6 py-4 font-semibold  text-[17px] rounded"
          >
            About Us
          </Link>
          <Link
            href="/about-us"
            className="text-[#e4e4e4] animated-button px-6 py-4 font-semibold  text-[17px] rounded"
          >
            See Projects
          </Link>
        </div>
      </div>

      <div className="hidden xl:block   ">
        <Image
          src="/hero-vector.png"
          alt="Hero Image"
          width={500}
          height={500}
          className=" rounded-tl-3xl"
        />
      </div>
    </div>
  );
}
