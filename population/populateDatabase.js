import { User } from "@/models/User";
import { Course } from "@/models/Course";
import { Category } from "@/models/Category"
import { connectToDb } from "@/utils/database";
import mongoose from "mongoose";

const users = [
  {
    _id: new mongoose.Types.ObjectId(),
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
    _id: new mongoose.Types.ObjectId(),
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
    _id: new mongoose.Types.ObjectId(),
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
  }
];


const courses = [
  {
    _id:new mongoose.Types.ObjectId(),
    imageUrl:
        "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Power BI",
    duration: "1h 53m",
    rating: 4.9,
    price: 24,
    tutor: {
      name: "John Eames",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
    },
    description: "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
    recommendedCourses: [],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Agile Project Management",
    duration: "59m",
    rating: 4.3,
    price: 18,
    tutor: {
      name: "Curt Rits",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/e0a18e97-fd79-46de-abbf-93741b790082.jpg",
    },
    recommendedCourses: [],
    description: "Learn how to use Agile Project Management, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
  },
  {
    _id:new mongoose.Types.ObjectId(),
    title: "Pivot Tables",
    tutor: {
      name: "Jane Doe",
      imageUrl: "https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNDh8fGxhZHl8ZW58MXx8fHwxNjcyOTk1Njcw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080",
    duration: "1h 24m",
    rating: 4.6,
    description: "Explore the world of data science and analytics.",
    price: 24,
    recommendedCourses: [],
  },
  {
    _id:new mongoose.Types.ObjectId(),
    title: "Powe BI",
    tutor: {
      name: "Ian Brown",
      imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
    },
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
    duration: "1h 17m",
    rating: 4.1,
    description: "Build cross-platform mobile apps using React Native.",
    price: 100,
    description:"Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
    recommendedCourses: [],
  },

];

const categories = [
  {
    _id:new mongoose.Types.ObjectId(),
    name:"Sales",
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name:"HR",
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name:"Drawing",
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name:"Big Data",
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name:"Design",
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name:"Marketing",
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name:"Astronomy",
  },
]

const createSampleData = async () => {
  try {
    await connectToDb();
    await User.deleteMany({});
    await Course.deleteMany({});
    await Category.deleteMany({});
    for (const course of courses) {
      const newCourse = new Course(course);
      await newCourse.save();
    }
    for (const user of users) {
      const newUser = new User(user);
      newUser.finishedCourses.push(courses[0]._id);
      newUser.courses.push(courses[0]._id);
      await newUser.save();
    }
    for (const category of categories){
      const newCategory = new Category(category);
      await newCategory.save();
    }
    console.log("Data created successfully!");
  } catch (error) {
    console.error("Error creating data:", error);
  }
};
export default createSampleData;