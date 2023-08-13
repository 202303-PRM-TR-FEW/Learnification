"use client";
import React from "react";
import LearnUButton from "./LearnUButton";
import { useTranslations } from "next-intl";
import MyLearningCard from "./MyLearningCard";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

const MyLearning = ({ myLearningCourses, isLoading, idCourses }) => {
  const t = useTranslations("Home");
  const idArray = [];
  idCourses.map((id) => idArray.push(id._id))
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
          <p className="text-2xl text-red-500">
            {t("MyLearning.NotFound")}
          </p>
        ) : myLearningCourses && myLearningCourses.length > 2 ? (
          <>
            <Link href={`spesific-course/${myLearningCourses[0]?._id}`}>
              <MyLearningCard course={myLearningCourses[0]} />
            </Link>
            <Link href={`spesific-course/${myLearningCourses[1]?._id}`}>
              <MyLearningCard course={myLearningCourses[1]} />
            </Link>
          </>
        ) : (
          myLearningCourses &&
          myLearningCourses.map((course, index) => (
            <Link href={`spesific-course/${course?._id}`} key={index}>
              <MyLearningCard course={course} />
            </Link>
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
