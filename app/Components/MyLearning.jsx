import React from "react";
import LearnUButton from "./LearnUButton"
import { useTranslations } from "next-intl";
import MyLearningCard from './MyLearningCard'
import Link from "next/link";

export default function MyLearning() {
  const t = useTranslations("Home")

  const courses = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080",
      title: "Power BI",
      duration: "1h 53m",
      rating: 4.9,
      price: 24,
      tutor: {
        name: "John Eames",
        imageUrl:
          "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
      },
      description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      recommendedCourses: [],
      finishedPercentage: 50,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
      title: "Agile Project Management",
      duration: "59m",
      rating: 4.3,
      price: 18,
      tutor: {
        name: "Curt Rits",
        imageUrl:
          "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
      },
      recommendedCourses: [],
      description: "Learn how to use Agile Project Management, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      finishedPercentage: 24,
    },
  ]
  return (
    <div>
      <h1 className="mt-10 mb-5 font-bold text-2xl text-gray-950">{t('MyLearning.title')}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {courses.map((course, index) => {
          return (
            <MyLearningCard key={index} course={course} />
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