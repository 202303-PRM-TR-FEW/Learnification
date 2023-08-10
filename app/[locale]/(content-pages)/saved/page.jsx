"use client";
import CourseView from "@/app/Components/CourseView";
import LearnUButton from "@/app/Components/LearnUButton";
import CoursePreview from "@/app/Components/CoursePreview";
import { useTranslations } from "next-intl";
import {
    redirect,
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import notify from '@/utils/notifications';

function CourseViewImage({ imgUrl }) {
    const session = useSession();
    if (!session.data) redirect("/sign-in?callbackUrl=/saved");
    const t = useTranslations("SavedCourses");
    return (
        <div className="relative w-full h-[250px] lg:min-h-[200px] basis-full rounded-2xl">
            <Image
                src={imgUrl}
                width={1920}
                height={1080}
                alt="Course Image"
                className="w-full h-full object-cover rounded-2xl"
                sizes="(min-width: 1280px) 80vw, (min-width: 1024px) 50vw, (min-width: 768px) 80vw, 100vw"
            />
            <div className="text-white-smoke text-center absolute z-50 inset-1 m-auto max-w-max max-h-max">
                <button
                    className="relative left-2 w-[0px] h-[0px]
                    border-solid border-[15px] border-l-[30px]
                    border-b-transparent border-t-transparent
                    border-r-transparent border-l-white
                    transition-all duration-300
                    hover:border-l-primary-blue
                    "
                ></button>
                <p className="text-xl text-center block font-semibold mt-1">
                    {t("Play Preview")}
                </p>
            </div>
        </div>
    );
}

export default function Saved() {
    // we're gonna fetch courses here
    const { status } = useSession();
    useEffect(() => {
        if (status === "unauthenticated") {
            notify("You need to sign in to view your saved courses", "error");
            redirect("/sign-in?callbackUrl=/saved");
        }
    }, [status])

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function fetchSavedCourses() {
            try {
                const response = await fetch('/api/populate-saved-courses');
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setCourses(data.savedCourses);
                } else {
                    console.error('Failed to fetch saved courses');
                }
            } catch (error) {
                console.error('Error fetching saved courses:', error);
            }
        }

        fetchSavedCourses();
    }, []);
    const t = useTranslations("SavedCourses")
    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()
    const defaultIndex = 0;
    const initialIndex = searchParams.get('courseIndex') || defaultIndex;
    const [expandedCourseIndex, setExpandedCourseIndex] = useState(initialIndex);
    const selectedCourse = courses[
        expandedCourseIndex >= courses.length ? defaultIndex : expandedCourseIndex
    ];
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            const paramsAsString = params.toString();
            return paramsAsString;
        },
        [expandedCourseIndex]
    );
    const bookmarkRef = useRef();
    const buttonRef = useRef();

    const handleCourseClick = (e, index) => {
        e.preventDefault();
        // exclude the bookmarkRef and buttonRef from the click event
        const isButton = e.target.outerHTML === buttonRef.current.outerHTML;
        const isBookmark = e.target.outerHTML === bookmarkRef.current.outerHTML;
        if (isBookmark || isButton) return;
        setExpandedCourseIndex(() => index);
        router.push(`${path}?${createQueryString("courseIndex", index)}`);
    };
    useEffect(() => {
        const index = parseInt(searchParams.get("courseIndex"));
        if (index && index <= courses.length - 1) {
            setExpandedCourseIndex(index);
            return;
        }
        setExpandedCourseIndex(defaultIndex);
    }, [searchParams.get("courseIndex")]);

    const handlePreviewClick = (e, courseId) => {
        e.preventDefault();
        const route = `/course-detail/${courseId}`;
        router.push(route);
    }

    return (
        <main className="w-full md:pl-12 px-[4%] md:px-[2%] lg:px-0">
            <div className="flex min-w-full gap-4 max-md:pb-20">
                <div className="basis-full lg:basis-10/12 lg:h-screen lg:overflow-y-scroll px-4">
                    <h1 className="font-medium text-3xl mt-16 mb-8">{t("title")}</h1>
                    {courses?.map((course, index) => (
                        <div key={index}>
                            <CoursePreview
                                expandedCourseIndex={expandedCourseIndex}
                                bookmarkRef={bookmarkRef}
                                index={index}
                                handleClick={handleCourseClick}
                                key={index}
                                course={course}
                            >
                                <div className="mt-auto">
                                    <LearnUButton
                                        ref={buttonRef}
                                        className={"max-md:w-full uppercase"}
                                        text={t("Buy")}
                                        paddingInline={15}
                                        paddingBlock={0}
                                    />
                                </div>
                            </CoursePreview>
                            {/* MOBILE DESIGN STARTS HERE */}
                            <div className="my-4">
                                {expandedCourseIndex === index && (
                                    <div className="block lg:hidden bg-primary-white rounded-2xl">
                                        <CourseView
                                            backgroundImageElement={
                                                <CourseViewImage imgUrl={course.imageUrl} />
                                            }
                                            course={course}
                                        >
                                            {/* Children of the CourseView */}
                                            <div className="flex flex-col sm:flex-row gap-4 px-8 mt-auto pb-4">
                                                <LearnUButton
                                                    className={"basis-full uppercase"}
                                                    text={t("Preview")}
                                                    onClick={(e) => handlePreviewClick(e, course._id)}
                                                />

                                                <LearnUButton
                                                    className={"basis-full uppercase"}
                                                    text={t("Buy Now")}
                                                />
                                            </div>
                                        </CourseView>
                                    </div>
                                )}
                            </div>
                            {/* MOBILE DESIGN ENDS HERE */}
                        </div>
                    ))}
                </div>
                {/* LAPTOP DESIGN STARTS HERE */}
                <div className="hidden h-screen lg:block md:basis-full bg-primary-white">
                    <div className="flex flex-col h-full p-4">
                        {
                            <CourseView
                                course={selectedCourse}
                                backgroundImageElement={
                                    <CourseViewImage imgUrl={selectedCourse?.imageUrl} />
                                }
                            >
                                {/* Children of the CourseView */}
                                <div className="flex max-xl:flex-col gap-4 px-8 mt-auto">
                                    <LearnUButton
                                        className={"basis-full uppercase"}
                                        text={t("Preview")}
                                        onClick={(e) => handlePreviewClick(e, selectedCourse?._id)}
                                    />
                                    <LearnUButton
                                        className={"basis-full uppercase"}
                                        text={t("Buy Now")}
                                    />
                                </div>
                            </CourseView>
                        }
                    </div>
                </div>
                {/* LAPTOP DESIGN ENDS HERE */}
            </div>
        </main>
    );
}
