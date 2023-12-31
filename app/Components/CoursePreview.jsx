import React from 'react'
import Bookmark from './Bookmark'
import Image from 'next/image'

export default function CoursePreview({ course, className, handleClick, index, bookmarkRef, expandedCourseIndex, children }) {
    return (
        <div
            onClick={(e) => { handleClick(e, index) }}
            className={`${className}
            ${!(expandedCourseIndex && index) ? "" : expandedCourseIndex === index ? 'outline outline-2 outline-blue-500 opacity-100' : 'outline-0 opacity-70'}
            flex bg-primary-white p-2 pr-0 rounded-2xl relative cursor-pointer transition-opacity duration-300`}>
            <div
                className='basis-3/4 max-w-[200px] h-[125px] rounded-2xl'>
                <Image
                    src={course.imageUrl}
                    alt='Course Preview Image'
                    width={1920}
                    height={1080}
                    className='w-full h-full object-cover rounded-2xl aspect-square'
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                />
            </div>
            <div className='flex flex-col pl-4 p-2 basis-full'>
                <h2 className='inline-block max-w-max text-md sm:text-lg font-semibold cursor-text'>
                    {course.title}
                </h2>
                <h3 className='inline-block max-w-max text-sm text-gray-500 cursor-text'>
                    {course.tutor.name}
                </h3>
                {
                    children
                }
            </div>
            <div className='absolute top-2 right-2'>
                <Bookmark ref={bookmarkRef} />
            </div>
        </div>
    )
}
