import React from 'react'
import FeaturedCourse from './FeaturedCourse'
export default function FeaturedCourses() {
    const mockCourses = [{
        imageUrl: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 24,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 24,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 24,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 25,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    }, {
        imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 25,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    }, {
        imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 25,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    }, {
        imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 25,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    }, {
        imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
        title: "Power BI",
        duration: "1h 30m",
        rating: 4.5,
        price: 25,
        tutor: {
            name: "John Eames",
            imageUrl: "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg"
        }
    }
    ]
    return (
        <>
            <h2 className='text-2xl md:text-3xl 2xl:text-4xl font-bold mb-4 2xl:mb-12 '>
                Featured Courses
            </h2>
            <div className='grid sm:grid-cols-2 2xl:grid-cols-4 gap-2 sm:gap-4 2xl:gap-8'>
                {mockCourses.map((course, index) => (
                    <FeaturedCourse course={course} key={index} />
                ))}
            </div>
        </>
    )
}
