import Image from 'next/image'
import React from 'react'
import Tutor from './HomePage/Tutor'
import Icons from './Icons'
export default function CourseView({ course }) {
    return (
        <div>
            <Image src={course.image} width={400} sizes='50wh' height={200} alt={course.courseName} className='w-full h-auto' />
            <div>
                <h1>
                    {course.courseName}
                </h1>
                <div className='max-w-max flex items-center bg-primary-white rounded-[50px] p-1 pr-4 shadow-light-gray'>
                    <Tutor tutor={course.tutor} />
                </div>
                <div>
                    <p className='flex items-center gap-1 mr-auto'>
                        <Icons.ClockIcon /> <span>{course.duration}</span>
                    </p>
                    <p className='flex items-center gap-1 mr-auto'>
                        <Icons.StarIcon empty width={16} height={16} /><span>{course.rating}/5</span>
                    </p>
                    <h2>
                        Course Description
                    </h2>
                    <p>
                        {course.description}
                    </p>
                </div>
            </div>
        </div >
    )
}
