import { User } from "@/models/User"
import { connectToDb } from "@/utils/database"
import { getServerSession } from "next-auth"

export async function GET() {
    const session = await getServerSession();
    await connectToDb();

    if (!session?.user?.email) {
        return new Response(JSON.stringify({ error: "User not authenticated" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    const userHaveCourses = await User.findOne({ email: session.user.email }).populate('courses').select('courses').exec()
    return new Response(JSON.stringify(userHaveCourses.courses), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}
