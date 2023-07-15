import createSampleData from '@/population/populateDatabase'
export async function GET() {
    await createSampleData();
}