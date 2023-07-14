import mongoose from "mongoose";
import User from "@/models/User";

run()
async function run(){
    const furkan = await User.create({
        username: "Furkan",
        email: "Furkan@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    });
    const mj = await User.create({
        username: "Amdjed",
        email: "Amdjed@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    });
    const tugba = await User.create({
        username: "Tugba",
        email: "Tugba@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    });
    const ebla = await User.create({
        username: "Ebla",
        email: "Ebla@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    });
}


const users = [
    {
        username: "Furkan",
        email: "Furkan@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    },
    {
        username: "Amdjed",
        email: "Amdjed@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    },
    {
        username: "Tugba",
        email: "Tugba@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    },
    {
        username: "Ebla",
        email: "Ebla@gmail.com",
        password: "password123",
        location: "Istanbul",
        profilePicture: "",
        streak: 0,
        followers: [],
        following: [],
        hoursSpent: 0,
        finishedCourses: [],
        loginState: false,
    },
    {
      username: "john",
      email: "john@example.com",
      password: "password1",
      location: "New York",
      profilePicture: "profile1.jpg",
      streak: 10,
      followers: [],
      following: [],
      hoursSpent: 50,
      finishedCourses: [],
      loginState: false,
    },
    {
      username: "emma",
      email: "emma@example.com",
      password: "password2",
      location: "London",
      profilePicture: "profile2.jpg",
      streak: 5,
      followers: [],
      following: [],
      hoursSpent: 30,
      finishedCourses: [],
      loginState: false,
    },
    {
      username: "alex",
      email: "alex@example.com",
      password: "password3",
      location: "San Francisco",
      profilePicture: "profile3.jpg",
      streak: 15,
      followers: [],
      following: [],
      hoursSpent: 80,
      finishedCourses: [],
      loginState: false,
    },
    {
      username: "lisa",
      email: "lisa@example.com",
      password: "password4",
      location: "Paris",
      profilePicture: "profile4.jpg",
      streak: 8,
      followers: [],
      following: [],
      hoursSpent: 45,
      finishedCourses: [],
      loginState: false,
    },
  ];


  const courses = [
    {
      name: "Introduction to Programming",
      teacherName: "Alex",
      duration: 10,
      rating: 4.5,
      description: "Learn the basics of programming.",
      price: 50,
      recommendedCourses: [],
    },
    {
      name: "Web Development 101",
      teacherName: "Sophia",
      duration: 15,
      rating: 4.8,
      description: "Master the fundamentals of web development.",
      price: 75,
      recommendedCourses: [],
    },
    {
      name: "Data Science Fundamentals",
      teacherName: "David",
      duration: 12,
      rating: 4.3,
      description: "Explore the world of data science and analytics.",
      price: 90,
      recommendedCourses: [],
    },
    {
      name: "Mobile App Development",
      teacherName: "Sarah",
      duration: 18,
      rating: 4.6,
      description: "Build cross-platform mobile apps using React Native.",
      price: 100,
      recommendedCourses: [],
    },
   
  ];

  const createSampleData = async () => {
    try {
      await User.deleteMany({});
      await Course.deleteMany({});
      const createdUsers = await User.create(users);
      const createdCourses = await Course.create(courses);
  
      console.log("Data created successfully!");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };


  createSampleData();