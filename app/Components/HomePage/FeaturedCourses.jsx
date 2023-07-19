import React from "react";
import FeaturedCourse from "./FeaturedCourse";
import FeaturedCoursesHeader from "./FeaturedCoursesHeader";
import { getFeaturedCourses } from "@/utils/api";
import { headers } from "next/dist/client/components/headers";

export default async function FeaturedCourses() {
  const host = headers().get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const res = await getFeaturedCourses(host, protocol);
  const mockCourses = await res.json();
  return (
    <>
      <FeaturedCoursesHeader />
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
        {mockCourses.map((course, index) => (
          <FeaturedCourse course={course} key={index} />
        ))}
      </div>
    </>
  );
}
