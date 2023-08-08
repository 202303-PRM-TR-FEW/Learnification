import { Course } from "@/models/Course";
import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // await connectToDb();
        // await User.deleteMany({});
        // await Course.deleteMany({});
        // await Category.deleteMany({});
        return new NextResponse({
            message: "Database reset successfully!"
        }, {
            status: 200
        })
    } catch (error) {
        return new NextResponse({
            message: "Error resetting database!",
            error
        }, {
            status: 500
        });
    }
}
