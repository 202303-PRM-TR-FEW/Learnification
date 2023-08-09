import { Course } from "@/models/Course";
import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import getUserCourseIds from "@/utils/getUserCourses";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { email } = await req.json()
    await connectToDb();
    const { userCourseIds, status } = await getUserCourseIds(email);
    if (status === "error") {
        return new NextResponse(
            JSON.stringify({ message: "Fetching user courses failed" }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
    }
    const coursesUserNotHave = (await Course.find({})).filter(course => !userCourseIds.includes(course._id.toString()));
    const randomizedCoures = coursesUserNotHave.sort(() => Math.random() - 0.5).slice(0, 4)
    return new NextResponse(JSON.stringify({
        courses: randomizedCoures
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}