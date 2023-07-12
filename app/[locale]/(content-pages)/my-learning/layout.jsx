import React from 'react'
import Link from 'next/link'
import Icons from '../../../Components/Icons.jsx'
import { useTranslations } from 'next-intl'
import MyLearningCard from '@/app/Components/MyLearningCard.jsx'
export default function Layout({ children }) {
    const courses = [
        { courseName: "Becoming A Photographer", teacherName: "Clara Manning", percentage: "69%", image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080", bookMark: 0 },
        { courseName: "Design Thinking", teacherName: "Chris Kinley", percentage: "27%", image: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg", bookMark: 1 },
        { courseName: "Becoming A Photographer", teacherName: "Clara Manning", percentage: "69%", image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080", bookMark: 0 },
        { courseName: "Design Thinking", teacherName: "Chris Kinley", percentage: "27%", image: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg", bookMark: 1 }
    ]
    const t = useTranslations('MyLearning')
    return (
        <main className='w-full flex md:mx-12 md:my-4'>
            <div className='flex flex-col sm:w-1/2 '>
                <header className='flex justify-between items-center my-2'>
                    <h1 className='text-2xl'>
                        {t('title')}
                    </h1>
                    <Link href='/statistics'>
                        <p className='flex gap-2'>
                            <span>
                                <Icons.StatisticsIcon />
                            </span>
                            <span>
                                {t('statistics')}
                            </span>
                        </p>
                    </Link>
                </header>
                <div className='flex flex-col gap-4'>
                    {courses.map((course, index) => (
                        <Link key={index} href={`/my-learning/${index}`}>
                            <MyLearningCard course={course} courseName={course.courseName} teacherName={course.teacherName} percentage={course.percentage} image={course.image} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className='basis-full'>
                {children}
            </div>
        </main>
    )
}
