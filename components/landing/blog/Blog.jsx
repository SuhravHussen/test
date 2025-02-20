import BackgroundLines from "@/components/common/BackgroundLine";
import React, { Suspense } from "react";
import BlogList from "./BlogList";
import BlogCardSkeleton from "@/components/common/blog/BlogCardSkeleton";

export default function Blog() {
  return (
    <div className="pt-20 pb-56 relative ">
      <BackgroundLines />
      <div className="flex flex-col items-center justify-center h-full gap-6  ">
        <p className="text-[--primary] text-xl font-bold border-b border-[--primary]">
          All Blogs
        </p>
        <h1 className="text-4xl font-bold text-white">Latest Posts</h1>
        <p className="w-[90%] md:w-[65%] xl:w-[40%] text-center text-white">
          Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
          porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis
          commodo libero.
        </p>

        <Suspense
          fallback={
            <div className="flex flex-wrap gap-4 justify-center items-center max-w-screen-xl mx-auto blog-card">
              {Array.from({ length: 6 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          }
        >
          <BlogList />
        </Suspense>
      </div>
    </div>
  );
}
