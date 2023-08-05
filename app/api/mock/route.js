import { User } from '@/models/User';
import { Course } from '@/models/Course';
import { Category } from '@/models/Category';
import { Achievement } from '@/models/Achievement';
import { Transaction } from '@/models/Transaction';
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
    .populate('recommendedCourses')
    .exec();

  const achievement = await Achievement.find({})

  const transaction = await Transaction.find({})
    .populate('users')
    .populate('courses')
  
  console.log(`${users}\n${courses}\n${achievement}\n${transaction}`);

  return new Response(JSON.stringify({ users, courses, achievement, transaction }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}