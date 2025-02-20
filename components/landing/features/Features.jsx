import Image from "next/image";
import FeatureCard from "./FeatureCard";
import SlideUp from "@/components/common/SlideUpWrapper";

export default function Features() {
  return (
    <div className="w-full bg-[--secondary] flex flex-col justify-center items-center gap-4 pt-20 pb-20">
      <p className="text-[--primary] text-xl font-bold border-b border-[--primary] max-w-max">
        Care Study
      </p>
      <h1 className="text-4xl font-bold text-white">Features</h1>
      <p className="text-center text-white max-w-[600px]">
        Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
        porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis
        commodo libero.
      </p>
      <div className="flex   flex-wrap justify-center items-center gap-8 mt-10">
        <SlideUp delay="0">
          <FeatureCard
            img="/feature-icon-1.png"
            title="150+"
            description="Project Completed"
          />
        </SlideUp>
        <SlideUp delay="200">
          <FeatureCard
            img="/feature-icon-2.png"
            title="250+"
            description="Satisfied Clients"
          />
        </SlideUp>
        <SlideUp delay="500">
          <FeatureCard
            img="/feature-icon-3.png"
            title="10+"
            description="Expert Team"
          />
        </SlideUp>
        <SlideUp delay="700">
          <FeatureCard
            img="/feature-icon-1.png"
            title="50+"
            description="Winning Awards"
          />
        </SlideUp>
      </div>
    </div>
  );
}
