import React from "react";
import Tutor from "./Tutor";
import LearnUButton from "../LearnUButton";
import Icons from "../Icons";

/**
 *
 * @param {object} course course object
 * @returns a featured course card
 */
export default function FeaturedCourse({ course }) {
  return (
    <>
      <div className="bg-primary-white rounded-2xl shadow-light-gray">
        {/* CARD HEAD */}
        <div className="p-2">
          <div
            className={`p-2 w-full min-h-[100px] bg-no-repeat bg-cover bg-center bg rounded-2xl relative`}
            style={{ backgroundImage: `url(${course.imageUrl})` }}
          >
            <div className="max-w-max flex items-center bg-primary-white rounded-[50px] p-1 pr-4 absolute shadow-light-gray -bottom-5 -z-0">
              <Tutor tutor={course?.tutor} />
            </div>

            <div className="absolute right-4 p-3 bg-primary-saved rounded-xl">
              <Icons.SaveIcon />
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
              <span>{course?.duration}</span>
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
