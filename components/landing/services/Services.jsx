import BackgroundLines from "@/components/common/BackgroundLine";
import { ServicesCarousel } from "./ServicesCarousel";
import SlideUp from "@/components/common/SlideUpWrapper";
import AboutUs from "./AboutUs";

export default function Services() {
  return (
    <div className="w-full relative pt-20 pb-20 overflow-hidden ">
      <BackgroundLines />
      <SlideUp>
        <div className="flex flex-col items-center justify-center h-full gap-8  ">
          <p className="text-[--primary] text-xl font-bold border-b border-[--primary]">
            Our Solutions
          </p>
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="w-[90%] md:w-[65%] xl:w-[40%] text-center text-white">
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget
            fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis
            sapien, quis commodo libero.
          </p>

          <ServicesCarousel />
        </div>

        <AboutUs />
      </SlideUp>
    </div>
  );
}
