import { User } from '@/models/User'
import createSampleData from '@/population/populateDatabase'
import { connectToDb } from '@/utils/database'
export async function GET() { // get mock data from database
    await connectToDb()
    const users = await User.find({}).populate('finishedCourses').populate('courses').exec()
    console.log(users);
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
// export async function GET(req) { // create mock by activating this code block
//     await createSampleData();
//     return new Response(JSON.stringify({
//         message: 'Database populated successfully'
//     }), {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         status: 200
//     })
// }