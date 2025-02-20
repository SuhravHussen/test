import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto mt-20 lg:mt-40  relative overflow-hidden flex flex-col-reverse lg:flex-row p-2">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-10 lg:mt-0 text-white">
        <p className="text-[--primary] text-lg lg:text-xl font-bold border-b border-[--primary] max-w-max mb-[-15px]">
          Get to know{" "}
        </p>
        <h1 className="font-bold text-3xl lg:text-4xl">About Us</h1>
        <h2 className="font-medium text-2xl  lg:text-3xl ">
          We do design, code & develop Software finally launch.
        </h2>
        <p>
          Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.
          Class onlin aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos only himenaeos. Praesent nec neque at dolor
          venenatis consectetur eu quis ex. the Donec lacinia placerat felis non
          aliquam.
        </p>

        <div className="flex flex-col gap-4 mx-auto lg:mx-0 w-[95%] px-8 py-4 shadow-lg border-corner relative text-white bg-[--secondary] rounded-[20px] my-10">
          <div className="flex w-full justify-between">
            <p className="font-bold text-2xl">Intellizlab</p>
            <p className="font-bold text-2xl">#1</p>
          </div>
          <p className="font-medium text-2xl tracking-wider">
            Best Creative IT Agency And Solutions
          </p>
          <p className="font-bold mt-[-15px] text-2xl tracking-wider text-[--primary]">
            Since 2025.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative">
        <div className="lg:rounded-tl-3xl rounded-2xl overflow-hidden">
          <Image
            src="/about-baner-1.jpg"
            alt="about us"
            width={636}
            height={446}
            className="lg:rounded-tl-3xl rounded-2xl w-full "
          />
        </div>
        <div className="lg:absolute lg:bottom-[48px] lg:right-0 lg:border-t-8 lg:border-l-8  border-white rounded-2xl mt-8 lg:mt-0">
          <Image
            src="/about-baner-2.jpg"
            alt="about us"
            width={210}
            height={304}
            className="rounded-2xl w-full lg:w-[210px] lg:h-[304px]"
          />
        </div>
      </div>
    </div>
  );
}
