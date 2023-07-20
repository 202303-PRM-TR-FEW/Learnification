'use client'
import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import Icons from '../../../Components/Icons.jsx'
import { useTranslations } from 'next-intl'
import MyLearningCard from '@/app/Components/MyLearningCard.jsx'

export default function Layout({ children }) {
  const courses = [
    { courseName: 'Becoming A Photographer', teacherName: 'Clara Manning', percentage: '69%', image: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080', bookMark: 0 },
    { courseName: 'Design Thinking', teacherName: 'Chris Kinley', percentage: '27%', image: 'https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg', bookMark: 1 },
    { courseName: 'Becoming A Photographer', teacherName: 'Clara Manning', percentage: '69%', image: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080', bookMark: 0 },
    { courseName: 'Design Thinking', teacherName: 'Chris Kinley', percentage: '27%', image: 'https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg', bookMark: 1 }
  ];
  const t = useTranslations('MyLearning');
  const [isLaptopView, setIsLaptopView] = useState(true);
  const [expandedCourseIndex, setExpandedCourseIndex] = useState(null);

  const handleCourseClick = (e, index) => {
    e.preventDefault();
    setExpandedCourseIndex(index === expandedCourseIndex ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopView(window.innerWidth > 1279);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="w-full min-h-screen flex md:mx-12 md:pt-12 bg-white-smoke mt-12 md:mt-0">
      <div className={`flex flex-col basis-full ${isLaptopView ? 'sm:w-1/2' : 'w-full'}`}>
        <div className="max-xl:min-h-screen">
          <header className="flex justify-between items-center my-2">
            <h1 className="text-2xl">{t('title')}</h1>
            {isLaptopView && (
              <Link href="/statistics">
                <p className="flex gap-2">
                  <span>
                    <Icons.StatisticsIcon />
                  </span>
                  <span className="lg:mr-2">{t('statistics')}</span>
                </p>
              </Link>
            )}
          </header>
          <div className="flex flex-col gap-4">
            {courses.map((course, index) => (
              <div key={index} onClick={(e) => handleCourseClick(e, index)}>
                <Link href={`/my-learning/${index}`}>
                  <MyLearningCard
                    course={course}
                    courseName={course.courseName}
                    teacherName={course.teacherName}
                    percentage={course.percentage}
                    image={course.image}
                  />
                </Link>
                {expandedCourseIndex === index && (
                  <div className={isLaptopView ? 'hidden' : ''}>{children}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isLaptopView && (
        <div className="bg-white hidden xl:block rounded-t-2xl basis-full min-h-full">
          {children}
        </div>
      )}
    </main>
  );
}
