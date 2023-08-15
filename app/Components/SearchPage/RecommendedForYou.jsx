"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import howtoux from "@/public/howtoux.jpeg";

export default function RecommendedForYou({ courses }) {
  const [phoneVersion, setPhoneVersion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < courses.length - 1) {
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
