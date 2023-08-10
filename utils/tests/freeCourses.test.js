import { Course } from '../../models/Course';
import mongoose from 'mongoose';
describe('generateFreeCourseIds', () => {
    beforeAll(async () => {
        const mongoUri = process.env.MONGODB_URI // put your mongo uri here as string
        await mongoose.connect(mongoUri, {
            dbName: "learnu",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }),
        //
        it('should return an array of 4 course ids', async () => {

            const randomSkipCount = Math.floor(Math.random() * 8)
            const courses = await Course.find({}, 'id').limit(4).skip(randomSkipCount).exec()
            const courseIds = courses.map(course => course._id)

            expect(courseIds).toHaveLength(4)

        }),
        it('should return an array of free course ids with mongoose objectId type ', async () => {
            const randomSkipCount = Math.floor(Math.random() * 8)
            const courses = await Course.find({}, 'id').limit(4).skip(randomSkipCount).exec()
            const courseIds = courses.map(course => course._id)

            for (const courseId of courseIds) {
                expect(courseId).toBeInstanceOf(mongoose.Types.ObjectId)
            }
        }),
        afterAll(async () => {
            await mongoose.connection.close()
        })
})