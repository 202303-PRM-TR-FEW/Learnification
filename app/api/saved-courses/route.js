import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import { getServerSession } from "next-auth";

export async function POST(req) {
    const { email } = await req.json();
    console.log("email", email)
    if (!email) {
        const userSavedCourseIds = []
        return new Response(JSON.stringify(userSavedCourseIds), {
            status: 404,
        })
    }
    await connectToDb()
    const { savedCourses: userSavedCourseIds } = await User.findOne({ email }).select('savedCourses').exec()
    return new Response(JSON.stringify(userSavedCourseIds), {
        status: 200,
    })
}