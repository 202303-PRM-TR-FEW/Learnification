import { User } from "@/models/User"
import { connectToDb } from "./database"
const getUserCourseIds = async (email) => {
    await connectToDb()
    try {
        const { courses } = await User.findOne({ email }).select('courses').exec()
        const userCourseIds = courses.map((courseId) => courseId.toString())
        return {
            userCourseIds,
            status: "success"
        }
    } catch (error) {
        return {
            status: "error",
            userCourseIds: []
        }
    }
}

export default getUserCourseIds