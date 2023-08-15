"use client"
import React, { useEffect, useState } from "react";
import Tutor from "./Tutor";
import LearnUButton from "../LearnUButton";
import Icons from "../Icons";
import Image from "next/image";
import { useSession } from "next-auth/react";
import notify from "@/utils/notifications";
import 'react-toastify/dist/ReactToastify.css';
/**
 *
 * @param {object} course course object
 * @returns a featured course card
 */
export default function FeaturedCourse({ course, userSavedCourseIds }) {
  const isCourseSaved = userSavedCourseIds?.includes(course?._id)
  const [isSaved, setIsSaved] = useState(isCourseSaved);

  function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

if (hours < 1) {
      return `${minutes}m`;
    }

    return `${hours}h ${minutes}m`;
  }
  async function saveCourse() {
    const res = await fetch("/api/save-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course
      }),
    })
    if (!res.ok) {
      const { message } = await res.json()
      notify(message, "error")
      return
    }
    const { message, isCourseSaved } = await res.json()
    notify(message, "success")
    setIsSaved(isCourseSaved)
  }
  return (
    <>
      <div className="bg-primary-white rounded-2xl shadow-light-gray">
        {/* CARD HEAD */}
        <div className="p-2">
          <div
            className={`w-full h-[120px] bg-no-repeat bg-cover bg-center bg rounded-2xl relative`}
          >
            <Image
              src={course?.imageUrl}
              alt="Course Preview Image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="eager"
            />
            <div onClick={() => saveCourse()} className="absolute top-2 right-2 p-3 rounded-xl bg-slate-400 bg-opacity-30">
              <Icons.SaveIcon
                fill={isSaved ? "rgb(59, 130, 246)" : "white"}
                width={18} height={18} />
            </div>
            <div className="max-w-max flex items-center bg-primary-white rounded-[50px] p-1 pr-4 absolute shadow-light-gray -bottom-5 -z-0">
              <Tutor tutor={course?.tutor} />
            </div>
          </div>
        </div>
        {/* CARD HEAD ENDS */}

        {/* CARD BODY STARTS*/}
        <div className="mt-8 pb-3 px-4">
          <h3 className="mb-2">{course?.title}</h3>
          <div className="flex items-center max-2xl:flex-wrap gap-4 select-none">
            <p className="flex items-center gap-1">
              <span>
                <Icons.ClockIcon />
              </span>
              <span>{formatDuration(course?.duration)}</span>
            </p>
            <p className="flex items-center gap-1 mr-auto">
              <span>
                <Icons.StarIcon width={16} height={16} />
              </span>
              <span>{course?.rating && `${course.rating}/5`}</span>
            </p>
            <div className="max-2xl:w-full">
              <LearnUButton
                text={`$${course.price}`}
                bgColor="blue"
                borderRadius={20}
                paddingInline={25}
                paddingBlock={5}
                width="full"
              />
            </div>
          </div>
        </div>
        {/* CARD BODY ENDS*/}
      </div>
    </>
  );
}
