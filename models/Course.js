import { Schema, model, models } from "mongoose";
const courseSchema = new Schema({
  sections: [{
    type: Schema.Types.ObjectId,
    ref: 'Section'
  }],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  title: {
    type: String,
    required: true
  },
  tutor: {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  imageUrl :{
    type: String,
    required: true,
  },
  duration: {
    type: String,
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
  recommendedCourses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

export const Course = models.Course || model("Course", courseSchema);