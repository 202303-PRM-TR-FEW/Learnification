"use client";
import CourseView from "@/app/Components/CourseView";
import CourseOverview from "@/app/Components/CourseOverview";
import LearnUButton from "@/app/Components/LearnUButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import { useSession } from "next-auth/react";
import { useLocale } from "next-intl";
import notify from "@/utils/notifications";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next-intl/client";
function CourseViewImage({ imgUrl }) {
    return (
        <div className="relative w-full h-[250px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px] rounded-2xl">
            <Image
                src={imgUrl}
                width={1920}
                height={1080}
                alt="Course Image"
                className="w-full h-full object-cover rounded-2xl"
                sizes="(min-width: 1280px) 80vw, (min-width: 1024px) 50vw, (min-width: 768px) 80vw, 100vw"
            />
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

export default function CourseDetail({ course }) {
    const router = useRouter()
    const locale = useLocale()
    const session = useSession()
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    const handleEnroll = async (courseId) => {
        console.log("session", session)
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
        router.push(`/specific-course/${courseId}`)
    }
    const t = useTranslations("SavedCourses");
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
                        {course?.title}
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
                            onClick={() => handleEnroll(course?._id)}
                        />
                    </div>
                </Box>
            </Modal>
            <main className="grid lg:grid-cols-2 px-8 lg:p-0">
                <section className="lg:pt-6 lg:pr-4">
                    <CourseView
                        course={course}
                        backgroundImageElement={
                            <CourseViewImage imgUrl={course?.imageUrl} />
                        }
                    ></CourseView>
                </section>
                <section className="h-screen bg-primary-white rounded-2xl lg:rounded-none mb-20 lg:mb-0 flex flex-col justify-between">
                    <div className="overflow-auto">
                        <CourseOverview showCheckIcon={false} course={course} />
                    </div>
                    <div className="flex max-xl:flex-col gap-4 px-8 mt-auto pb-4 lg:pb-0">
                        <LearnUButton
                            onClick={handleOpenModal}
                            className={"w-full basis-full uppercase lg:mb-2"}
                            text={t("Buy Now")}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
