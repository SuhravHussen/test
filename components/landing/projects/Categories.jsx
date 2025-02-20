"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function Categories({ currentCategory }) {
  const categories = [
    "All",
    "UI-UX",
    "Developing",
    "Web Design",
    "Graphic Design",
  ];

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const newSearchParams = new URLSearchParams(searchParams);

  const handleCategoryClick = (category) => {
    newSearchParams.set("ProjCategory", category);
    replace(
      `${pathname}?${newSearchParams.toString()}`,
      { scroll: false },
      {
        shallow: true,
      }
    );
  };
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {categories.map((category, index) => (
        <button
          onClick={() => handleCategoryClick(category)}
          key={index}
          className={`${
            currentCategory === category && "bg-[--primary] text-white"
          } text-[--primary] text-sm font-bold border border-[--primary] px-6 py-2 rounded-full hover:bg-[--primary] hover:text-white transition-all duration-300`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
