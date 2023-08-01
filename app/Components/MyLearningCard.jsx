'use client';
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export default function MyLearningCard({ key, course, courseName, teacherName, percentage, image }) {
    const t = useTranslations("Home");
    const [isBookmarked, setBookmarked] = useState([false, false]);
    const handleBookmarkClick = (index) => {
        const updatedBookmarks = [...isBookmarked];
        updatedBookmarks[index] = !updatedBookmarks[index];
        setBookmarked(updatedBookmarks);
    };

    return (
        <div key={key} className="bg-primary-white shadow-light-gray rounded-2xl lg:p-3 py-2 h-auto relative flex flex-col mx-2 md:mx-0 lg:mr-2">
            <div className="flex gap-x-2">
                <div className="h-auto min-w-[100px] w-full max-[767px]:max-w-[200px] md:w-[200px] lg:w-[400px] ml-2 md:ml-0">
                    <Image src={image}
                        alt='Course Preview Image'
                        className="w-full h-32 md:w-44 md:h-32 lg:w-full lg:mt-1 lg:h-32 rounded-2xl"
                    />
                </div>
                <div className="w-full flex flex-col justify-around md:justify-start md:gap-y-4">
                    <div>
                        <h6 className="text-s lg:text-l font-bold break-words mt-1 md:mt-3">{courseName}</h6>
                        <p className="text-s lg:text-md text-zinc-600">{teacherName}</p>
                    </div>
                    <div className="bg-stone-200 h-5 md:h-3 w-11/12 rounded-lg">
                        <div className="bg-blue-500 h-full rounded-lg flex justify-end" style={{ width: `${percentage}` }}><span className="md:hidden text-white text-end w-full pr-1 text-sm">{percentage}</span></div>
                        <p className="font-bold text-zinc-500 mt-3 hidden md:block">{percentage} {t('MyLearning.Complete')}</p>
                    </div>

                </div>
                <div className="absolute top-0 right-0 m-2 cursor-pointer hidden md:block">
                    <div className={`flex justify-center items-center w-9 h-9 p-0 overflow-hidden text-blue-600 bg-gray-300 rounded-lg border-0 ${isBookmarked[course.bookMark] ? "opacity-100" : "opacity-25"}`}
                        onClick={() => handleBookmarkClick(course.bookMark)}>
                        <svg className="w-4 h-4 overflow-visible opacity-100 z-1 fill-current" viewBox="0 0 384 512">
                            <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="self-center mt-3 w-full md:hidden">
                <div className={`flex justify-center items-center w-auto h-9 mx-2 overflow-hidden text-blue-950 bg-gray-300 rounded-lg border-0 ${isBookmarked[course.bookMark] ? "opacity-100" : "opacity-25"}`}
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

