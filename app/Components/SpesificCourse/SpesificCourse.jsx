"use client";
import CourseView from "@/app/Components/CourseView";
import CourseOverview from "@/app/Components/CourseOverview";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import notify from "@/utils/notifications";
import ReactPlayer from "react-player";


function CourseVideo({ videoUrl }) {
    return (
        <div className="relative w-full h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rounded-2xl">
            <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
        </div>
    );
}

export default function SpecificCourse({ course }) {
    const { status } = useSession();
    const [videoUrl, setVideoUrl] = useState(null);
    useEffect(() => {
        if (status === "unauthenticated") {
            notify("Please login to view this page", "info");
            redirect("/sign-in");
        }
        setVideoUrl(course?.sections[0]?.lessons[0]?.urls);
    }, [])
    return (
        <>
            <main className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-8 lg:p-0">
                <section className="lg:pt-6 lg:pr-4">
                    <CourseView
                        course={course}
                        backgroundImageElement={
                            <CourseVideo videoUrl={videoUrl} />
                        }
                    ></CourseView>
                </section>
                <section className="lg:h-screen bg-primary-white rounded-2xl lg:rounded-none mb-20 lg:mb-0 overflow-auto">
                    <CourseOverview setVideoUrl={setVideoUrl} showCheckIcon={true} course={course} />
                </section>
            </main>
        </>
    );
}