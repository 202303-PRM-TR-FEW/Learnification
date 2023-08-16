import CourseDetail from '@/app/Components/CourseDetail/CourseDetail'
import { headers } from 'next/dist/client/components/headers';
import { notFound, } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params: { courseId } }) {
  const host = headers().get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const url = `${protocol}://${host}/api/course/${courseId}`;
  const response = await fetch(url);
  if (!response.ok) {
    return {
      title: 'Not found',
      description: 'Not found',
    }
  }
  const course = await response.json();
  return {
    title: course.title,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params: { courseId } }) {
  const host = headers().get('host');
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const url = `${protocol}://${host}/api/course/${courseId}`;
  const response = await fetch(url);
  if (!response.ok) {
    notFound()
  }
  const course = await response.json();
  return (
    <CourseDetail course={course} />
  )
}
