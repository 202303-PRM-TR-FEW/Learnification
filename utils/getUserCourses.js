import { User } from "@/models/User"
import { connectToDb } from "./database"
const getUserCourseIds = async (email) => {
    await connectToDb()
    try {
        const { course: courseIds } = await User.findOne({ email }).select('courses').exec()
        return {
            courseIds,
            status: "success"
        }
    } catch (error) {
        return {
            status: "error",
            courseIds: []
        }
    }
}

export default getUserCourseIds