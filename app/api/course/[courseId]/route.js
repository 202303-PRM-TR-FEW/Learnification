import { Course } from "@/models/Course";
import { connectToDb } from "@/utils/database";

export async function GET(req, { params: { courseId } }) {
    try {
        await connectToDb()
        const course = await Course.findById(courseId)
        return new Response(JSON.stringify(course), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
}