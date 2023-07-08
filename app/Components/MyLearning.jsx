'use client';
import React, { useState } from "react";

export default function MyLearning() {
  const [isBookmarked, setBookmarked] = useState([false, false]);

  const handleBookmarkClick = (index) => {
    const updatedBookmarks = [...isBookmarked];
    updatedBookmarks[index] = !updatedBookmarks[index];
    setBookmarked(updatedBookmarks);
  };

  const courses = [
    {courseName: "Becoming A Photographer", teacherName: "Clara Manning", percentage: "69%", image: "https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080", bookMark: 0},
    { courseName: "Design Thinking 2.0",teacherName: "Chris Kinley",percentage: "27%", image: "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg", bookMark: 1}
  ]

  return (
    <div style={{width:"100vw"}}>
      <h1 className="my-6 ml-10 font-bold text-2xl text-gray-950">My Learning</h1>
      <div className="ml-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
        {courses.map((course, index)=>{
            return (
                <div key={index} className="shadow rounded-2xl lg:p-3 py-2 md:mr-2 h-36 h-auto relative w-11/12 flex flex-col">
                    <div className="flex">
                        <div className="mr-5 h-auto w-1/2 md:w-1/4 lg:w-1/2">
                            <img src={course.image}
                            alt='Course Main Image'
                            className="w-full h-32 ml-2 md:w-44 md:h-32 lg:w-44 lg:mt-1 lg:h-32 rounded-2xl"
                            />
                        </div>
                        <div className="w-full">
                            <h6 className="text-s lg:text-l font-bold break-words mt-1 md:mt-3 mb-1">{course.courseName}</h6>
                            <p className="text-s lg:text-md text-zinc-600 mb-3">{course.teacherName}</p>
                            <div className="bg-stone-200 h-3 w-full rounded-lg">
                              <div className="bg-blue-500 h-full rounded-lg mt-3" style={{ width: `${course.percentage}` }}></div>
                              <p className="font-bold text-zinc-500 mt-3">{course.percentage}% complete</p>
                            </div>
                            
                        </div>
                        <div className="absolute top-0 right-0 m-2 cursor-pointer hidden md:block">
                            <div className={`flex justify-center items-center w-9 h-9 p-0 overflow-hidden text-blue-600 bg-gray-300 rounded-lg border-0 ${
                                isBookmarked[course.bookMark] ? "opacity-100" : "opacity-25"}`}
                                onClick={() => handleBookmarkClick(course.bookMark)}>
                                    <svg className="w-4 h-4 overflow-visible opacity-100 z-1 fill-current" viewBox="0 0 384 512">
                                        <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
                                    </svg>
                            </div>
                        </div>
                    </div>
                    <div className="self-center mt-3 w-full md:hidden">
                        <div className={`flex justify-center items-center w-auto h-9 mx-2 overflow-hidden text-blue-950 bg-gray-300 rounded-lg border-0 ${
                            isBookmarked[course.bookMark] ? "opacity-100" : "opacity-25"}`}
                            onClick={() => handleBookmarkClick(course.bookMark)}>
                                <p className="mr-2">Save</p>
                                <svg className="w-4 h-4 overflow-visible opacity-100 z-1 fill-current" viewBox="0 0 384 512">
                                    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
                                </svg>
                            </div>
                    </div>
                </div>
                )
            })}
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 mb-4 md:mt-6 md:w-44 lg:mt-8 lg:w-44 rounded-xl">
          See All
        </button>
      </div>
    </div>
  );
}