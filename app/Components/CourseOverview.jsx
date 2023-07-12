"use client";
import { useState } from "react"; 
import CourseDetails from "./CourseDetails";
import Icons from "./Icons";
import { useTranslations } from "next-intl";

export default function CourseOverview() {
  const lessons = CourseDetails();
  const t = useTranslations("CourseOverview")

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
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          className="flex flex-col shadow rounded-lg p-2 m-6 overflow-hidden"
          onClick={() => handleLessonClick(lesson.id)}
        >
          <div className="flex justify-between">
           
            <h3 className="text-black flex"> <Icons.CheckIcon/> <span className="pl-2"> {lesson.id > 0 && `${lesson.id}. `}
                        {lesson.title}</span></h3>
            {openLessons[lesson.id] ? (
              <Icons.DownArrowIcon />
            ) : (
              <Icons.RightArrowIcon />
            )}
          </div>
          <div className="overflow-auto max-h-56">
            {openLessons[lesson.id] && (
              <ul className="">
                {lesson.videos.map((video) => (
                  <li key={video.id} className="p-1 my-4">
                    <div>
                      <h4 className="flex"><Icons.CheckIcon width={14} height={14}/> <span className="pl-2">
                        {lesson.id > 0 && `${video.id}. `}
                        {video.title}
                        </span> </h4>
                      <p className="py-1">{video.duration}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

