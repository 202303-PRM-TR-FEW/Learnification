'use client';
import React, { useState } from "react";
import LearnUButton from "./LearnUButton"
import { useTranslations } from "next-intl";

export default function MyLearning() {
  const [isBookmarked, setBookmarked] = useState([false, false]);

  const handleBookmarkClick = (index) => {
    const updatedBookmarks = [...isBookmarked];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setBookmarked(updatedBookmarks);
  };

  const t = useTranslations("Home")

  const courses = [
    {courseName: `${t('MyLearning.BecomingAPhotographer')}`, teacherName: "Clara Manning", percentage: "69%", image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080", bookMark: 0},
    {courseName: `${t('MyLearning.DesignThinking')}` ,teacherName: "Chris Kinley",percentage: "27%", image: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg", bookMark: 1}
  ]

  

  return (
    <div>
      <h1 className="mt-10 mb-5 font-bold text-2xl text-gray-950">{t('MyLearning.title')}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {courses.map((course, index)=>{
            return (
                <div key={index} className="shadow rounded-2xl lg:p-3 py-2 md:mr-2 h-36 h-auto relative flex flex-col">
                    <div className="flex">
                        <div className="mr-5 h-auto w-1/2 md:w-1/4 lg:w-1/2">
                            <img src={course.image}
                            alt='Course Main Image'
                            className="w-full h-32 ml-2 md:w-44 md:h-32 lg:w-44 lg:mt-1 lg:h-32 rounded-2xl"
                            />
                        </div>
                        <div className="w-full">
                            <h6 className="text-s lg:text-l font-bold break-words mt-1 md:mt-3 mb-1">{course.courseName}</h6>
                            <p className="text-s lg:text-md text-zinc-600 mb-3">{course.teacherName}</p>
                            <div className="bg-stone-200 h-3 w-11/12 rounded-lg">
                              <div className="bg-blue-500 h-full rounded-lg mt-3" style={{ width: `${course.percentage}` }}></div>
                              <p className="font-bold text-zinc-500 mt-3">{course.percentage} {t('MyLearning.Complete')}</p>
                            </div>
                            
                        </div>
                        <div className="absolute top-0 right-0 m-2 cursor-pointer hidden md:block">
                            <div className={`flex justify-center items-center w-9 h-9 p-0 overflow-hidden text-blue-600 bg-gray-300 rounded-lg border-0 ${
                                isBookmarked[course.bookMark] ? "opacity-100" : "opacity-25"}`}
                                onClick={() => handleBookmarkClick(course.bookMark)}>
                                    <svg className="w-4 h-4 overflow-visible opacity-100 z-1 fill-current" viewBox="0 0 384 512">
                                        <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
                                    </svg>
                            </div>
                        </div>
                    </div>
                    <div className="self-center mt-3 w-full md:hidden">
                        <div className={`flex justify-center items-center w-auto h-9 mx-2 overflow-hidden text-blue-950 bg-gray-300 rounded-lg border-0 ${
                            isBookmarked[course.bookMark] ? "opacity-100" : "opacity-25"}`}
                            onClick={() => handleBookmarkClick(course.bookMark)}>
                                <p className="mr-2">{t('MyLearning.Save')}</p>
                                <svg className="w-4 h-4 overflow-visible opacity-100 z-1 fill-current" viewBox="0 0 384 512">
                                    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
                                </svg>
                            </div>
                    </div>
                </div>
                )
            })}
      </div>
      <div className="flex justify-center mt-5">
        <LearnUButton text={t('MyLearning.SeeAll')} paddingInline={60} />
      </div>
    </div>
  );
}