import CourseOverview from '@/app/Components/CourseOverview'
import React from 'react'

export default async function page() {
    const data = await getServerSession()
    console.log(data)
    if (!data) {
        redirect('/sign-in?callbackUrl=/course-preview')
    }
    return (
        <div className="basis-full mt-2 px-6 sm:px-12 bg-neutral-100">
            <CourseOverview />
        </div>
    )
}