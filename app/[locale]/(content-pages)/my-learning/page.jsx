import MyLearning from "@/app/Components/MyLearning/MyLeaning"
import { headers } from "next/dist/client/components/headers"

export const metadata = {
  title: "My Learning",
  description: "My Learning Page is where user can see their purchased courses",
}


export default async function Page(){
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/my-learning`,{
    headers: headers()
  })
  const data = await response.json()
  return (
    <MyLearning courses={data} />
  )
}
