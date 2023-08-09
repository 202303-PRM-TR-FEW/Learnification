'use client'
import CourseView from "@/app/Components/CourseView";
import Image from "next/image";
import CourseOverview from "@/app/Components/CourseOverview";
import { useEffect, useState} from 'react'

function CourseViewImage({ imgUrl }) {
  return (
    <div className="relative w-full h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rounded-2xl">
      <Image
        src={imgUrl}
        width={1920}
        height={1080}
        alt="Course Image"
        className="w-full h-full object-cover rounded-2xl"
        sizes="(min-width: 1280px) 80vw, (min-width: 1024px) 50vw, (min-width: 768px) 80vw, 100vw"
      />
      
    </div>
  );
}

export default function SpecificCourse({ params: { courseId } }) {

  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch("/api/my-learning");
        if (response.ok) {
          const data = await response.json();
          const course = data.find(course => course._id === courseId);
          
          if (course) {
            setSelectedCourse(course);
          } else {
            console.log(`Course with ID ${courseId} not found`);
          }
          
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, [courseId]);

  return (
    <main className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-8 lg:p-0">
      <section className="lg:pt-6 lg:pr-4">
        <CourseView
          course={selectedCourse}
          backgroundImageElement={
            <CourseViewImage imgUrl={selectedCourse?.imageUrl} />
          }
        ></CourseView>
      </section>
      <section className="lg:h-screen bg-primary-white rounded-2xl lg:rounded-none mb-20 lg:mb-0 overflow-auto">
      <CourseOverview showCheckIcon={true} course={selectedCourse}/>
      </section>
    </main>
  );
}
