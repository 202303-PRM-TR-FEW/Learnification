import mongoose, { Schema, model, models } from "mongoose";
const courseSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Lesson'
    }
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  name: {
    type: String,
    required: true
  },
  teacherName: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  recommendedCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course'
    }
  ]
});

export const Course = models.Course || model("Course", courseSchema);