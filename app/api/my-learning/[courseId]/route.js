import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import { getServerSession } from "next-auth";

export async function GET(request, { params }) {
  const courseId = params.courseId;
  const data = await getServerSession();
  await connectToDb();

  if (!data) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  try {
    const userCourses = await User.findOne({ email: data.user.email })
      .populate("courses")
      .exec();
    const specificCourse = userCourses.courses.find(
      (course) => course._id.toString() === courseId
    );

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
