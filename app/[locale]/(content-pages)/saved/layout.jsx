"use client"
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Layout() {
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
        <div>

        </div>
    )
}
