"use client";
import CourseView from "@/app/Components/CourseView";
import LearnUButton from "@/app/Components/LearnUButton";
import CoursePreview from "@/app/Components/CoursePreview";
import { useLocale, useTranslations } from "next-intl";
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
import notify from "@/utils/notifications";
import Loading from "@/app/Components/LoadingPage/Loading";
import "react-toastify/dist/ReactToastify.css";
import NoCoursesFound from "@/app/Components/NoCoursesFound";
import { Box, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';

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
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f5f5f5',
  border: '#2e8dff',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}

export default function Saved() {
  const session = useSession();
  const locale = useLocale();
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)
  const handleEnroll = async (courseId) => {
    const res = await fetch("/api/course-enroll", {
      method: "POST",
      body: JSON.stringify({
        courseId,
        email: session?.data?.session?.user?.email,
        locale
      }),
    })
    if (!res.ok) {
      const { message } = await res.json()
      notify(message, "error")
      return
    }
    const { message } = await res.json()
    notify(message, "success")
    handleCloseModal()
    router.push(`/spesific-course/${courseId}`)
  }
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("unauthenticated");
      notify("You need to sign in to view your saved courses", "error");
      redirect("/sign-in?callbackUrl=/saved");
    }
  }, [status]);

  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchSavedCourses() {
      try {
        const response = await fetch("/api/populate-saved-courses");
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.error("Failed to fetch saved courses");
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching saved courses:", error);
      }
    }

    fetchSavedCourses();
  }, []);
  const t = useTranslations("SavedCourses");
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const defaultIndex = 0;
  const initialIndex = searchParams.get("courseIndex") || defaultIndex;
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
  };

  return (

    <>
      {/* MODAL STARTS */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}

      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedCourse?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Want to enroll in this course?
          </Typography>
          <div className="flex justify-end gap-2 mt-4">
            <LearnUButton
              text="Cancel"
              bgColor="red"
              borderRadius={20}
              paddingInline={25}
              paddingBlock={5}
              width="full"
              onClick={handleCloseModal}
            />
            <LearnUButton

              text="Enroll"
              bgColor="blue"
              borderRadius={20}
              paddingInline={25}
              paddingBlock={5}
              width="full"
              onClick={() => handleEnroll(selectedCourse?._id)}
            />
          </div>
        </Box>
      </Modal>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="w-full md:pl-12 px-[4%] md:px-[2%] lg:px-0">
          {courses.length === 0 ? (
            <NoCoursesFound />
          ) : (
            <div className="flex min-w-full gap-4 max-md:pb-20">
              <div className="basis-full lg:basis-10/12 lg:h-screen lg:overflow-y-scroll px-4">
                <h1 className="font-medium text-3xl mt-16 mb-8">
                  {t("title")}
                </h1>
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
                                onClick={(e) =>
                                  handlePreviewClick(e, course._id)
                                }
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
                          onClick={(e) =>
                            handlePreviewClick(e, selectedCourse?._id)
                          }
                        />
                        <LearnUButton onClick={handleOpenModal}
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
          )}
        </main>
      )}
    </>
  );
}
