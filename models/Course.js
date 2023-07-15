import mongoose, { Schema, model, models } from "mongoose";
const courseSchema = new mongoose.Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  lessonId: {
    type: Schema.Types.ObjectId,
    ref: 'Lesson'
  },
  categoryID: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
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
  recommendedCourses: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Course'
  }
});

export const Course = models.Course || model("Couse", courseSchema);