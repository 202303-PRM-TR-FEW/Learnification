"use client";
import { useState } from "react";
import Icons from "./Icons";
import { useTranslations } from "next-intl";
import formatDuration from "@/utils/formatDuration";

export default function CourseOverview({ course, showCheckIcon = true }) {
  const t = useTranslations("CourseOverview");
  const [openLessons, setOpenLessons] = useState({});
  const handleLessonClick = (lessonId) => {
    setOpenLessons((prevState) => ({
      ...prevState,
      [lessonId]: !prevState[lessonId],
    }));
  };

  return (
    <ul className="text-gray-600 shadow rounded-lg p-2">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      {course?.sections.map((section, index) => (
        <li
          key={index}
          className="flex flex-col shadow rounded-3xl p-2 my-3 mx-6 overflow-hidden cursor-pointer"
          onClick={() => handleLessonClick(index)}
        >
          <div className="flex justify-between py-3 px-6">
            <h3 className="text-black flex font-bold">
              {showCheckIcon && <Icons.CheckIcon />}
              <span className="pl-2">
                {`${index + 1}. `}
                {section.title}
              </span>
            </h3>
            {openLessons[index] ? (
              <div className="relative top-5">
                <Icons.DownArrowIcon />
              </div>
            ) : (
              <div className="relative top-5">
                <Icons.RightArrowIcon />
              </div>
            )}
          </div>
          {openLessons[index] ? null : (
            <p className="pl-6 pb-3">
              {section.lessons.length > 1
                ? `${section.lessons.length} videos`
                : `${section.lessons.length} video`}
            </p>
          )}
          {openLessons[index] && (
            <div className="overflow-auto max-h-56">
              <ul className="">
                {section.lessons.map((lesson, index) => (
                  <li key={lesson._id} className="pl-6 my-4">
                    <div>
                      <h4 className="flex">
                        {showCheckIcon && <Icons.CheckIcon width={14} height={14} />}
                        <span className="pl-2">
                          {`${index + 1}. `}
                          {lesson.title}
                        </span>
                      </h4>
                      <p className="py-1">{formatDuration(lesson.duration, locale)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
