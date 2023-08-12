import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import { getServerSession } from "next-auth";

export async function GET() {
    const data = await getServerSession();
    await connectToDb();
    const userWithCourses = await User.findOne({email:data.user.email}).populate("courses").exec()
    return new Response(JSON.stringify(userWithCourses.courses), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}