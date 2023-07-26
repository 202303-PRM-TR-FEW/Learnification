import React from 'react'
import Tutor from './HomePage/Tutor'
import Icons from './Icons'
import { useTranslations } from 'next-intl'
export default function CourseView({ course, children }) {
    const t = useTranslations("MyLearning")
    return (
        <>
            {/* <Image src={course.image} width={400} sizes='100wh' height={400} alt={course.courseName} className='w-full h-auto rounded-2xl' /> */}
            <div
                className='relative w-full min-h-[200px] xl:h-[300px] rounded-2xl bg-no-repeat bg-cover bg-center'
                style={{ backgroundImage: `url(${course.imageUrl})` }}
            >
            </div>
            <div className='p-8'>
                <h1 className='sm:text-2xl font-[500]'>
                    {course.title}
                </h1>
                <div className='max-w-max flex items-center bg-primary-white rounded-[50px] p-1 pr-4 shadow-light-gray my-4'>
                    <Tutor tutor={course.tutor} />
                </div>
                <div className='text-gray-500 mb-4'>
                    <p className='flex items-center gap-1 mr-auto'>
                        <Icons.ClockIcon /> <span>{course.duration}</span>
                    </p>
                    <p className='flex items-center gap-1 mr-auto'>
                        <Icons.StarIcon empty width={16} height={16} /><span>{course.rating}/5</span>
                    </p>
                </div>
                <h2 className='font-normal sm:text-xl text-black'>
                    {
                        t("Course Description")
                    }
                </h2>
                <p className='text-gray-500'>
                    {course.description}
                </p>
            </div>
            {
                children
            }
        </>
    )
}
