import { User } from "@/models/User";
import { getServerSession } from "next-auth";

export async function POST(req, res) {
    const { course } = await req.json()
    const session = await getServerSession();
    const hasUserLoggedIn = Boolean(session);
    console.log(session)
    if (!hasUserLoggedIn) {
        return new Response(JSON.stringify({
            message: "Please sign in to save the course"
        }), {
            status: 401,
        })
    }
    const { email } = session.user;
    const user = await User.findOne({ email }).select('savedCourses').exec()
    if (!user) {
        return new Response(JSON.stringify({
            message: "User not found"
        }), {
            status: 404,
        })
    }
    let { savedCourses } = user;
    if (savedCourses.includes(course._id)) {
        user.savedCourses = savedCourses.filter(savedCourse => savedCourse !== course._id)
        await user.save()
        return new Response(JSON.stringify({
            message: "Course removed successfully",
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