import CourseView from '@/app/Components/CourseView'
import LearnUButton from '@/app/Components/LearnUButton'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function MyLearningSide({ params }) {
    const courses = [
        {
            duration: "1h 30m",
            rating: 4.5,
            courseName: "Becoming A Photographer", tutor: {
                name: "John Eames",
                imageUrl:
                    "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
            }, percentage: "69%", image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080", bookMark: 0, description: "This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding."
        },
        {
            duration: "1h 30m",
            rating: 4.5,
            courseName: "Design Thinking", tutor: {
                name: "John Eames",
                imageUrl:
                    "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
            }, percentage: "27%", image: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg", bookMark: 1, description: "In this course you will learn how to build iOS app. We will go through the whole process beginning with the first line of code, managing the user interface storyboard and creating logic."
        },
        {
            duration: "1h 30m",
            rating: 4.5,
            courseName: "Becoming A Photographer", tutor: {
                name: "John Eames",
                imageUrl:
                    "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
            }, percentage: "69%", image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080", bookMark: 0, description: "This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding."
        },
        {
            duration: "1h 30m",
            rating: 4.5,
            courseName: "Design Thinking", tutor: {
                name: "John Eames",
                imageUrl:
                    "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
            }, percentage: "27%", image: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg", bookMark: 1, description: "This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding."
        }
    ]
    const course = courses[params.id]
    const t = useTranslations("MyLearning")
    return (
        <>
            {course && (
                <CourseView course={course} />
            )}
            <div className='flex gap-2 px-8'>
                <LearnUButton text={t("Review Course")} bgColor={"white"} width={"full"} />
                <LearnUButton text={t("Continue Learning")} width={"full"} />
            </div>
        </>
    )
}
