import { User } from "@/models/User";
import { connectToDb } from "@/utils/database";
import { generateFreeCourseIds } from "@/utils/freeCourses";
import { AES } from "crypto-js";

export async function POST(req) {
  const secret = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  try {
    const { email, password, name } = await req.json();
    const encryptedPassword = AES.encrypt(password, secret);
    await connectToDb();
    const { courseIds, status } = await generateFreeCourseIds();
    const newUser = await User.create({
      username: name,
      email,
      password: encryptedPassword,
      courses: status === "success" ? courseIds : [],
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
      status: 400,
    });
  }
}
