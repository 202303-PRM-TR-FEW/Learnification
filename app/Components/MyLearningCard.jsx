"use client"
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import CoursePreview from "./CoursePreview";

export default function MyLearningCard({ key, course }) {
    const t = useTranslations("Home");
    const locale = useLocale();
    const bookmarkRef = React.useRef();
    function handleClick(e) {
        const isBookmark = e.target.outerHTML === bookmarkRef.current.innerHTML
        if (isBookmark) {
            return
        }
    }
    return (
        <CoursePreview
            bookmarkRef={bookmarkRef}
            key={key}
            course={course}
            handleClick={e => handleClick(e)}
        >
            <div className='mt-auto'>
                <div className="w-full h-2 rounded-lg flex bg-white-smoke">
                    <span className={`bg-primary-blue rounded-lg`}
                        style={{ width: `${course.finishedPercentage}%` }}
                    >
                    </span>
                </div>
                <p className="font-medium text-primary-gray mt-1">
                    {
                        locale === "en" ? `${course.finishedPercentage}% completed` : `%${course.finishedPercentage} tamamlandı`
                    }
                </p>
            </div>
        </CoursePreview >
    )
}

