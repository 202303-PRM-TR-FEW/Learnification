import { Course } from "@/models/Course";
import { connectToDb } from "@/utils/database";

/* need to prepare data for insertion */
/* duration in seconds */

const courses = [
  {
    sections: [
      {
        title: "Components Explained",
        lessons: [
          {
            title: "EXPOSURE explained",
            duration: 59,
            urls:
              "https://www.youtube.com/watch?v=3k2lFp47e6A&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=1",
            completionState: false,
          },
          {
            title: "APERTURE explained",
            duration: 125,
            urls:
              "https://www.youtube.com/watch?v=xgNAX-hKPU0&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=2",
            completionState: false,
          },
          {
            title: "ISO explained",
            duration: 145,
            urls:
              "https://www.youtube.com/watch?v=dXFYuj6f2MM&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=3",
            completionState: false,
          },
          {
            title: "The EFFECTS of APERTURE and SHUTTER SPEED",
            duration: 53,
            urls:
              "https://www.youtube.com/watch?v=Ns82n-RZzrU&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=4",
            completionState: false,
          },
        ],
      },
      {
        title: "Aperture In Depth",
        lessons: [
          {
            title: "APERTURE and its EFFECTS Part I",
            duration: 284,
            urls:
              "https://www.youtube.com/watch?v=NVI-TkW5pXU&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=5",
            completionState: false,
          },
          {
            title: "APERTURE and its EFFECTS Part II",
            duration: 260,
            urls:
              "https://www.youtube.com/watch?v=3RHOBJLbNhg&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=6",
            completionState: false,
          },
          {
            title: "APERTURE and its EFFECTS Part III",
            duration: 252,
            urls:
              "https://www.youtube.com/watch?v=eMSVD6_v9Xo&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=7",
            completionState: false,
          },
        ],
      },
      {
        title: "Shutter Speed In Depth",
        lessons: [
          {
            title: "SHUTTER SPEED and its EFFECTS Part I",
            duration: 166,
            urls:
              "https://www.youtube.com/watch?v=T9cuhx_vY3Q&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=8",
            completionState: false,
          },
          {
            title: "SHUTTER SPEED and its EFFECTS Part II",
            duration: 183,
            urls:
              "https://www.youtube.com/watch?v=gt5eUquQuUc&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=9",
            completionState: false,
          },
        ],
      },
      {
        title: "ISO In Depth",
        lessons: [
          {
            title: "ISO",
            duration: 425,
            urls:
              "https://www.youtube.com/watch?v=7FPzcNEq6Xg&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=10",
            completionState: false,
          },
          {
            title: "Focus Points and Focus Rules",
            duration: 262,
            urls:
              "https://www.youtube.com/watch?v=IkF8DK0g0Hg&list=PL7W5udALs-AnaamfbQJGk8QX0Dz2PricA&index=11",
            completionState: false,
          },
        ],
      },
    ],
    category: "Astronomy",
    title: "Becoming a Photographer",
    tutor: {
      name: "Wolf Amri",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1336202114880692224/O0bKPVFZ_400x400.jpg",
    },
    imageUrl:
      "https://meetstheeyestudios.com/wp-content/uploads/2017/05/tips-better-photographer.png",
    duration: 2214,
    rating: 4.6,
    description:
      "Unleash your creative potential and embark on a captivating journey into the world of photography with our comprehensive online course, 'Capturing Moments: Mastering Photography Essentials.' Whether you're a budding enthusiast, an aspiring professional, or simply an individual looking to enhance your visual storytelling skills, this course is designed to empower you with the knowledge and techniques needed to create stunning, impactful photographs.",
    price: 23,
    recommendedCourses: [],
  },

  {
    sections: [
      {
        title: "Introduction To UI/UX",
        lessons: [
          {
            title: "Getting Started in User Experience Design",
            duration: 577,
            urls:
              "https://www.youtube.com/watch?v=_lyzy-vChh4&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R",
            completionState: false,
          },
          {
            title: "5 UX Design Tips & Techniques",
            duration: 262,
            urls:
              "https://www.youtube.com/watch?v=w6qyekgIo8I&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=2",
            completionState: false,
          },
          {
            title: "Front-End Development and UX/UI Design",
            duration: 1675,
            urls:
              "https://www.youtube.com/watch?v=Ku6vPZXaUwg&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=4",
            completionState: false,
          },
          {
            title: "The 10 Principles for Good Design",
            duration: 582,
            urls:
              "https://www.youtube.com/watch?v=38r_3ZKZIgg&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=4",
            completionState: false,
          },
          {
            title: "UX Design vs UI Design",
            duration: 936,
            urls:
              "https://www.youtube.com/watch?v=RtPnVtXw6HU&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=5",
            completionState: false,
          },
        ],
      },
      {
        title: "Deeper Inside UI/UX Design",
        lessons: [
          {
            title: "UX Design Book Review",
            duration: 382,
            urls:
              "https://www.youtube.com/watch?v=vBzBgewl4ac&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=6",
            completionState: false,
          },
          {
            title: "How to Wireframe a Website or App",
            duration: 472,
            urls:
              "https://www.youtube.com/watch?v=e2Oynq-mOLk&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=7",
            completionState: false,
          },
          {
            title: "Design Sketching for Web Designers & Product Designers",
            duration: 291,
            urls:
              "https://www.youtube.com/watch?v=a9h7sI7tbA0&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=8",
            completionState: false,
          },
        ],
      },
      {
        title: "Think Like a UI/UX Designer",
        lessons: [
          {
            title: "3 Psychology Principles in UX Design",
            duration: 215,
            urls:
              "https://www.youtube.com/watch?v=e_g8FxbrCWY&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=9",
            completionState: false,
          },
          {
            title: "The basics of Baseline Grids in UI & Web Design",
            duration: 573,
            urls:
              "https://www.youtube.com/watch?v=rGq1GllRLjk&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=10",
            completionState: false,
          },
          {
            title: "Prototype & Test in 10 minutes or less",
            duration: 716,
            urls:
              "https://www.youtube.com/watch?v=pijzYKAOluw&list=PLrtjkLnNjGHvbsas7_YIpkAvGsqkRsn-R&index=11",
            completionState: false,
          },
        ],
      },
    ],
    category: "Design",
    title: "UI/UX Design",
    tutor: {
      name: "Jesse Showalter",
      imageUrl:
        "https://scontent.fist7-2.fna.fbcdn.net/v/t1.6435-9/165152565_1785514021645155_7339494433050708378_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2c4854&_nc_ohc=cUBdkZBdC4MAX9aG8JA&_nc_ht=scontent.fist7-2.fna&oh=00_AfD-UspZ5KUpQAEFVrnQayY45wxX_u0dPQpLvereZI9jlg&oe=64F608C6",
    },
    imageUrl:
      "https://uploads-ssl.webflow.com/5e2745f871002114dd63c9cf/646d35e432b27674959edac5_courseuiux.webp",
    duration: 6681,
    rating: 4.8,
    description:
      "A UI/UX Design mini-course that cuts through the noise, simplifies Figma, strikes the perfect balance between theory and practice, & teaches the basics all in a weekend and for the price of dinner.",
    price: 30,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Marketing: Genesis",
        lessons: [
          {
            title: "Digital Marketing 101",
            duration: 1052,
            urls:
              "https://www.youtube.com/watch?v=h95cQkEWBx0&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P",
            completionState: false,
          },
          {
            title: "Introduction To Marketing",
            duration: 385,
            urls:
              "https://www.youtube.com/watch?v=8Sj2tbh-ozE&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=2",
            completionState: false,
          },
        ],
      },
      {
        title: "Marketing: Gateway To Success",
        lessons: [
          {
            title: "How To Advertise For A Small Business",
            duration: 809,
            urls:
              "https://www.youtube.com/watch?v=2g2fSvvcN2Q&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=3",
            completionState: false,
          },
          {
            title: "How To Create A Marketing Plan",
            duration: 884,
            urls:
              "https://www.youtube.com/watch?v=pbNlQs2eBDY&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=4",
            completionState: false,
          },
          {
            title: "Marketing 101 Crash Course",
            duration: 878,
            urls:
              "https://www.youtube.com/watch?v=b8oP6oeJ5WM&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=5",
            completionState: false,
          },
        ],
      },
      {
        title: "Marketing: Fundamentals, Tips and Principalities",
        lessons: [
          {
            title: "4 Principles Of Marketing Strategy",
            duration: 1134,
            urls:
              "https://www.youtube.com/watch?v=n8M00vmp6v0&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=6",
            completionState: false,
          },
          {
            title: "5 Marketing Tips You Need To Know To GROW YOUR BUSINESS",
            duration: 750,
            urls:
              "https://www.youtube.com/watch?v=7cCjX5MY28A&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=7",
            completionState: false,
          },
          {
            title: "Understanding Marketing Fundamentals",
            duration: 794,
            urls:
              "https://www.youtube.com/watch?v=_R-f_AlRLT8&list=PLxb4RhBMfU_FDfzNl1x0d-rrOA5cNEN2P&index=8",
            completionState: false,
          },
        ],
      },
    ],
    category: "Marketing",
    title: "Marketing 101",
    tutor: {
      name: "Adam Erhart",
      imageUrl:
        "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147745428/settings_images/VZfyAVQlQKomsW2qWSEg_file.jpg",
    },
    imageUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/853/787/desktop-wallpaper-the-5-best-digital-marketing-courses-for-the-modern-digital-marketing.jpg",
    duration: 6686,
    rating: 4.0,
    description:
      "Welcome to an exciting online learning experience that will empower you with the essential knowledge and skills to excel in the dynamic world of marketing. Our comprehensive course, 'Unleash Your Brand: Mastering Marketing Strategies,' is your gateway to understanding the intricacies of modern marketing, enabling you to create impactful campaigns, engage your audience, and drive business success.",
    price: 15,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Introduction",
        lessons: [
          {
            title: "Big Data and Hadoop Introduction",
            duration: 564,
            urls:
              "https://www.youtube.com/watch?v=F4z_ex2mjro&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7",
            completionState: false,
          },
        ],
      },
      {
        title: "Hadoop Components and Architecture",
        lessons: [
          {
            title: "Hadoop Components and Architecture Part 1",
            duration: 857,
            urls:
              "https://www.youtube.com/watch?v=aa7j7A-PPiw&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=2",
            completionState: false,
          },
          {
            title: "Hadoop Components and Architecture Part 2",
            duration: 617,
            urls:
              "https://www.youtube.com/watch?v=fN9GA6twEQg&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=3",
            completionState: false,
          },
        ],
      },
      {
        title: "Linux World",
        lessons: [
          {
            title: "Installing Ubuntu VM on windows machine",
            duration: 525,
            urls:
              "https://www.youtube.com/watch?v=afweBBGQYZ0&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=4",
            completionState: false,
          },
          {
            title: "Windows vs Linux Operating System",
            duration: 441,
            urls:
              "https://www.youtube.com/watch?v=8fvNsNDq-sY&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=5",
            completionState: false,
          },
          {
            title: "Linux Command Tutorial For Beginners",
            duration: 680,
            urls:
              "https://www.youtube.com/watch?v=te71qgVCDlY&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=6",
            completionState: false,
          },
        ],
      },
      {
        title: "Hadoop World",
        lessons: [
          {
            title: "Hadoop Installation Guide Step by Step",
            duration: 1469,
            urls:
              "https://www.youtube.com/watch?v=Ih5cuJYYz6Y&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=7",
            completionState: false,
          },
          {
            title: "Hadoop Commands with example",
            duration: 792,
            urls:
              "https://www.youtube.com/watch?v=Sos1QKaZySo&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=8",
            completionState: false,
          },
        ],
      },
      {
        title: "Hive World",
        lessons: [
          {
            title: "Hive Tutorial For Beginners",
            duration: 521,
            urls:
              "https://www.youtube.com/watch?v=rypH1TCXVQY&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=9",
            completionState: false,
          },
          {
            title: "Hive Installation Demo On Ubuntu",
            duration: 682,
            urls:
              "https://www.youtube.com/watch?v=wPIawRML168&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=10",
            completionState: false,
          },
          {
            title: "Hive Query Language",
            duration: 1346,
            urls:
              "https://www.youtube.com/watch?v=zEl6zSKMhTg&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=11",
            completionState: false,
          },
        ],
      },
      {
        title: "Sqoop World",
        lessons: [
          {
            title: "Sqoop Architecture",
            duration: 435,
            urls:
              "https://www.youtube.com/watch?v=kSk8ILi5yT8&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=12",
            completionState: false,
          },
          {
            title: "MySQL Installation on Ubuntu Step by Step",
            duration: 376,
            urls:
              "https://www.youtube.com/watch?v=DO3MTLnT16M&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=13",
            completionState: false,
          },
          {
            title: "Sqoop Installation Steps",
            duration: 591,
            urls:
              "https://www.youtube.com/watch?v=6X0qJ_UV7JE&list=PLmPJQXJiMoUVb-pXjo0MyZELiiykZyAo7&index=14",
            completionState: false,
          },
        ],
      },
    ],
    category: "Big Data",
    title: "Big Data 101",
    tutor: {
      name: "Aman",
      imageUrl:
        "https://media.licdn.com/dms/image/D4E03AQHTtK26_dbA-w/profile-displayphoto-shrink_400_400/0/1690997509419?e=1696464000&v=beta&t=uiaO2Im1TtfZWhDopavVKJhWvZ3KHcMcUlptx5DJ32k",
    },
    imageUrl:
      "https://cloudxlab.com/blog/wp-content/uploads/2018/04/why-Big-Data-Career-is-a-smart-choice.jpg",
    duration: 9896,
    rating: 5.0,
    description:
      "Welcome to an exciting online learning experience that will empower you with the essential knowledge and skills to excel in the dynamic world of marketing. Our comprehensive course, 'Unleash Your Brand: Mastering Marketing Strategies,' is your gateway to understanding the intricacies of modern marketing, enabling you to create impactful campaigns, engage your audience, and drive business success.",
    price: 40,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Entering Arts World",
        lessons: [
          {
            title: "Learn How to Draw for Beginners",
            duration: 576,
            urls:
              "https://www.youtube.com/watch?v=Wz6DrQeQ5rI&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51",
            completionState: false,
          },
        ],
      },
      {
        title: "Baby Steps Through Fundamentals",
        lessons: [
          {
            title: "How to draw Anything with Construction",
            duration: 519,
            urls:
              "https://www.youtube.com/watch?v=iTey_rv-Trc&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=2",
            completionState: false,
          },
          {
            title: "How to Draw Heads",
            duration: 575,
            urls:
              "https://www.youtube.com/watch?v=pW9YCEZ5UjA&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=3",
            completionState: false,
          },
          {
            title: "Drawing Faces",
            duration: 574,
            urls:
              "https://www.youtube.com/watch?v=yX0S_WWiopM&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=4",
            completionState: false,
          },
          {
            title: "Drawing Better Poses",
            duration: 756,
            urls:
              "https://www.youtube.com/watch?v=6uVeYrHk8f0&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=5",
            completionState: false,
          },
        ],
      },
      {
        title: "Perspective of an Artist",
        lessons: [
          {
            title: "Perspective Drawing",
            duration: 615,
            urls:
              "https://www.youtube.com/watch?v=qq8SO9tMI8k&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=6",
            completionState: false,
          },
          {
            title: "Drawing Objects in Perspective",
            duration: 539,
            urls:
              "https://www.youtube.com/watch?v=5cJO0UVJGP4&list=PLinIGX5eeFZLUdWmbfUu0eDdTgTzYuA51&index=7",
            completionState: false,
          },
        ],
      },
    ],
    category: "Drawing",
    title: "Drawing 101",
    tutor: {
      name: "Brad",
      imageUrl: "https://brad.site/artschool/images/pod-thumb-color-notext.jpg",
    },
    imageUrl: "https://wallpapercave.com/wp/wp10268104.jpg",
    duration: 4154,
    rating: 3.9,
    description:
      "Embark on an inspiring artistic journey with our immersive online course, 'From Lines to Life: Mastering the Art of Drawing.' Whether you're a complete beginner or a seasoned artist looking to refine your skills, this course is your gateway to unlocking the magic of visual expression through drawing.",
    price: 5,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Introduction To HR",
        lessons: [
          {
            title: "Introduction to Human Resource Management",
            duration: "332",
            urls:
              "https://www.youtube.com/watch?v=T7bSMzg7x-s&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy",
            completionState: false,
          },
          {
            title: 'The Manager"s Role in Strategic Human Resource Management',
            duration: "442",
            urls:
              "https://www.youtube.com/watch?v=qEN4MVBacys&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=2",
            completionState: false,
          },
        ],
      },
      {
        title: "Analysing and Selecting Employees",
        lessons: [
          {
            title: "Job Analysis and the Talent Management Process",
            duration: "562",
            urls:
              "https://www.youtube.com/watch?v=y7GpP8oMkVQ&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=3",
            completionState: false,
          },
          {
            title: "Personnel Planning and Recruitment",
            duration: "650",
            urls:
              "https://www.youtube.com/watch?v=kTXdTOZZ6Ek&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=4",
            completionState: false,
          },
          {
            title: "Employee testing and selection",
            duration: "542",
            urls:
              "https://www.youtube.com/watch?v=LJsgAcx8v-M&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=5",
            completionState: false,
          },
          {
            title: "Interviewing Candidates",
            duration: "261",
            urls:
              "https://www.youtube.com/watch?v=LARCn4yWP54&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=6",
            completionState: false,
          },
        ],
      },
      {
        title: "HR Fundamentals",
        lessons: [
          {
            title: "Training and Developing Employees",
            duration: "723",
            urls:
              "https://www.youtube.com/watch?v=TJbyV5ydgMw&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=7",
            completionState: false,
          },
          {
            title: "Performance Management and Appraisal",
            duration: "673",
            urls:
              "https://www.youtube.com/watch?v=jQNZY5e-jX8&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=8",
            completionState: false,
          },
          {
            title: "Establishing effective pay programs",
            duration: "673",
            urls:
              "https://www.youtube.com/watch?v=MEFju-U7wh4&list=PL3Y_p3e-Lne31qsip5QPMjsEEYd0fqpKy&index=9",
            completionState: false,
          },
        ],
      },
    ],
    category: "HR",
    title: "Human Resources 101",
    tutor: {
      name: "Future Hendrix",
      imageUrl:
        "https://i.guim.co.uk/img/media/fe14e9d4aa8f995705412844e03fae801ea9b720/0_280_3000_1799/master/3000.jpg?width=620&dpr=2&s=none",
    },
    imageUrl:
      "https://schoolofhealthcare.net/wp-content/uploads/2022/11/HR-Management.jpg",
    duration: 4867,
    rating: 3.5,
    description:
      "Welcome to a transformative online learning experience that equips you with the knowledge and skills needed to excel in the dynamic field of Human Resources. Our comprehensive course, 'Navigating Human Resources: Mastering Essential HR Practices,' is designed to empower both aspiring HR professionals and business leaders seeking to enhance their people management expertise.",
    price: 0,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "The Sales Combination Parts",
        lessons: [
          {
            title: "Back to Basics Part 1",
            duration: "1725",
            urls:
              "https://www.youtube.com/watch?v=MCpi7xZz8bg&list=PLCwOIOwZBb1j_dSPpoz1e02l64TMzbp3x",
            completionState: false,
          },
          {
            title: "Back to Basics Part 2A",
            duration: "781",
            urls:
              "https://www.youtube.com/watch?v=8GNAYwOPbP4&list=PLCwOIOwZBb1j_dSPpoz1e02l64TMzbp3x&index=2",
            completionState: false,
          },
          {
            title: "Back to Basics Part 2B",
            duration: "2098",
            urls:
              "https://www.youtube.com/watch?v=u-qOXACgdQ0&list=PLCwOIOwZBb1j_dSPpoz1e02l64TMzbp3x&index=3",
            completionState: false,
          },
          {
            title: "Back to Basics Part 3A",
            duration: "2082",
            urls:
              "https://www.youtube.com/watch?v=lEn1txclNTU&list=PLCwOIOwZBb1j_dSPpoz1e02l64TMzbp3x&index=4",
            completionState: false,
          },
          {
            title: "Back to Basics Part 3B",
            duration: "1212",
            urls:
              "https://www.youtube.com/watch?v=QLlV2Hynf1g&list=PLCwOIOwZBb1j_dSPpoz1e02l64TMzbp3x&index=5",
            completionState: false,
          },
          {
            title: "Partner With Me As Your Sales Coach and Trainer",
            duration: "124",
            urls:
              "https://www.youtube.com/watch?v=E8-biaMPCgw&list=PLCwOIOwZBb1j_dSPpoz1e02l64TMzbp3x&index=6",
            completionState: false,
          },
          {
            title: "Back to Basics Part 4A",
            duration: "1413",
            urls:
              "https://www.youtube.com/watch?v=ZNl2Bc8rt1o&list=PLCwOIOwZBb1j_dSPpoz1e02l64TMzbp3x&index=7",
            completionState: false,
          },
        ],
      },
    ],
    category: "Sales",
    title: "Sales 101",
    tutor: {
      name: "Michael Neuendorff",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQEPg2O3J8eEVQ/profile-displayphoto-shrink_800_800/0/1575702465946?e=2147483647&v=beta&t=FNqCssvtA2CDnITbccMTk0O0UF8NJM6QE8OvV3CkkDA",
    },
    imageUrl:
      "https://st2.depositphotos.com/4428871/9782/i/950/depositphotos_97826796-stock-photo-sales-training-sale-word-cloud.jpg",
    duration: 9435,
    rating: 4.7,
    description:
      "Welcome to an empowering online learning experience designed to equip you with the fundamental skills and techniques needed to excel in the dynamic field of sales. Our comprehensive course, 'Elevate Your Sales Game: Mastering Essential Selling Strategies,' is your pathway to becoming a proficient and strategic sales professional, ready to drive revenue and forge lasting client relationships.",
    price: 28,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Celestial sphere",
        lessons: [
          {
            title: "Celestial sphere: Definitions and Equatorial Coordinates",
            duration: "643",
            urls:
              "https://www.youtube.com/watch?v=CaeOG6mTM-w&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu",
            completionState: false,
          },
          {
            title: "Celestial sphere: Horizontal Coordinates",
            duration: "471",
            urls:
              "https://www.youtube.com/watch?v=x8cIqKmJf_s&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=2",
            completionState: false,
          },
          {
            title: "Celestial Sphere: Ecliptic Coordinates",
            duration: "358",
            urls:
              "https://www.youtube.com/watch?v=d8HFDHq-HwQ&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=3",
            completionState: false,
          },
          {
            title: "Celestial Sphere: Hour Coordinates and Galactic coordinates",
            duration: "353",
            urls:
              "https://www.youtube.com/watch?v=CXiWPOOHh1U&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=4",
            completionState: false,
          },
        ],
      },
      {
        title: "Astro-Laws",
        lessons: [
          {
            title: "The spherical triangle",
            duration: "482",
            urls:
              "https://www.youtube.com/watch?v=2szAVccopOs&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=5",
            completionState: false,
          },
          {
            title: "Fundamental Law of Cosines",
            duration: "576",
            urls:
              "https://www.youtube.com/watch?v=nYW5uHKVW5Q&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=6",
            completionState: false,
          },
          {
            title: "The dual (or polar) triangle.",
            duration: "391",
            urls:
              "https://www.youtube.com/watch?v=uOW3yyo8-ps&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=7",
            completionState: false,
          },
          {
            title: "Law of Sines",
            duration: "243",
            urls:
              "https://www.youtube.com/watch?v=2MhOzVOjf6o&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=8",
            completionState: false,
          },
        ],
      },
      {
        title: "Astro-Equations",
        lessons: [
          {
            title: "Gauss Groups",
            duration: "260",
            urls:
              "https://www.youtube.com/watch?v=tN3J5OXTojU&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=9",
            completionState: false,
          },
          {
            title: "Hour to Horizontal",
            duration: "589",
            urls:
              "https://www.youtube.com/watch?v=M4Z3kFC4E80&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=10",
            completionState: false,
          },
          {
            title: "Horizontal to Equatorial",
            duration: "182",
            urls:
              "https://www.youtube.com/watch?v=kvlrh994k4s&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=11",
            completionState: false,
          },
          {
            title: "Coordinates of the Sun",
            duration: "536",
            urls:
              "https://www.youtube.com/watch?v=cQiMhvfUspA&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=12",
            completionState: false,
          },
          {
            title: "Equatorial to Galactic Coordinates",
            duration: "411",
            urls:
              "https://www.youtube.com/watch?v=XrA27sWZsE0&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=13",
            completionState: false,
          },
          {
            title: "Astronomical Time and Longitude",
            duration: "311",
            urls:
              "https://www.youtube.com/watch?v=W43ocK1EjeY&list=PLatuGW739E0ldBl6XKiJ5vzCJVPOscPgu&index=14",
            completionState: false,
          },
        ],
      },
    ],
    category: "Astronomy",
    title: "Astronomy 101",
    tutor: {
      name: "Wladimir Lyra",
      imageUrl:
        "https://500queerscientists.com/wp-content/uploads/2020/03/Wladimir-Lyra.jpg",
    },
    imageUrl:
      "https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    duration: 5806,
    rating: 5.0,
    description:
      "Embark on an awe-inspiring journey through the cosmos with our captivating online course, 'Journey to the Cosmos: Exploring the Wonders of Astronomy.' Whether you're a curious stargazer, an aspiring astrophysicist, or simply someone eager to unravel the mysteries of the universe, this course is your gateway to unlocking the secrets of the night sky and beyond.",
    price: 60,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Introduction",
        lessons: [
          {
            title: "AMAZON AFFILIATE MARKETING for Beginners",
            duration: "777",
            urls:
              "https://www.youtube.com/watch?v=ZzcgdNpw_cI&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q",
            completionState: false,
          },
        ],
      },
      {
        title: "Technics In Depth",
        lessons: [
          {
            title: "How to find MOST PROFITABLE Niches",
            duration: "985",
            urls:
              "https://www.youtube.com/watch?v=b1SD4PAXBQs&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q&index=2",
            completionState: false,
          },
          {
            title: "How To Create AMAZON AFFILIATE WEBSITE",
            duration: "1932",
            urls:
              "https://www.youtube.com/watch?v=WfmoqKNUwBg&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q&index=3",
            completionState: false,
          },
          {
            title: "FREE Keyword Research for SEO",
            duration: "1031",
            urls:
              "https://www.youtube.com/watch?v=NFX5p1G1t1Q&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q&index=4",
            completionState: false,
          },
          {
            title: "How to Write SEO FRIENDLY ARTICLE on Wordpress",
            duration: "1486",
            urls:
              "https://www.youtube.com/watch?v=WfAjE5-2Vcs&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q&index=5",
            completionState: false,
          },
          {
            title: "How To Create AMAZON AFFILIATE ACCOUNT",
            duration: "829",
            urls:
              "https://www.youtube.com/watch?v=pRx8SZ2lC94&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q&index=6",
            completionState: false,
          },
          {
            title: "What is SEO? Black Hat SEO? Search Engine Optimization",
            duration: "972",
            urls:
              "https://www.youtube.com/watch?v=_Zav7CDI65I&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q&index=7",
            completionState: false,
          },
          {
            title: "How to CREATE BACKLINKS",
            duration: "1384",
            urls:
              "https://www.youtube.com/watch?v=EHGodf4vmys&list=PLifnQOsGyOSTYxFVLLZQo0MPEP2e5dh1Q&index=8",
            completionState: false,
          },
        ],
      },
    ],
    category: "Marketing",
    title: "Amazon Marketing",
    tutor: {
      name: "Ankur Aggarwal",
      imageUrl:
        "https://scontent.fist7-2.fna.fbcdn.net/v/t39.30808-6/224800914_214220284040432_5766062880802533689_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DjSDh40E1LUAX-oEhgV&_nc_ht=scontent.fist7-2.fna&oh=00_AfCaO9WHwsqDU_PcVJBpUHUK9_OQxXrPINzZlPU-CRkzPw&oe=64D44C7E",
    },
    imageUrl: "https://i.ytimg.com/vi/pRx8SZ2lC94/maxresdefault.jpg",
    duration: 9396,
    rating: 4.2,
    description:
      "Do you want to learn how to use Amazon's advertising platform to grow your e-commerce business? If so, then this course is for you! In this course, you will learn everything you need to know about Amazon advertising, from creating and optimizing campaigns to tracking your results. You will also learn about the different types of Amazon ads, including Sponsored Products, Headline Search, and Product Display.",
    price: 18,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Python/SQL Fundamentals",
        lessons: [
          {
            title: "MySQL With Python And Data Science",
            duration: "822",
            urls:
              "https://www.youtube.com/watch?v=us1XyayQ6fU&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl",
            completionState: false,
          },
          {
            title: "Create and Drop Database and Table",
            duration: "1373",
            urls:
              "https://www.youtube.com/watch?v=9DwlJSlwvqY&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=2",
            completionState: false,
          },
          {
            title: "MYSQL NULL Values, UPDATE,DELETE,ALTER Query",
            duration: "938",
            urls:
              "https://www.youtube.com/watch?v=7s0kdfiTLRE&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=3",
            completionState: false,
          },
        ],
      },
      {
        title: "Constrains",
        lessons: [
          {
            title: "SQL Constraints Part1",
            duration: "1305",
            urls:
              "https://www.youtube.com/watch?v=cKNQRAMoQHw&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=4",
            completionState: false,
          },
          {
            title: "Primary Key, Foreign Key, Check And Default Constraints",
            duration: "1424",
            urls:
              "https://www.youtube.com/watch?v=z-Zg39LzcW8&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=5",
            completionState: false,
          },
          {
            title: "Indexing In MySQL",
            duration: "655",
            urls:
              "https://www.youtube.com/watch?v=xDDlB51dX5E&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=6",
            completionState: false,
          },
        ],
      },
      {
        title: "Interview Preparations",
        lessons: [
          {
            title: "Interview Preparation MySql Views",
            duration: "970",
            urls:
              "https://www.youtube.com/watch?v=p7pYiynUNAo&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=7",
            completionState: false,
          },
          {
            title: "Discussing All Types Of Joins",
            duration: "784",
            urls:
              "https://www.youtube.com/watch?v=_OfQeKAUFtA&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=8",
            completionState: false,
          },
          {
            title: "MYSQL Stored Procedures",
            duration: "601",
            urls:
              "https://www.youtube.com/watch?v=vFZ5rtf71WU&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=9",
            completionState: false,
          },
          {
            title: "MySQL Interview Question With Solutions",
            duration: "1409",
            urls:
              "https://www.youtube.com/watch?v=KTdItTJVvFQ&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=10",
            completionState: false,
          },
          {
            title: "MySQL Interview Question With Solutions",
            duration: "1264",
            urls:
              "https://www.youtube.com/watch?v=nEYdSiKygCI&list=PLZoTAELRMXVNMRWlVf0bDDSxNEn38u9Cl&index=11",
            completionState: false,
          },
        ],
      },
    ],
    category: "Big Data",
    title: "SQL/Python Data Extraction",
    tutor: {
      name: "Krish Naik",
      imageUrl:
        "https://yt3.googleusercontent.com/QNtBLeISPlGM3_fRns1wnC0VvdVfSlRa8UA8G6AJNTRLTdGoODL7z32fP3hRpoGscfhM9FrGdA=s900-c-k-c0x00ffffff-no-rj",
    },
    imageUrl: "https://www.freecodecamp.org/news/content/images/2020/08/Untitled-design-1-.png",
    duration: 11545,
    rating: 3.9,
    description:
      "Do you want to learn how to use SQL and Python to analyze data? If so, then this course is for you! In this course, you will learn the basics of SQL and Python, as well as how to use them together to extract, transform, and analyze data. You will also learn about the different types of data analysis tasks that you can perform with SQL and Python, such as data cleaning, data mining, and statistical analysis.",
    price: 15,
    recommendedCourses: [],
  },
  {
    sections: [
      {
        title: "Secrets of Sales",
        lessons: [
          {
            title: 'How to script your sales pitch process to close more sales',
            duration: '244',
            urls: 'https://www.youtube.com/watch?v=cjmtUrPXDPI&list=PLmicRgxv1BCWBH1cwXmOE3YJ3fpt0YMm6',
            completionState: false,
          },
          {
            title: 'Close the Sale Faster with These 2 Powerfully Effective Closing Techniques',
            duration: '354',
            urls: 'https://www.youtube.com/watch?v=IjZ6bEPxi5w&list=PLmicRgxv1BCWBH1cwXmOE3YJ3fpt0YMm6&index=2',
            completionState: false,
          },
          {
            title: 'How to Make Buying Easy for the Customer & Make More Sales',
            duration: '303',
            urls: 'https://www.youtube.com/watch?v=gpfY4ZNbdSc&list=PLmicRgxv1BCWBH1cwXmOE3YJ3fpt0YMm6&index=3',
            completionState: false,
          },
          {
            title: 'Recognize Buying Signals',
            duration: '287',
            urls: 'https://www.youtube.com/watch?v=jnKObmrwzLY&list=PLmicRgxv1BCWBH1cwXmOE3YJ3fpt0YMm6&index=4',
            completionState: false,
          },
          {
            title: 'How To Set More Sales Meetings',
            duration: '116',
            urls: 'https://www.youtube.com/watch?v=HsNrWXFk5Vo&list=PLmicRgxv1BCWBH1cwXmOE3YJ3fpt0YMm6&index=5',
            completionState: false,
          },
          {
            title: 'How To Prepare For A Sales Call',
            duration: '138',
            urls: 'https://www.youtube.com/watch?v=qSuPDf1vXQw&list=PLmicRgxv1BCWBH1cwXmOE3YJ3fpt0YMm6&index=6',
            completionState: false,
          },
        ]
      },
    ],
    category: "Sales",
    title: "Scripts and Tricks for a Successful Sale",
    tutor: {
      name: "Owen Hemsath",
      imageUrl:
        "https://yt3.googleusercontent.com/ytc/AOPolaTSmSDvHQ0idqh99DfCtvhEOHqyni_VnNkC9jrS6A=s176-c-k-c0x00ffffff-no-rj",
    },
    imageUrl: "https://i.ytimg.com/vi/AQm5pzSd8ww/hqdefault.jpg",
    duration: 1442,
    rating: 3.6,
    description:
      "Do you want to learn how to close more deals? If so, then this course is for you! In this course, you will learn the tricks and scripts that top salespeople use to close more deals. You will also learn how to build rapport, ask the right questions, and overcome objections.",
    price: 0,
    recommendedCourses: [],
  },
];

const createSampleData = async () => {
  try {
    await connectToDb();
    await Course.deleteMany({});
    for (const course of courses) {
      const newCourse = new Course(course);
      await newCourse.save();
    }
    console.log("Data created successfully!");
  } catch (error) {
    console.error("Error creating data:", error);
  }
};
export default createSampleData;
