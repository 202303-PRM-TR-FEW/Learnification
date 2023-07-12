import React from "react";
import Categories from "../../../Components/HomePage/Categories";
import FeaturedCourses from "../../../Components/HomePage/FeaturedCourses";
import MyLearning from "../../../Components/MyLearning";

export default function Home() {
  return (
    <>
      <div className="basis-full mt-2 px-6 sm:px-12 pb-20 bg-neutral-100">
        <FeaturedCourses />
        <Categories />
        <MyLearning />
      </div>
    </>
  );
}
