import { uploadImage } from "@/utils/AWS/uploadFetchImages"
import { User } from "@/models/User"
import { connectToDb } from "@/utils/database"
import convertImageToBuffer from "@/utils/imageToBuffer"

export async function POST(req) {
    const formData = await req.formData()
    const email = formData.get('email')
    const image = formData.get('image')
    const imageName = image.name
    const buffer = await convertImageToBuffer(image)
    try {
        let imageUrl = await uploadImage(buffer, imageName)
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