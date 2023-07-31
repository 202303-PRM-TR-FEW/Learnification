import React from 'react'
import Bookmark from './Bookmark'

export default function CoursePreview({ course, className, handleClick, index, bookmarkRef, expandedCourseIndex, children }) {
    return (
        <div
            onClick={(e) => { handleClick(e, index) }}
            className={`${className} ${expandedCourseIndex === index ? 'outline outline-2 outline-blue-500 opacity-100' : 'outline-0 opacity-70'} flex bg-primary-white p-2 pr-0 rounded-2xl relative cursor-pointer transition-opacity duration-300`}>
            <div
                className='basis-3/4 w-[125px] h-[125px] bg-no-repeat bg-cover bg-center bg rounded-2xl'
                style={{ backgroundImage: `url(${course.imageUrl})` }}>
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
