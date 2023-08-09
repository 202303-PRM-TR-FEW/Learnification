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

  // After saved courses are fetched, uncomment the line of code below and edit accordingly.
  
  // const [selectedCourse, setSelectedCourse] = useState(null);

  // useEffect(() => {
  //   async function fetchCourses() {
  //     try {
  //       const response = await fetch("/api/my-learning");
  //       if (response.ok) {
  //         const data = await response.json();
  //         const course = data.find(course => course._id === courseId);
          
  //         if (course) {
  //           setSelectedCourse(course);
  //         } else {
  //           console.log(`Course with ID ${courseId} not found`);
  //         }
          
  //       } else {
  //         console.error("Failed to fetch courses");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   }

  //   fetchCourses();
  // }, [courseId]);

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
          <CourseOverview showCheckIcon={false} course={selectedCourse} />

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
