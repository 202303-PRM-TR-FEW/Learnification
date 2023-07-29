
import React from 'react'
import LearnUButton from '../LearnUButton'
import Bookmark from '../Bookmark'

export default function SavedCourseCard({ course, className, handleClick, index, buttonRef, bookmarkRef, expandedCourseIndex }) {
    return (
        <div
            onClick={(e) => { handleClick(e, index) }}
            className={`${className} ${expandedCourseIndex === index ? 'outline outline-2 outline-blue-500 opacity-100' : 'outline-0 opacity-70'} flex bg-primary-white pl-2 py-2 pr-4 rounded-2xl relative cursor-pointer`}>
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
                <div className='mt-auto'>
                    <LearnUButton ref={buttonRef} className={'max-md:w-full'} text={'BUY'} paddingInline={15} paddingBlock={0} />
                </div>
            </div>
            <div className='ml-auto'>
                <Bookmark ref={bookmarkRef} />
            </div>
        </div>
    )
}
