import FeaturedCourses from '@/app/Components/FeaturedCourses'
import MyLearning from '@/app/Components/MyLearning'
import React from 'react'
export default function Home() {
    return (
        <>
            <div className='basis-full mt-2 px-6 mb-4 sm:px-12'>
                <FeaturedCourses />
                <div className='mt-8'>
                    <MyLearning></MyLearning>
                </div>
            </div>

        </>
    )
}
