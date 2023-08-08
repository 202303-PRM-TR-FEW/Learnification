import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";

export async function GET() {
    await connectToDb();
    const userWithCourses = await User.findOne({ email: "muhammedcengiz1@gmail.com" }).populate("courses").exec()
    return new Response(JSON.stringify(userWithCourses.courses), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    })
}