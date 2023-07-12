import React from "react";
import LearnUButton from "./LearnUButton"
import { useTranslations } from "next-intl";
import MyLearningCard from './MyLearningCard'
import Link from "next/link";

export default function MyLearning() {
  const t = useTranslations("Home")

  const courses = [
    { courseName: "Becoming A Photographer", teacherName: "Clara Manning", percentage: "69%", image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080", bookMark: 0 },
    { courseName: "Design Thinking", teacherName: "Chris Kinley", percentage: "27%", image: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg", bookMark: 1 }
  ]
  return (
    <div>
      <h1 className="mt-10 mb-5 font-bold text-2xl text-gray-950">{t('MyLearning.title')}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {courses.map((course, index) => {
          return (
            <MyLearningCard key={index} course={course} courseName={course.courseName} teacherName={course.teacherName} percentage={course.percentage} image={course.image} />
          )
        })}
      </div>
      <div className="flex justify-center mt-5">
        <Link href={"/my-learning"}>
          <LearnUButton text={t('MyLearning.SeeAll')} paddingInline={60} />
        </Link>
      </div>
    </div>
  );
}