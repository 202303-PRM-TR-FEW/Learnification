"use client";
import CoursePreview from "@/app/Components/CoursePreview";
import CourseView from "@/app/Components/CourseView";
import LearnUButton from "@/app/Components/LearnUButton";
import Image from "next/image";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "use-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import Icons from "@/app/Components/Icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";
import Loading from "@/app/Components/LoadingPage/Loading";
function CourseViewImage({ imgUrl }) {
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
export default function MyLearning() {
  const [courses, setCourses] = useState([]);
  const [isLoadling, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch("/api/my-learning");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setCourses(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  const session = useSession();
  if (!session.data) redirect("/sign-in?callbackUrl=/my-learning");
  const t = useTranslations("MyLearning");
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const defaultIndex = 0;
  const initialIndex = searchParams.get("courseIndex") || defaultIndex;
  const locale = useLocale();
  const [expandedCourseIndex, setExpandedCourseIndex] = useState(initialIndex);
  const selectedCourse =
    courses[
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
  // const buttonRef = useRef()
  const handleCourseClick = (e, index) => {
    e.preventDefault();
    // exclude the bookmarkRef and buttonRef from the click event
    // const isButton = e.target.outerHTML === buttonRef.current.outerHTML
    const isBookmark = e.target.outerHTML === bookmarkRef.current.innerHTML;
    if (isBookmark) return;
    setExpandedCourseIndex(() => index);
    router.push(`${path}?${createQueryString("courseIndex", index)}`);
  };
  useEffect(() => {
    const index = parseInt(searchParams.get("courseIndex"));
    if (index && index <= courses?.length - 1) {
      setExpandedCourseIndex(index);
      return;
    }
    setExpandedCourseIndex(defaultIndex);
  }, [searchParams.get("courseIndex")]);
  const handlePreviewClick = (e, courseId) => {
    e.preventDefault();
    const route = `/spesific-course/${courseId}`;
    router.push(route);
  }
  return (
    <main className="w-full md:pl-12 px-[4%] md:px-[2%] lg:px-0">
      {
        isLoadling ? (
          <Loading />
        ) : (
          <div className="flex min-w-full gap-4 max-md:pb-20">
            <div className="basis-full lg:basis-10/12 lg:h-screen lg:overflow-y-scroll px-4">
              <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row items-center mt-16 mb-4 lg:mb-8">
                <h1 className="font-medium text-lg lg:text-xl 2xl:text-3xl">
                  {t("title")}
                </h1>
                <h2 className="lg:ml-auto text-lg animatedUnderline">
                  <Link href={"statistics"} lang={locale}>
                    {<Icons.StatisticsIcon />} <span>{t("Statistics")}</span>
                  </Link>
                </h2>
              </div>
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
                      <div className="w-full h-2 rounded-lg flex bg-white-smoke">
                        <span
                          className={`bg-primary-blue rounded-lg`}
                          style={{ width: `${course.finishedPercentage}%` }}
                        ></span>
                      </div>
                      <p className="font-medium text-primary-gray mt-1">
                        {locale === "en"
                          ? `${course.finishedPercentage}% completed`
                          : `%${course.finishedPercentage} tamamlandı`}
                      </p>
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
                              text={t("Continue Learning")}
                              onClick={(e) => handlePreviewClick(e, course._id)}
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
              <div className="flex h-full flex-col p-4">
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
                        text={t("Continue Learning")}
                        onClick={(e) => handlePreviewClick(e, selectedCourse?._id)}
                      />
                    </div>
                  </CourseView>
                }
              </div>
            </div>
            {/* LAPTOP DESIGN ENDS HERE */}
          </div>
        )
      }
    </main>
  );
}
