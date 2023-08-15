"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import howtoux from "@/public/howtoux.jpeg";

export default function RecommendedForYou({ courses }) {
  const [phoneVersion, setPhoneVersion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < recommended.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPhoneVersion(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h3 className="font-semibold md:text-start">Recommended For You</h3>
      <div className="grid md:grid-cols-4 gap-x-3 w-full">
        {phoneVersion ? (
          <div className="flex justify-center items-center md:w-4/5 gap-x-3">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 mb-10 rounded-full"
              onClick={handleBack}
              disabled={currentIndex === 0}
            >
              &#x2190;
            </button>
            <div className="w-full flex justify-center max-w-md flex-col items-center ">
              <div className="rounded-2xl overflow-hidden w-full relative h-[170px] flex justify-center ">
                <Image
                  src={courses[currentIndex].imageUrl}
                  sizes="100vw"
                  alt="Recommended courses"
                />
              </div>
              <h2 className="font-semibold pt-3">
                {courses[currentIndex].title}
              </h2>
              <p className="text-sm">{courses[currentIndex].tutor.name}</p>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-black py-1 px-2 mb-10 rounded-full"
              onClick={handleNext}
              disabled={currentIndex === recommended.length - 1}
            >
              &#x2192;
            </button>
          </div>
        ) : (
          courses.map((course, index) => (
            <div key={index} className="lg:w-full py-3">
              <div className="rounded-2xl overflow-hidden relative w-full h-[120px]">
                <Image
                  src={course.imageUrl}
                  fill
                  sizes="100vw"
                  alt="courseed courses"
                />
              </div>
              <h2 className="font-semibold pt-3">{course.title}</h2>
              <p className="text-sm">{course.tutor.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
