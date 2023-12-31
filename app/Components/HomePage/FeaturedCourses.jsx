import React, { Suspense } from "react";
import FeaturedCourse from "./FeaturedCourse";
import FeaturedCoursesHeader from "./FeaturedCoursesHeader";
import { getFeaturedCourses, getFeaturedCoursesWOEmail } from "@/utils/api";
import { headers } from "next/dist/client/components/headers";
import { getServerSession } from "next-auth";

export default async function FeaturedCourses() {
  const session = await getServerSession()
  const user = session?.user;
  const host = headers().get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const res = user ? await getFeaturedCourses(host, protocol, user.email) : await getFeaturedCoursesWOEmail(host, protocol);
  const savedCourseApiUrl = `${protocol}://${host}/api/saved-courses`
  let { courses: featuredCourses } = await res.json();
  let userSavedCourseIds = []
  if (user) {
    const savedCourseResponse = await fetch(savedCourseApiUrl, {
      method: 'POST',
      body: JSON.stringify({ email: user.email }),
    })
    userSavedCourseIds = await savedCourseResponse.json()
  }
  function removePurchasedCourse(courseId) {
    const updatedCourses = featuredCourses.filter(course => course.id !== courseId)
    featuredCourses = updatedCourses
  }
  return (
    <>
      <FeaturedCoursesHeader />
      {
        featuredCourses && (
          <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-2 sm:gap-4 2xl:gap-6">
            {featuredCourses.map((course, index) => (
              <FeaturedCourse userSavedCourseIds={userSavedCourseIds} course={course} key={index} />
            ))}
          </div>
        )
      }
    </>
  );
}
