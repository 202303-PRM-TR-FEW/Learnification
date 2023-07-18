import createSampleData from "@/population/populateDatabase";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(){
    await connectToDb();
    await createSampleData();
    return NextResponse(
        {
            status: 200,
            body: "Database populated successfully"
        }
    )
}