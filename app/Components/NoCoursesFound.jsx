import React from "react";
import LearnUButton from "./LearnUButton";
import Icons from "./Icons";
import Link from "next-intl/link";

const NoCoursesFound = () => {
  return (
    <main className="mb-20 mx-4">
      <div className="w-full shadow-light-gray rounded-[50px] grid lg:grid-cols-2">
        <Icons.NoCourseIcon className="w-full max-lg:max-w-[400px] 2xl:max-h-[600px] 2xl:max-w-[600px] aspect-square" />
        <div className="basis-full my-4 mx-4 text-center lg:text-left lg:pl-4 ">
          <h1 className="font-bold text-3xl mt-8">
            Oops!{" "}
            <span className="text-xl">
              It seems you haven't purchased or saved any courses yet.
            </span>{" "}
          </h1>
          <p className="mt-8 pb-8 text-xl">
            Explore our Home Page to discover our featured courses tailored for
            students, professionals, and lifelong learners.
          </p>
          <Link href="/home"> <LearnUButton text="Home" className="w-full" /></Link>
          <p className="mt-8 pb-8 text-xl">
            Head over to the Search Page to find flexible and accessible online
            courses that perfectly fit your needs.
          </p>
          <Link href="/search"><LearnUButton text="Search" className="w-full" /></Link>
        </div>
      </div>
    </main>
  );
};

export default NoCoursesFound;
