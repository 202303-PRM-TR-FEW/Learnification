import { uploadImage, uploadImage2 } from "@/app/Components/AWS/uploadFetchImages"
import { User } from "@/models/User"
import { connectToDb } from "@/utils/database"
var fs = require('fs')
export async function POST(req) {
    const formData = await req.formData()
    const email = formData.get('email')
    const file = formData.get('file')
    const imageName = file.name
    const stream = file.stream()
    const chunks = []
    for await (const chunk of stream) {
        chunks.push(chunk)
    }
    const buffer = Buffer.from(chunks.reduce((prev, curr) => [...prev, ...curr]))
    let imageUrl
    try {
        imageUrl = await uploadImage(buffer, imageName)
        await connectToDb()
        const user = await User.findOneAndUpdate({ email }, { profilePicture: imageUrl }, { new: true })
        return new Response(JSON.stringify({ imageUrl, user }), {
            status: 200,
        })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error), {
            status: 500,
        })
    }
}