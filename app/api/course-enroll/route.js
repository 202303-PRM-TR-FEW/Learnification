import { User } from "@/models/User"
import { connectToDb } from "@/utils/database"
import { headers } from "next/dist/client/components/headers"

export async function POST(req) {
    const { email, courseId, locale } = await req.json()
    console.log(email)
    if (!email) {
        return new Response(JSON.stringify({ message: locale === "en" ? "You need to sign in to buy this course." : "Kursu satın almak için giriş yapmanız gerekiyor." }), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 401
        })
    }

    try {
        await connectToDb()
        const user = await User.findOne({ email }).exec()
        if (user.courses.includes(courseId)) {
            return new Response(JSON.stringify({ message: locale === "en" ? "You already bought this course." : "Bu kursu zaten satın aldınız." }), {
                headers: {
                    "Content-Type": "application/json"
                },
                status: 400
            })
        }
        user.courses.push(courseId)
        await user.save()
        return new Response(JSON.stringify({ message: locale === "en" ? "Course bought successfully." : "Kurs başarıyla satın alındı." }), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 200
        })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: locale === "en" ? "Something went wrong." : "Bir şeyler ters gitti." }), {
            headers: {
                "Content-Type": "application/json"
            },
            status: 500
        })
    }
}