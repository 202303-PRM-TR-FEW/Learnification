import { useTranslations } from 'next-intl'
import React from 'react'

export default function FeaturedCoursesHeader() {
    const t = useTranslations('Home')
    return (
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mt-12 mb-4 2xl:mb-12 ">
            {t('Featured Courses.title')}
        </h2>
    )
}
