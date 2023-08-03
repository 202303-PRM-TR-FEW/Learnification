import { User } from '@/models/User';
import { Course } from '@/models/Course';
import { Lesson } from '@/models/Lesson';
import { Category } from '@/models/Category';
import { Achievement } from '@/models/Achievement';
import { Transaction } from '@/models/Transaction';
import { Sections } from "@/models/Sections"
import { connectToDb } from '@/utils/database';


export async function GET() {
  await connectToDb();

  const users = await User.find({})
    .populate("courses")
    .populate("achievements")
    .populate("followers")
    .populate("following")
    .populate("finishedCourses")
    .exec();

  const courses = await Course.find({})
    .populate('sections')
    .populate('categories')
    .populate('recommendedCourses')
    .exec();
    
  const lesson = await Lesson.find({})
    .populate('sections')
    .exec();
  
  const category = await Category.find({})
    .populate('courses')

  const achievement = await Achievement.find({})

  const transaction = await Transaction.find({})
    .populate('users')
    .populate('courses')

  const sections = await Sections.find({})
    .populate('lessons')

  
  console.log(`${users}\n${courses}\n${lesson}\n${category}\n${achievement}\n${transaction}\n${sections}`);

  return new Response(JSON.stringify({ users, courses, lesson, category, achievement, transaction, sections }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}