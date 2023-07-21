import React from 'react'
import LearnUButton from '../LearnUButton'
import Bookmark from '../Bookmark'

export default function SavedCourseCard({ course, className }) {
    return (
        <div className={`${className} flex bg-primary-white pl-2 py-2 pr-4 rounded-2xl relative`}>
            <div
                className='basis-3/4 w-[125px] h-[125px] bg-no-repeat bg-cover bg-center bg rounded-2xl'
                style={{ backgroundImage: `url(${course.imageUrl})` }}>
            </div>
            <div className='flex flex-col pl-4 p-2 basis-full'>
                <h2 className='text-md sm:text-lg font-semibold'>
                    {course.title}
                </h2>
                <h3 className='text-sm text-gray-500'>
                    {course.tutorName}
                </h3>
                <div className='mt-auto'>
                    <LearnUButton className={'max-md:w-full'} text={'BUY'} paddingInline={15} paddingBlock={0} />
                </div>
            </div>
            <div className='ml-auto'>
                <Bookmark />
            </div>
        </div>
    )
}
