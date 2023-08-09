"use client";
import { React, useEffect, useState } from "react";
import LearnUButton from "./LearnUButton";
import { useTranslations } from "next-intl";
import MyLearningCard from "./MyLearningCard";
import Link from "next/link";

export default function MyLearning() {
  const t = useTranslations("Home");
  const [myLearningCourses, setMyLearningCourses] = useState([]);

  useEffect(() => {
    async function fetchMyLearningCourses() {
      try {
        const response = await fetch("/api/home/my-learning");
        if (response.ok) {
          const courses = await response.json();
          console.log(courses);
          setMyLearningCourses(courses);
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchMyLearningCourses();
  }, []);

  return (
    <div>
      <h1 className="mt-10 mb-5 font-bold text-2xl text-gray-950">
        {t("MyLearning.title")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {myLearningCourses?.length === 0 ? (
          <p className="text-2xl text-red-500">No courses selected yet</p>
        ) : myLearningCourses?.length > 2 ? (
          <>
            <MyLearningCard course={myLearningCourses[0]} />
            <MyLearningCard course={myLearningCourses[1]} />
          </>
        ) : (
          myLearningCourses?.map((course, index) => (
            <MyLearningCard key={index} course={course} />
          ))
        )}
      </div>

      <div className="flex justify-center mt-5">
        <Link href={"/my-learning"}>
          <LearnUButton text={t("MyLearning.SeeAll")} paddingInline={60} />
        </Link>
      </div>
    </div>
  );
}


