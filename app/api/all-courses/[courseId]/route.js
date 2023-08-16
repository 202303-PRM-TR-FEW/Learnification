import { Course } from "@/models/Course";
import { connectToDb } from "@/utils/database";


export async function GET(request, { params }) {
  const courseId = params.courseId;
  await connectToDb();

  try {
    const specificCourse = await Course.findById(courseId).exec();

    if (specificCourse) {
      return new Response(JSON.stringify(specificCourse), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response("Course not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  } catch (error) {
    console.error("Error fetching course:", error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
