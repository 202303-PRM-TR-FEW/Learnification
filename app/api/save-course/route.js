import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import { getServerSession } from "next-auth";

export async function POST(req, res) {
    const { course } = await req.json()
    const session = await getServerSession();
    const hasUserLoggedIn = Boolean(session);
    if (!hasUserLoggedIn) {
        return new Response(JSON.stringify({
            message: "Please sign in to save the course"
        }), {
            status: 401,
        })
    }
    const { email } = session.user;
    await connectToDb()
    const user = await User.findOne({ email }).select('savedCourses').exec()
    if (!user) {
        return new Response(JSON.stringify({
            message: "User not found"
        }), {
            status: 404,
        })
    }
    const { savedCourses } = user;
    if (savedCourses.includes(course._id)) {
        const filteredSavedCourses = savedCourses.filter(savedCourse => savedCourse.toString() !== course._id.toString())
        user.savedCourses = [...filteredSavedCourses]
        await user.save()
        return new Response(JSON.stringify({
            message: "Course removed from saved courses",
            isCourseSaved: false
        }), {
            status: 200,
        })
    }
    user.savedCourses = [...savedCourses, course._id]
    await user.save()
    return new Response(JSON.stringify({
        message: "Course saved successfully",
        isCourseSaved: true
    }), {
        status: 200,
    })
}