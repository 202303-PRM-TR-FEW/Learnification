import { Course } from "@/models/Course";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDb();
  const courses = await Course.find({}).exec();

  return new NextResponse(JSON.stringify({
    courses: courses
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
