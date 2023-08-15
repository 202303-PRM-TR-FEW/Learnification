"use client";
import CourseView from "@/app/Components/CourseView";
import Image from "next/image";
import CourseOverview from "@/app/Components/CourseOverview";
import { useEffect, useState } from "react";
import Loading from "@/app/Components/LoadingPage/Loading";
import ReactPlayer from "react-player";


function CourseVideo({ videoUrl }) {
  return (
    <div className="relative w-full h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rounded-2xl">
      <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
    </div>
  );
}

export default function SpecificCourse({ params: { courseId } }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState(null);
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch(`/api/my-learning/${courseId}`);
        if (response.ok) {
          const data = await response.json();
          setSelectedCourse(data);
          setIsLoading(false);
          setVideoUrl(data.sections[0].lessons[0].urls)
        } else {
          setIsLoading(false);
          console.error("Failed to fetch course");
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching course:", error);
      }
    }
    fetchCourses();
  }, [courseId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-8 lg:p-0">
          <section className="lg:pt-6 lg:pr-4">
            <CourseView
              course={selectedCourse}
              backgroundImageElement={
                <CourseVideo videoUrl={videoUrl} />
              }
            ></CourseView>
          </section>
          <section className="lg:h-screen bg-primary-white rounded-2xl lg:rounded-none mb-20 lg:mb-0 overflow-auto">
            <CourseOverview setVideoUrl={setVideoUrl} showCheckIcon={true} course={selectedCourse} />
          </section>
        </main>
      )}
    </>
  );
}
