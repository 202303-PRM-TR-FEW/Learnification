import SpecificCourse from '@/app/Components/SpesificCourse/SpesificCourse';
import { getServerSession } from 'next-auth';
import { headers } from 'next/dist/client/components/headers';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params: { courseId } }) {
  const session = await getServerSession()
  const host = headers().get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const response = await fetch(`${protocol}://${host}/api/my-learning/${courseId}`, {
    method: "POST",
    body: JSON.stringify(session)
  });
  if (response.status === 401) {
    redirect(`/sign-in?callbackUrl=/spesific-course/${courseId}`)
  }
  if (!response.ok) {
    notFound()
  }
  const course = await response.json();
  return {
    title: course.title,
    description: course.description,
  }
}


export default async function SpesificCoursePage({ params: { courseId } }) {
  const session = await getServerSession()
  const host = headers().get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const response = await fetch(`${protocol}://${host}/api/my-learning/${courseId}`, {
    method: "POST",
    body: JSON.stringify(session)
  });
  if (response.status === 401) {
    redirect(`/sign-in?callbackUrl=/spesific-course/${courseId}`)
  }
  if (!response.ok) {
    notFound()
  }
  const course = await response.json();
  return (
    <>
      <SpecificCourse course={course} />
    </>
  )
}
