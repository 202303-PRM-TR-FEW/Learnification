
import React from "react";
const CourseDetails = () => {
   
  const lessons = [
    {
      id: 0,
      title: "Introduction",
      videos: [
        {
          id: 1,
          title: "Introduction",
          url: "https://example.com/video1.mp4",
          duration: "4m 25s",
        }
      ],
    },
    {
      id: 1,
      title: "Lesson 1",
      videos: [
        {
          id: 1,
          title: "Video 1",
          url: "https://example.com/video1.mp4",
          duration: "3m 40s",
        },
        {
          id: 2,
          title: "Video 2",
          url: "https://example.com/video1.mp4",
          duration: "6m 10s",
        },
        {
          id: 3,
          title: "Video 3",
          url: "https://example.com/video1.mp4",
          duration: "4m 50s",
        },
      ],
    },
    {
      id: 2,
      title: "Lesson 2",
      videos: [
        {
          id: 1,
          title: "Video 1",
          url: "https://example.com/video1.mp4",
          duration: "5m 30s",
        },
        {
          id: 2,
          title: "Video 2",
          url: "https://example.com/video1.mp4",
          duration: "4m 15s",
        },
        {
          id: 3,
          title: "Video 3",
          url: "https://example.com/video1.mp4",
          duration: "3m 20s",
        },
        {
          id: 4,
          title: "Video 4",
          url: "https://example.com/video1.mp4",
          duration: "2m 45s",
        },
        {
            id: 5,
            title: "Video 5",
            url: "https://example.com/video1.mp4",
            duration: "4m 15s",
          },
          {
            id: 6,
            title: "Video 6",
            url: "https://example.com/video1.mp4",
            duration: "3m 20s",
          },
          {
            id: 7,
            title: "Video 7",
            url: "https://example.com/video1.mp4",
            duration: "2m 45s",
          },
      ],
    },
    {
      id: 3,
      title: "Lesson 3",
      videos: [
        {
          id: 1,
          title: "Video 1",
          url: "https://example.com/video1.mp4",
          duration: "6m 40s",
        },
        {
          id: 2,
          title: "Video 2",
          url: "https://example.com/video1.mp4",
          duration: "4m 55s",
        },
      ],
    },
    ,
    {
      id: 4,
      title: "Lesson 4",
      videos: [
        {
          id: 1,
          title: "Video 1",
          url: "https://example.com/video1.mp4",
          duration: "6m 40s",
        },
        {
          id: 2,
          title: "Video 2",
          url: "https://example.com/video1.mp4",
          duration: "4m 55s",
        },
      ],
    },
  ];

  return lessons;
};
export default CourseDetails;
