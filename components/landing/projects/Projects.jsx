import Categories from "./Categories";

import BackgroundLines from "@/components/common/BackgroundLine";
import ProjectList from "./ProjectList";
import { Suspense } from "react";
import ProjectCardSkeleton from "@/components/common/ProjectCardSkeleton";
export default function Projects({ category }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 py-20   relative">
      <BackgroundLines />
      <p className="text-[--primary] text-xl font-bold border-b border-[--primary] max-w-max">
        Case Study
      </p>
      <h1 className="text-4xl font-bold ">Projects</h1>
      <p className="w-[90%] md:w-[65%] xl:w-[40%] text-center">
        Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
        porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis
        commodo libero.
      </p>

      <Categories currentCategory={category} />

      <Suspense
        fallback={
          <div className="flex flex-wrap gap-4 justify-center items-center max-w-screen-xl mt-8 ">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        }
        key={category}
      >
        <ProjectList category={category} />
      </Suspense>
    </div>
  );
}
