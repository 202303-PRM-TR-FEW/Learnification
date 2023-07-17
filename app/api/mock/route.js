import { User } from '@/models/User';
import { Course } from '@/models/Course';
import { Lesson } from '@/models/Lesson';
import { Category } from '@/models/Category';
import { Achievement } from '@/models/Achievement';
import { Transaction } from '@/models/Transaction';
import { connectToDb } from '@/utils/database';

export async function GET() {
  await connectToDb();

  const users = await User.find({})
    .populate("courseID")
    .populate("achievementID")
    .populate("followers")
    .populate("following")
    .populate("finishedCourses")
    .exec();

  const courses = await Course.find({})
    .populate('lessonId')
    .populate('categoryID')
    .populate('recommendedCourses')
    .exec();
    
  const lesson = await Lesson.find({})
    .populate('courseID')
    .populate('sectionID')
    .exec();
  
  const category = await Category.find({})
    .populate('courseID')

  const achievement = await Achievement.find({})

  const transaction = await Transaction.find({})
    .populate('userID')
    .populate('courseID')

  
  console.log(`${users}\n${courses}\n${lesson}\n${category}\n${achievement}\n${transaction}`);

  return new Response(JSON.stringify({ users, courses, lesson, category, achievement, transaction }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
