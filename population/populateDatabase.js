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
              "https://youtu.be/3k2lFp47e6A",
            completionState: false,
          },
          {
            title: "APERTURE explained",
            duration: 125,
            urls:
              "https://youtu.be/xgNAX-hKPU0",
            completionState: false,
          },
          {
            title: "ISO explained",
            duration: 145,
            urls:
              "https://youtu.be/dXFYuj6f2MM",
            completionState: false,
          },
          {
            title: "The EFFECTS of APERTURE and SHUTTER SPEED",
            duration: 53,
            urls:
              "https://youtu.be/Ns82n-RZzrU",
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
              "https://youtu.be/NVI-TkW5pXU",
            completionState: false,
          },
          {
            title: "APERTURE and its EFFECTS Part II",
            duration: 260,
            urls:
              "https://youtu.be/3RHOBJLbNhg",
            completionState: false,
          },
          {
            title: "APERTURE and its EFFECTS Part III",
            duration: 252,
            urls:
              "https://youtu.be/eMSVD6_v9Xo",
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
              "https://youtu.be/T9cuhx_vY3Q",
            completionState: false,
          },
          {
            title: "SHUTTER SPEED and its EFFECTS Part II",
            duration: 183,
            urls:
              "https://youtu.be/gt5eUquQuUc",
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
              "https://youtu.be/7FPzcNEq6Xg",
            completionState: false,
          },
          {
            title: "Focus Points and Focus Rules",
            duration: 262,
            urls:
              "https://youtu.be/IkF8DK0g0Hg",
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
              "https://youtu.be/_lyzy-vChh4",
            completionState: false,
          },
          {
            title: "5 UX Design Tips & Techniques",
            duration: 262,
            urls:
              "https://youtu.be/w6qyekgIo8I",
            completionState: false,
          },
          {
            title: "Front-End Development and UX/UI Design",
            duration: 1675,
            urls:
              "https://www.youtube.com/live/Ku6vPZXaUwg?feature=share",
            completionState: false,
          },
          {
            title: "The 10 Principles for Good Design",
            duration: 582,
            urls:
              "https://youtu.be/38r_3ZKZIgg",
            completionState: false,
          },
          {
            title: "UX Design vs UI Design",
            duration: 936,
            urls:
              "https://youtu.be/RtPnVtXw6HU",
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
              "https://youtu.be/vBzBgewl4ac",
            completionState: false,
          },
          {
            title: "How to Wireframe a Website or App",
            duration: 472,
            urls:
              "https://youtu.be/e2Oynq-mOLk",
            completionState: false,
          },
          {
            title: "Design Sketching for Web Designers & Product Designers",
            duration: 291,
            urls:
              "https://youtu.be/a9h7sI7tbA0",
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
              "https://youtu.be/e_g8FxbrCWY",
            completionState: false,
          },
          {
            title: "The basics of Baseline Grids in UI & Web Design",
            duration: 573,
            urls:
              "https://youtu.be/rGq1GllRLjk",
            completionState: false,
          },
          {
            title: "Prototype & Test in 10 minutes or less",
            duration: 716,
            urls:
              "https://youtu.be/pijzYKAOluw",
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
              "https://youtu.be/h95cQkEWBx0",
            completionState: false,
          },
          {
            title: "Introduction To Marketing",
            duration: 385,
            urls:
              "https://youtu.be/8Sj2tbh-ozE",
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
              "https://youtu.be/2g2fSvvcN2Q",
            completionState: false,
          },
          {
            title: "How To Create A Marketing Plan",
            duration: 884,
            urls:
              "https://youtu.be/pbNlQs2eBDY",
            completionState: false,
          },
          {
            title: "Marketing 101 Crash Course",
            duration: 878,
            urls:
              "https://youtu.be/b8oP6oeJ5WM",
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
              "https://youtu.be/n8M00vmp6v0",
            completionState: false,
          },
          {
            title: "5 Marketing Tips You Need To Know To GROW YOUR BUSINESS",
            duration: 750,
            urls:
              "https://youtu.be/7cCjX5MY28A",
            completionState: false,
          },
          {
            title: "Understanding Marketing Fundamentals",
            duration: 794,
            urls:
              "https://youtu.be/_R-f_AlRLT8",
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
              "https://youtu.be/F4z_ex2mjro",
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
              "https://youtu.be/aa7j7A-PPiw",
            completionState: false,
          },
          {
            title: "Hadoop Components and Architecture Part 2",
            duration: 617,
            urls:
              "https://youtu.be/fN9GA6twEQg",
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
              "https://youtu.be/afweBBGQYZ0",
            completionState: false,
          },
          {
            title: "Windows vs Linux Operating System",
            duration: 441,
            urls:
              "https://youtu.be/8fvNsNDq-sY",
            completionState: false,
          },
          {
            title: "Linux Command Tutorial For Beginners",
            duration: 680,
            urls:
              "https://youtu.be/te71qgVCDlY",
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
              "https://youtu.be/Ih5cuJYYz6Y",
            completionState: false,
          },
          {
            title: "Hadoop Commands with example",
            duration: 792,
            urls:
              "https://youtu.be/Sos1QKaZySo",
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
              "https://youtu.be/rypH1TCXVQY",
            completionState: false,
          },
          {
            title: "Hive Installation Demo On Ubuntu",
            duration: 682,
            urls:
              "https://youtu.be/wPIawRML168",
            completionState: false,
          },
          {
            title: "Hive Query Language",
            duration: 1346,
            urls:
              "https://youtu.be/zEl6zSKMhTg",
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
              "https://youtu.be/kSk8ILi5yT8",
            completionState: false,
          },
          {
            title: "MySQL Installation on Ubuntu Step by Step",
            duration: 376,
            urls:
              "https://youtu.be/DO3MTLnT16M",
            completionState: false,
          },
          {
            title: "Sqoop Installation Steps",
            duration: 591,
            urls:
              "https://youtu.be/6X0qJ_UV7JE",
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
              "https://youtu.be/Wz6DrQeQ5rI",
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
              "https://youtu.be/iTey_rv-Trc",
            completionState: false,
          },
          {
            title: "How to Draw Heads",
            duration: 575,
            urls:
              "https://youtu.be/pW9YCEZ5UjA",
            completionState: false,
          },
          {
            title: "Drawing Faces",
            duration: 574,
            urls:
              "https://youtu.be/yX0S_WWiopM",
            completionState: false,
          },
          {
            title: "Drawing Better Poses",
            duration: 756,
            urls:
              "https://youtu.be/6uVeYrHk8f0",
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
              "https://youtu.be/qq8SO9tMI8k",
            completionState: false,
          },
          {
            title: "Drawing Objects in Perspective",
            duration: 539,
            urls:
              "https://youtu.be/5cJO0UVJGP4",
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
            title: "Taylorism, Scientific Management & Motivation",
            duration: "730",
            urls:
              "https://youtu.be/wZ5qFnAJG9o",
            completionState: false,
          },
          {
            title: 'Elton Mayo & The Human Relations',
            duration: "545",
            urls:
              "https://youtu.be/Zfq5lKBaUsQ",
            completionState: false,
          },
        ],
      },
      {
        title: "Theories and Labours",
        lessons: [
          {
            title: "Maslow's Hierarchy of Needs",
            duration: "516",
            urls:
              "https://youtu.be/pYk6E0OZGdU",
            completionState: false,
          },
          {
            title: "Herzberg's Two Factor Theory",
            duration: "444",
            urls:
              "https://youtu.be/nMfPAR_N1Do",
            completionState: false,
          },
          {
            title: "Labour Productivity",
            duration: "435",
            urls:
              "https://youtu.be/610qIGxW_DM",
            completionState: false,
          },
          {
            title: "Labour Turnover",
            duration: "563",
            urls:
              "https://youtu.be/-rmlnQcxwRI",
            completionState: false,
          },
        ],
      },
      {
        title: "Recruitment and Training",
        lessons: [
          {
            title: "Recruitment & Selection",
            duration: "514",
            urls:
              "https://youtu.be/fB2D09xPVKo",
            completionState: false,
          },
          {
            title: "Hard & Soft HR",
            duration: "642",
            urls:
              "https://youtu.be/-SCGHnqrMDM",
            completionState: false,
          },
          {
            title: "Training",
            duration: "544",
            urls:
              "https://youtu.be/50pD35uHYB8",
            completionState: false,
          },
        ],
      },
      {
        title: "Motivators",
        lessons: [
          {
            title: " Absenteeism",
            duration: "323",
            urls:
              "https://youtu.be/O2EZUP-PQK4",
            completionState: false,
          },
          {
            title: "Financial Motivators",
            duration: "532",
            urls:
              "https://youtu.be/s5JXVb6evSg",
            completionState: false,
          },
          {
            title: "Non Financial Motivators",
            duration: "572",
            urls:
              "https://youtu.be/-DWVl93ZNZc",
            completionState: false,
          },
          {
            title: "Hackman & Oldham's Job Characteristics Model",
            duration: "520",
            urls:
              "https://youtu.be/c1QGYiLDEig",
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
    duration: 6880,
    rating: 4.1,
    description:
      "Welcome to a transformative online learning experience that equips you with the knowledge and skills needed to excel in the dynamic field of Human Resources. Our comprehensive course, 'Navigating Human Resources: Mastering Essential HR Practices,' is designed to empower both aspiring HR professionals and business leaders seeking to enhance their people management expertise.",
    price: 16,
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
              "https://youtu.be/MCpi7xZz8bg",
            completionState: false,
          },
          {
            title: "Back to Basics Part 2A",
            duration: "781",
            urls:
              "https://youtu.be/8GNAYwOPbP4",
            completionState: false,
          },
          {
            title: "Back to Basics Part 2B",
            duration: "2098",
            urls:
              "https://youtu.be/u-qOXACgdQ0",
            completionState: false,
          },
          {
            title: "Back to Basics Part 3A",
            duration: "2082",
            urls:
              "https://youtu.be/lEn1txclNTU",
            completionState: false,
          },
          {
            title: "Back to Basics Part 3B",
            duration: "1212",
            urls:
              "https://youtu.be/QLlV2Hynf1g",
            completionState: false,
          },
          {
            title: "Partner With Me As Your Sales Coach and Trainer",
            duration: "124",
            urls:
              "https://youtu.be/E8-biaMPCgw",
            completionState: false,
          },
          {
            title: "Back to Basics Part 4A",
            duration: "1413",
            urls:
              "https://youtu.be/ZNl2Bc8rt1o",
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
              "https://youtu.be/CaeOG6mTM-w",
            completionState: false,
          },
          {
            title: "Celestial sphere: Horizontal Coordinates",
            duration: "471",
            urls:
              "https://youtu.be/x8cIqKmJf_s",
            completionState: false,
          },
          {
            title: "Celestial Sphere: Ecliptic Coordinates",
            duration: "358",
            urls:
              "https://youtu.be/d8HFDHq-HwQ",
            completionState: false,
          },
          {
            title: "Celestial Sphere: Hour Coordinates and Galactic coordinates",
            duration: "353",
            urls:
              "https://youtu.be/CXiWPOOHh1U",
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
              "https://youtu.be/2szAVccopOs",
            completionState: false,
          },
          {
            title: "Fundamental Law of Cosines",
            duration: "576",
            urls:
              "https://youtu.be/nYW5uHKVW5Q",
            completionState: false,
          },
          {
            title: "The dual (or polar) triangle.",
            duration: "391",
            urls:
              "https://youtu.be/uOW3yyo8-ps",
            completionState: false,
          },
          {
            title: "Law of Sines",
            duration: "243",
            urls:
              "https://youtu.be/2MhOzVOjf6o",
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
              "https://youtu.be/tN3J5OXTojU",
            completionState: false,
          },
          {
            title: "Hour to Horizontal",
            duration: "589",
            urls:
              "https://youtu.be/M4Z3kFC4E80",
            completionState: false,
          },
          {
            title: "Horizontal to Equatorial",
            duration: "182",
            urls:
              "https://youtu.be/kvlrh994k4s",
            completionState: false,
          },
          {
            title: "Coordinates of the Sun",
            duration: "536",
            urls:
              "https://youtu.be/cQiMhvfUspA",
            completionState: false,
          },
          {
            title: "Equatorial to Galactic Coordinates",
            duration: "411",
            urls:
              "https://youtu.be/XrA27sWZsE0",
            completionState: false,
          },
          {
            title: "Astronomical Time and Longitude",
            duration: "311",
            urls:
              "https://youtu.be/W43ocK1EjeY",
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
              "https://youtu.be/ZzcgdNpw_cI",
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
              "https://youtu.be/b1SD4PAXBQs",
            completionState: false,
          },
          {
            title: "How To Create AMAZON AFFILIATE WEBSITE",
            duration: "1932",
            urls:
              "https://youtu.be/WfmoqKNUwBg",
            completionState: false,
          },
          {
            title: "FREE Keyword Research for SEO",
            duration: "1031",
            urls:
              "https://youtu.be/NFX5p1G1t1Q",
            completionState: false,
          },
          {
            title: "How to Write SEO FRIENDLY ARTICLE on Wordpress",
            duration: "1486",
            urls:
              "https://youtu.be/WfAjE5-2Vcs",
            completionState: false,
          },
          {
            title: "How To Create AMAZON AFFILIATE ACCOUNT",
            duration: "829",
            urls:
              "https://youtu.be/pRx8SZ2lC94",
            completionState: false,
          },
          {
            title: "What is SEO? Black Hat SEO? Search Engine Optimization",
            duration: "972",
            urls:
              "https://youtu.be/_Zav7CDI65I",
            completionState: false,
          },
          {
            title: "How to CREATE BACKLINKS",
            duration: "1384",
            urls:
              "https://youtu.be/EHGodf4vmys",
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
              "https://youtu.be/us1XyayQ6fU",
            completionState: false,
          },
          {
            title: "Create and Drop Database and Table",
            duration: "1373",
            urls:
              "https://youtu.be/9DwlJSlwvqY",
            completionState: false,
          },
          {
            title: "MYSQL NULL Values, UPDATE,DELETE,ALTER Query",
            duration: "938",
            urls:
              "https://youtu.be/7s0kdfiTLRE",
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
              "https://youtu.be/cKNQRAMoQHw",
            completionState: false,
          },
          {
            title: "Primary Key, Foreign Key, Check And Default Constraints",
            duration: "1424",
            urls:
              "https://youtu.be/z-Zg39LzcW8",
            completionState: false,
          },
          {
            title: "Indexing In MySQL",
            duration: "655",
            urls:
              "https://youtu.be/xDDlB51dX5E",
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
              "https://youtu.be/p7pYiynUNAo",
            completionState: false,
          },
          {
            title: "Discussing All Types Of Joins",
            duration: "784",
            urls:
              "https://youtu.be/_OfQeKAUFtA",
            completionState: false,
          },
          {
            title: "MYSQL Stored Procedures",
            duration: "601",
            urls:
              "https://youtu.be/vFZ5rtf71WU",
            completionState: false,
          },
          {
            title: "MySQL Interview Question With Solutions",
            duration: "1409",
            urls:
              "https://youtu.be/KTdItTJVvFQ",
            completionState: false,
          },
          {
            title: "MySQL Interview Question With Solutions",
            duration: "1264",
            urls:
              "https://youtu.be/nEYdSiKygCI",
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
            urls: 'https://youtu.be/cjmtUrPXDPI',
            completionState: false,
          },
          {
            title: 'Close the Sale Faster with These 2 Powerfully Effective Closing Techniques',
            duration: '354',
            urls: 'https://youtu.be/IjZ6bEPxi5w',
            completionState: false,
          },
          {
            title: 'How to Make Buying Easy for the Customer & Make More Sales',
            duration: '303',
            urls: 'https://youtu.be/gpfY4ZNbdSc',
            completionState: false,
          },
          {
            title: 'Recognize Buying Signals',
            duration: '287',
            urls: 'https://youtu.be/jnKObmrwzLY',
            completionState: false,
          },
          {
            title: 'How To Set More Sales Meetings',
            duration: '116',
            urls: 'https://youtu.be/HsNrWXFk5Vo',
            completionState: false,
          },
          {
            title: 'How To Prepare For A Sales Call',
            duration: '138',
            urls: 'https://youtu.be/qSuPDf1vXQw',
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
