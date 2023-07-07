import React from "react";
import Categories from "@/app/Components/HomePage/Categories";
import FeaturedCourses from "@/app/Components/HomePage/FeaturedCourses";

export default function Home() {
  return (
    <>
      <div className="basis-full mt-2 px-6 sm:px-12 bg-neutral-100">
        <FeaturedCourses />
        <Categories />
      </div>
    </>
  );
}
