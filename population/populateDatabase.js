import { User } from "@/models/User";
import { Course } from "@/models/Course";
import { Category } from "@/models/Category";
import { Sections } from "@/models/Sections";
import { Lesson } from "/models/Lesson";
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
  },
];

const courses = [
  {
    _id: new mongoose.Types.ObjectId(),
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
    description:
      "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
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
    description:
      "Learn how to use Agile Project Management, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Pivot Tables",
    tutor: {
      name: "Jane Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNDh8fGxhZHl8ZW58MXx8fHwxNjcyOTk1Njcw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080",
    duration: "1h 24m",
    rating: 4.6,
    description: "Explore the world of data science and analytics.",
    price: 24,
    recommendedCourses: [],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Powe BI",
    tutor: {
      name: "Ian Brown",
      imageUrl:
        "https://images.unsplash.com/photo-1590086782957-93c06ef21604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDF8fHx8MTY3Mjk2ODk3NQ&ixlib=rb-4.0.3&q=80&w=1080",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080",
    duration: "1h 17m",
    rating: 4.1,
    description: "Build cross-platform mobile apps using React Native.",
    price: 100,
    description:
      "Learn how to use Power BI, from beginner basics to advanced techniques, with online video tutorials taught by industry experts.",
    recommendedCourses: [],
  },
];

const categories = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Sales",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "HR",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Drawing",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Big Data",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Design",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Marketing",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Astronomy",
  },
];

/* need to prepare data for insertion */
/* duration in seconds */
const sections = [
  {
    _id: new mongoose.Types.ObjectId(),
    lesson: [],
    title: "Camera Configuration",
  },
];

const lesson = [
  [
    {
      name: "EXPOSURE explained",
      duration: 59,
      video:
        "https://www.youtube.com/watch?v=3k2lFp47e6A&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=1",
      completionState: false,
    },
    {
      name: "APERTURE explained",
      duration: 125,
      video:
        "https://www.youtube.com/watch?v=xgNAX-hKPU0&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=2",
      completionState: false,
    },
    {
      name: "ISO explained",
      duration: 145,
      video:
        "https://www.youtube.com/watch?v=dXFYuj6f2MM&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=3",
      completionState: false,
    },
    {
      name: "The EFFECTS of APERTURE and SHUTTER SPEED",
      duration: 53,
      video:
        "https://www.youtube.com/watch?v=Ns82n-RZzrU&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=4",
      completionState: false,
    },
    {
      name: "APERTURE and its EFFECTS Part I",
      duration: 284,
      video:
        "https://www.youtube.com/watch?v=NVI-TkW5pXU&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=5",
      completionState: false,
    },
    {
      name: "APERTURE and its EFFECTS Part II",
      duration: 260,
      video:
        "https://www.youtube.com/watch?v=3RHOBJLbNhg&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=6",
      completionState: false,
    },
    {
      name: "APERTURE and its EFFECTS Part III",
      duration: 252,
      video:
        "https://www.youtube.com/watch?v=eMSVD6_v9Xo&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=7",
      completionState: false,
    },
    {
      name: "SHUTTER SPEED and its EFFECTS Part I",
      duration: 166,
      video:
        "https://www.youtube.com/watch?v=T9cuhx_vY3Q&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=8",
      completionState: false,
    },
    {
      name: "SHUTTER SPEED and its EFFECTS Part II",
      duration: 183,
      video:
        "https://www.youtube.com/watch?v=gt5eUquQuUc&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=9",
      completionState: false,
    },
    {
      name: "ISO",
      duration: 425,
      video:
        "https://www.youtube.com/watch?v=7FPzcNEq6Xg&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=10",
      completionState: false,
    },
    {
      name: "Focus Points and Focus Rules",
      duration: 262,
      video:
        "https://www.youtube.com/watch?v=IkF8DK0g0Hg&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=11",
      completionState: false,
    },
  ],
  [
    {
      name: "Getting Started in User Experience Design",
      duration: 577,
      video:
        "https://www.youtube.com/watch?v=_lyzy-vChh4&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R",
      completionState: false,
    },
    {
      name: "5 UX Design Tips & Techniques",
      duration: 262,
      video:
        "https://www.youtube.com/watch?v=w6qyekgIo8I&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=2",
      completionState: false,
    },
    {
      name: "Front-End Development and UX/UI Design",
      duration: 1675,
      video:
        "https://www.youtube.com/watch?v=Ku6vPZXaUwg&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=4",
      completionState: false,
    },
    {
      name: "The 10 Principles for Good Design",
      duration: 582,
      video:
        "https://www.youtube.com/watch?v=38r_3ZKZIgg&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=4",
      completionState: false,
    },
    {
      name: "UX Design vs UI Design",
      duration: 936,
      video:
        "https://www.youtube.com/watch?v=RtPnVtXw6HU&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=5",
      completionState: false,
    },
    {
      name: "UX Design Book Review",
      duration: 382,
      video:
        "https://www.youtube.com/watch?v=vBzBgewl4ac&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=6",
      completionState: false,
    },
    {
      name: "How to Wireframe a Website or App",
      duration: 472,
      video:
        "https://www.youtube.com/watch?v=e2Oynq-mOLk&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=7",
      completionState: false,
    },
    {
      name: "Design Sketching for Web Designers & Product Designers",
      duration: 291,
      video:
        "https://www.youtube.com/watch?v=a9h7sI7tbA0&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=8",
      completionState: false,
    },
    {
      name: "3 Psychology Principles in UX Design",
      duration: 215,
      video:
        "https://www.youtube.com/watch?v=e_g8FxbrCWY&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=9",
      completionState: false,
    },
    {
      name: "The basics of Baseline Grids in UI & Web Design",
      duration: 573,
      video:
        "https://www.youtube.com/watch?v=rGq1GllRLjk&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=10",
      completionState: false,
    },
    {
      name: "Prototype & Test in 10 minutes or less",
      duration: 716,
      video:
        "https://www.youtube.com/watch?v=pijzYKAOluw&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=11",
      completionState: false,
    },
  ],
  [
    {
      name: "Digital Marketing 101",
      duration: 1052,
      video:
        "https://www.youtube.com/watch?v=h95cQkEWBx0&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P",
      completionState: false,
    },
    {
      name: "Introduction To Marketing",
      duration: 385,
      video:
        "https://www.youtube.com/watch?v=8Sj2tbh-ozE&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=2",
      completionState: false,
    },
    {
      name: "How To Advertise For A Small Business",
      duration: 809,
      video:
        "https://www.youtube.com/watch?v=2g2fSvvcN2Q&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=3",
      completionState: false,
    },
    {
      name: "How To Create A Marketing Plan",
      duration: 884,
      video:
        "https://www.youtube.com/watch?v=pbNlQs2eBDY&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=4",
      completionState: false,
    },
    {
      name: "Marketing 101 Crash Course",
      duration: 878,
      video:
        "https://www.youtube.com/watch?v=b8oP6oeJ5WM&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=5",
      completionState: false,
    },
    {
      name: "4 Principles Of Marketing Strategy",
      duration: 1134,
      video:
        "https://www.youtube.com/watch?v=n8M00vmp6v0&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=6",
      completionState: false,
    },
    {
      name: "5 Marketing Tips You Need To Know To GROW YOUR BUSINESS",
      duration: 750,
      video:
        "https://www.youtube.com/watch?v=7cCjX5MY28A&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=7",
      completionState: false,
    },
    {
      name: "Understanding Marketing Fundamentals",
      duration: 794,
      video:
        "https://www.youtube.com/watch?v=_R-f_AlRLT8&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=8",
      completionState: false,
    },
  ],
  [
    {
      name: "Learn How to Draw for Beginners",
      duration: 576,
      video:
        "https://www.youtube.com/watch?v=Wz6DrQeQ5rI&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51",
      completionState: false,
    },
    {
      name: "How to draw Anything with Construction",
      duration: 519,
      video:
        "https://www.youtube.com/watch?v=iTey_rv-Trc&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=2",
      completionState: false,
    },
    {
      name: "How to Draw Heads",
      duration: 575,
      video:
        "https://www.youtube.com/watch?v=pW9YCEZ5UjA&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=3",
      completionState: false,
    },
    {
      name: "Drawing Faces",
      duration: 574,
      video:
        "https://www.youtube.com/watch?v=yX0S_WWiopM&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=4",
      completionState: false,
    },
    {
      name: "Drawing Better Poses",
      duration: 756,
      video:
        "https://www.youtube.com/watch?v=6uVeYrHk8f0&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=5",
      completionState: false,
    },
    {
      name: "Perspective Drawing",
      duration: 615,
      video:
        "https://www.youtube.com/watch?v=qq8SO9tMI8k&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=6",
      completionState: false,
    },
    {
      name: "Drawing Objects in Perspective",
      duration: 539,
      video:
        "https://www.youtube.com/watch?v=5cJO0UVJGP4&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=7",
      completionState: false,
    },
  ],
];

const createSampleData = async () => {
  try {
    await connectToDb();
    // await User.deleteMany({});
    await Course.deleteMany({});
    await Category.deleteMany({});
    await Lesson.deleteMany({});
    await Sections.deleteMany({});
    for (const course of courses) {
      const newCourse = new Course(course);
      await newCourse.save();
    }
    // for (const user of users) {
    //   const newUser = new User(user);
    //   newUser.finishedCourses.push(courses[0]._id);
    //   newUser.courses.push(courses[0]._id);
    //   await newUser.save();
    // }
    for (const category of categories) {
      const newCategory = new Category(category);
      await newCategory.save();
    }

    for (const section of sections) {
      const newSection = new Sections(section);
      await newSection.save();
    }

    for (const lesson of lessons) {
      const newLesson = new Lesson(lesson);
      await newLesson.save();
    }
    console.log("Data created successfully!");
  } catch (error) {
    console.error("Error creating data:", error);
  }
};
export default createSampleData;
