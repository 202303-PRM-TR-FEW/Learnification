"use client"
import SavedCourseCard from '@/app/Components/SavedCoursesPage/SavedCourseCard';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Layout({ children }) {
    const courses = [
        {
            id: 1,
            title: 'Type Safe Design',
            tutorName: 'Gary Saltz',
            imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/8a82fb6d-e077-4930-b16d-a47ec1537f4a.jpg'
        },
        {
            id: 2,
            title: 'Building iOS15 App',
            tutorName: 'Tom Colins',
            imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/4f91c603-603d-44e2-ab35-65be1763f022.jpg'
        },
        {
            id: 3,
            title: 'Excel: Formulas and Functions',
            tutorName: 'Mike Curtis',
            imageUrl: 'https://assets.api.uizard.io/api/cdn/stream/6b7ace23-9ec2-4b4e-963f-c0097a8bba79.jpg'
        },
    ]
    const [isLaptopView, setIsLaptopView] = useState(true);
    const [expandedCourseIndex, setExpandedCourseIndex] = useState(null);
    const handleCourseClick = (e, index) => {
        e.preventDefault();
        setExpandedCourseIndex(index === expandedCourseIndex ? null : index);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLaptopView(window.innerWidth > 1279);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <main className='min-w-full md:pl-12'>
            <div className='flex min-w-full'>
                <div className='basis-full'>
                    {
                        courses.map((course) => (
                            <SavedCourseCard course={course} />
                        ))
                    }
                </div>
                <div className='md:basis-full'>

                </div>
            </div>
        </main>
    )
}
