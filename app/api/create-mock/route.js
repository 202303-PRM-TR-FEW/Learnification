import createSampleData from "@/population/populateDatabase";
import { connectToDb } from "@/utils/database";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await connectToDb();
    // await createSampleData(); no need for population anymore
    await mongoose.connection.close()
    return new NextResponse(
        {
            status: 200,
            body: "Database populated successfully"
        }
    )
}