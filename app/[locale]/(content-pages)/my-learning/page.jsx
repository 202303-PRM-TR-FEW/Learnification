"use client"
import CoursePreview from "@/app/Components/CoursePreview"
import CourseView from "@/app/Components/CourseView"
import LearnUButton from "@/app/Components/LearnUButton"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useTranslations } from "use-intl"
import { useLocale } from "next-intl"
import Link from "next/link"
import Icons from "@/app/Components/Icons"
function CourseViewImage({ imgUrl }) {
    return (
        <div
            className='w-full h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rounded-2xl'
        >
            <Image
                src={imgUrl}
                width={1920}
                height={1080}
                alt="Course Image"
                className="w-full h-full object-cover rounded-2xl"
            />
        </div>
    )
}
export default function MyLearning() {
    const courses = [
        {
            imageUrl:
                "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Power BI",
            duration: "1h 53m",
            rating: 4.9,
            price: 24,
            tutor: {
                name: "John Eames",
                imageUrl:
                    "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
            },
            description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
            recommendedCourses: [],
            finishedPercentage: 50,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
            title: "Agile Project Management",
            duration: "59m",
            rating: 4.3,
            price: 18,
            tutor: {
                name: "Curt Rits",
                imageUrl:
                    "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
            },
            recommendedCourses: [],
            description: "Learn how to use Agile Project Management, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
            finishedPercentage: 24,
        },
        {
            title: "Pivot Tables",
            tutor: {
                name: "Jane Doe",
                imageUrl: "https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNDh8fGxhZHl8ZW58MXx8fHwxNjcyOTk1Njcw&ixlib=rb-4.0.3&q=80&w=1080",
            },
            imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080",
            duration: "1h 24m",
            rating: 4.6,
            description: "Explore the world of data science and analytics.",
            price: 24,
            recommendedCourses: [],
            finishedPercentage: 76,
        },
        {
            title: "Powe BI",
            tutor: {
                name: "Ian Brown",
                imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
            },
            imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
            duration: "1h 17m",
            rating: 4.1,
            description: "Build cross-platform mobile apps using React Native.",
            price: 100,
            description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
            recommendedCourses: [],
            finishedPercentage: 12,
        },
        {
            title: "Powe BI",
            tutor: {
                name: "Ian Brown",
                imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
            },
            imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
            duration: "1h 17m",
            rating: 4.1,
            description: "Build cross-platform mobile apps using React Native.",
            price: 100,
            description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
            recommendedCourses: [],
            finishedPercentage: 90,
        },
        {
            title: "Powe BI",
            tutor: {
                name: "Ian Brown",
                imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
            },
            imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
            duration: "1h 17m",
            rating: 4.1,
            description: "Build cross-platform mobile apps using React Native.",
            price: 100,
            description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
            recommendedCourses: [],
            finishedPercentage: 30,
        },
        {
            title: "Powe BI",
            tutor: {
                name: "Ian Brown",
                imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
            },
            imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
            duration: "1h 17m",
            rating: 4.1,
            description: "Build cross-platform mobile apps using React Native.",
            price: 100,
            description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
            recommendedCourses: [],
            finishedPercentage: 21,
        },
        {
            title: "Powe BI",
            tutor: {
                name: "Ian Brown",
                imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
            },
            imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
            duration: "1h 17m",
            rating: 4.1,
            description: "Build cross-platform mobile apps using React Native.",
            price: 100,
            description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
            recommendedCourses: [],
            finishedPercentage: 44,
        },
    ]
    const t = useTranslations("MyLearning")
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()
    const defaultIndex = 0;
    const initialIndex = searchParams.get('courseIndex') || defaultIndex;
    const locale = useLocale();
    const [expandedCourseIndex, setExpandedCourseIndex] = useState(initialIndex);
    const selectedCourse = courses[
        expandedCourseIndex >= courses.length ? defaultIndex : expandedCourseIndex
    ];
    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        const paramsAsString = params.toString()
        return paramsAsString
    }, [expandedCourseIndex])
    const bookmarkRef = useRef()
    // const buttonRef = useRef()
    const handleCourseClick = (e, index) => {
        e.preventDefault();
        // exclude the bookmarkRef and buttonRef from the click event
        // const isButton = e.target.outerHTML === buttonRef.current.outerHTML
        const isBookmark = e.target.outerHTML === bookmarkRef.current.outerHTML
        if (isBookmark) return
        setExpandedCourseIndex(() => index);
        router.push(
            `${path}?${createQueryString('courseIndex', index)}`,
        )
    };
    useEffect(() => {
        const index = parseInt(searchParams.get('courseIndex'))
        if (index && index <= courses.length - 1) {
            setExpandedCourseIndex(index)
            return
        }
        setExpandedCourseIndex(defaultIndex)
    }, [searchParams.get('courseIndex')])
    return (
        <main className="w-full md:pl-12 px-[4%] md:px-[2%] lg:px-0">
            <div className="flex min-w-full gap-4 max-md:pb-20">
                <div className='basis-full lg:basis-10/12 lg:h-screen lg:overflow-y-scroll px-4'>
                    <div className="w-full flex items-center mt-16 mb-8">
                        <h1 className='font-medium text-3xl'>
                            {t("title")}
                        </h1>
                        <h2 className="ml-auto text-lg animatedUnderline">
                            <Link href={"statistics"} lang={locale}>
                                {<Icons.StatisticsIcon />} <span>{t("Statistics")}</span>
                            </Link>
                        </h2>
                    </div>
                    {
                        courses.map((course, index) =>
                        (
                            <div key={index}>
                                <CoursePreview expandedCourseIndex={expandedCourseIndex} bookmarkRef={bookmarkRef} index={index} handleClick={handleCourseClick} key={index} course={course} >
                                    <div className='mt-auto'>
                                        <div className="w-full h-2 rounded-lg flex bg-white-smoke">
                                            <span className={`bg-primary-blue rounded-lg`}
                                                style={{ width: `${course.finishedPercentage}%` }}
                                            >
                                            </span>
                                        </div>
                                        <p className="font-medium text-primary-gray mt-1">
                                            {
                                                locale === "en" ? `${course.finishedPercentage}% completed` : `%${course.finishedPercentage} tamamlandı`
                                            }
                                        </p>
                                    </div>
                                </CoursePreview>
                                {/* MOBILE DESIGN STARTS HERE */}
                                <div className='my-4'>
                                    {expandedCourseIndex === index && (
                                        <div className='block lg:hidden bg-primary-white rounded-2xl'>
                                            <CourseView backgroundImageElement={<CourseViewImage imgUrl={course.imageUrl} />} course={course} >
                                                {/* Children of the CourseView */}
                                                <div className='flex flex-col sm:flex-row gap-4 px-8 mt-auto pb-4'>
                                                    <LearnUButton className={"basis-full uppercase"} text={t("Continue Learning")} />
                                                </div>
                                            </CourseView>
                                        </div>
                                    )}
                                </div>
                                {/* MOBILE DESIGN ENDS HERE */}
                            </div>
                        ))
                    }

                </div>
                {/* LAPTOP DESIGN STARTS HERE */}
                <div className='hidden h-screen lg:block md:basis-full bg-primary-white sticky top-0'>
                    <div className='flex h-full flex-col p-4'>
                        {
                            <CourseView course={selectedCourse}
                                backgroundImageElement={<CourseViewImage imgUrl={selectedCourse.imageUrl} />}>
                                {/* Children of the CourseView */}
                                <div className='flex max-xl:flex-col gap-4 px-8 mt-auto'>
                                    <LearnUButton className={"basis-full uppercase"} text={t("Continue Learning")} />
                                </div>
                            </CourseView>
                        }
                    </div>
                </div>
                {/* LAPTOP DESIGN ENDS HERE */}
            </div>
        </main>
    )
}
