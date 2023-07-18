import createSampleData from "@/population/populateDatabase";
import { connectToDb } from "@/utils/database";

export async function GET(){
    await connectToDb();
    await createSampleData();
}