import CourseView from "@/app/Components/CourseView";
import CourseOverview from "@/app/Components/CourseOverview";
import LearnUButton from "@/app/Components/LearnUButton";
import { useTranslations } from "next-intl";
import Image from "next/image";

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

export default function CourseDetail({ params: { courseId } }) {
  const courseIdNum = parseInt(courseId);

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
      description:
        "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      recommendedCourses: [],
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
      description:
        "Learn how to use Agile Project Management, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
    },
    {
      title: "Pivot Tables",
      tutor: {
        name: "Jane Doe",
        imageUrl:
          "https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNDh8fGxhZHl8ZW58MXx8fHwxNjcyOTk1Njcw&ixlib=rb-4.0.3&q=80&w=1080",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080",
      duration: "1h 24m",
      rating: 4.6,
      description: "Explore the world of data science and analytics.",
      price: 24,
      recommendedCourses: [],
    },
    {
      title: "Powe BI",
      tutor: {
        name: "Ian Brown",
        imageUrl:
          "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: "1h 17m",
      rating: 4.1,
      description: "Build cross-platform mobile apps using React Native.",
      price: 100,
      description:
        "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      recommendedCourses: [],
    },
    {
      title: "Powe BI",
      tutor: {
        name: "Ian Brown",
        imageUrl:
          "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: "1h 17m",
      rating: 4.1,
      description: "Build cross-platform mobile apps using React Native.",
      price: 100,
      description:
        "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      recommendedCourses: [],
    },
    {
      title: "Powe BI",
      tutor: {
        name: "Ian Brown",
        imageUrl:
          "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: "1h 17m",
      rating: 4.1,
      description: "Build cross-platform mobile apps using React Native.",
      price: 100,
      description:
        "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      recommendedCourses: [],
    },
    {
      title: "Powe BI",
      tutor: {
        name: "Ian Brown",
        imageUrl:
          "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: "1h 17m",
      rating: 4.1,
      description: "Build cross-platform mobile apps using React Native.",
      price: 100,
      description:
        "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      recommendedCourses: [],
    },
    {
      title: "Powe BI",
      tutor: {
        name: "Ian Brown",
        imageUrl:
          "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
      },
      imageUrl:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: "1h 17m",
      rating: 4.1,
      description: "Build cross-platform mobile apps using React Native.",
      price: 100,
      description:
        "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
      recommendedCourses: [],
    },
  ];

  const selectedCourse = courses[courseIdNum];

  const t = useTranslations("SavedCourses");
  return (
    <main className="grid lg:grid-cols-2 px-8 lg:p-0">
      <section className="lg:pt-6 lg:pr-4">
        <CourseView
          course={selectedCourse}
          backgroundImageElement={
            <CourseViewImage imgUrl={selectedCourse.imageUrl} />
          }
        ></CourseView>
      </section>
      <section className="h-screen bg-primary-white rounded-2xl lg:rounded-none mb-20 lg:mb-0 flex flex-col justify-between">
        <div className="overflow-auto">
          <CourseOverview showCheckIcon={false} />

          {/* After saved courses are fetched, uncomment the line of code below and delete above the line of code to see lessons. */}

          {/* <CourseOverview showCheckIcon={false} course={selectedCourse} /> */}
        </div>
        <div>
          <LearnUButton
            className={"w-full basis-full uppercase lg:mb-2"}
            text={t("Buy Now")}
          />
        </div>
      </section>
    </main>
  );
}
