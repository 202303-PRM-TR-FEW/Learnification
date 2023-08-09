import { User } from "../../models/User"
import mongoose from "mongoose"

describe('getUserCourses', () => {
    const email = "muhammedcengiz1@gmail.com"
    beforeAll(async () => {
        const mongoUri = process.env.MONGODB_URI // put your mongo uri here as string
        await mongoose.connect(mongoUri, {
            dbName: "learnu",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }),
        it('should return an array of courseIds that user has', async () => {
            const { courses: userCourseIds } = await User.findOne({ email }).select("courses").exec()
            expect(userCourseIds).toBeInstanceOf(Array)
        }),
        it('should return an array of courseIds with the type of string', async () => {
            const { courses } = await User.findOne({ email }).select('courses').exec()
            const userCourseIds = courses.map((courseId) => courseId.toString())
            for (const userCourseId of userCourseIds) {
                expect(typeof userCourseId).toBe("string")
            }
        })
})