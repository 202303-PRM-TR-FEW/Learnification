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
            const { courses: courseIds } = await User.findOne({ email }).select("courses").exec()
            expect(courseIds).toBeInstanceOf(Array)
        }),
        it('should return an array of courseIds with the type of string', async () => {
            const { courses: courseIds } = await User.findOne({ email }).select("courses").exec()
            for (const courseId of courseIds.toString()) {
                expect(typeof courseId).toBe("string")
            }
        })
})