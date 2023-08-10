"use client";
import React from "react";
import LearnUButton from "./LearnUButton";
import { useTranslations } from "next-intl";
import MyLearningCard from "./MyLearningCard";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

const MyLearning = ({ myLearningCourses, isLoading }) => {
  const t = useTranslations("Home");
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <h1 className="mt-10 mb-5 font-bold text-2xl text-gray-950">
        {t("MyLearning.title")}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {myLearningCourses && myLearningCourses.length === 0 ? (
          <p className="text-2xl text-red-500">No courses selected yet</p>
        ) : myLearningCourses && myLearningCourses.length > 2 ? (
          <>
            <MyLearningCard course={myLearningCourses[0]} />
            <MyLearningCard course={myLearningCourses[1]} />
          </>
        ) : (
          myLearningCourses &&
          myLearningCourses.map((course, index) => (
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
};

export default MyLearning;
