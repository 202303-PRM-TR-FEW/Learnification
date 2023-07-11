'use client';
import React, { useState } from "react";

export default function MyLearningCard({key, course, courseName, teacherName, percentage, image, t}){

    const [isBookmarked, setBookmarked] = useState([false, false]);
    const handleBookmarkClick = (index) => {
    const updatedBookmarks = [...isBookmarked];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setBookmarked(updatedBookmarks);
  };

    return (
        <div key={key} className="shadow rounded-2xl lg:p-3 py-2 md:mr-2 h-36 h-auto relative flex flex-col">
            <div className="flex">
                <div className="mr-5 h-auto w-1/2 md:w-1/4 lg:w-1/2">
                    <img src={image}
                    alt='Course Main Image'
                    className="w-full h-32 ml-2 md:w-44 md:h-32 lg:w-44 lg:mt-1 lg:h-32 rounded-2xl"
                    />
                </div>
                <div className="w-full">
                    <h6 className="text-s lg:text-l font-bold break-words mt-1 md:mt-3 mb-1">{courseName}</h6>
                    <p className="text-s lg:text-md text-zinc-600 mb-3">{teacherName}</p>
                    <div className="bg-stone-200 h-3 w-11/12 rounded-lg">
                      <div className="bg-blue-500 h-full rounded-lg mt-3" style={{ width: `${percentage}` }}></div>
                      <p className="font-bold text-zinc-500 mt-3">{percentage} {t('MyLearning.Complete')}</p>
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
}

