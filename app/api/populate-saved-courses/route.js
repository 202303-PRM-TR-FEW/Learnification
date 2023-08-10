import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import { getServerSession } from "next-auth";

export async function GET() {
  const data = await getServerSession();
  await connectToDb();
  const userSavedCourses = await User.findOne({ email: data.user.email })
    .populate("savedCourses")
    .exec();
  return new Response(JSON.stringify(userSavedCourses.savedCourses), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
