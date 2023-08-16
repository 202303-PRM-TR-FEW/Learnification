import { Course } from "@/models/Course"
import { connectToDb } from "./database"

export const generateFreeCourseIds = async () => {
    try {
        await connectToDb()
        const randomSkipCount = Math.floor(Math.random() * 8)
        const courses = await Course.find({}, 'id').limit(4).skip(randomSkipCount).exec()
        const courseIds = courses.map(course => course._id)
        return {
            courseIds,
            status: "success"
        }
    } catch (error) {
        console.log(error)
        return {
            status: "error",
            courseIds: []
        }
    }
}