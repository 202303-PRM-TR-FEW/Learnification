import { User } from "@/models/User";
import { uploadImage } from "@/utils/AWS/uploadFetchImages";
import { connectToDb } from "@/utils/database";
import { generateFreeCourseIds } from "@/utils/freeCourses";
import convertImageToBuffer from "@/utils/imageToBuffer";
import { AES } from "crypto-js";

export async function POST(req) {
  const secret = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  try {
    const formData = await req.formData()
    const email = formData.get('email')
    const name = formData.get('name')
    const password = formData.get('password')
    const image = formData.get('image')
    const imageName = image.name
    const country = formData.get('country')

    const buffer = await convertImageToBuffer(image)
    const imageUrl = await uploadImage(buffer, imageName)

    const encryptedPassword = AES.encrypt(password, secret);

    await connectToDb();
    const { courseIds, status } = await generateFreeCourseIds();

    const newUser = await User.create({
      username: name,
      email,
      password: encryptedPassword,
      courses: status === "success" ? courseIds : [],
      location: country,
      profilePicture: imageUrl
    });
    await newUser.save();

    return new Response(JSON.stringify(newUser), {
      status: 200,
    });
  } catch (err) {
    if (err.code === 11000) {
      return new Response(JSON.stringify({ message: "Email already exists" }), {
        status: 400,
      });
    }
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
