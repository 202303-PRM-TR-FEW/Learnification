import mongoose, { Schema, models, model } from "mongoose";

const lessonSchema = new mongoose.Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  courseID: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  sectionId: {
    type: Schema.Types.ObjectId,
    ref: "Section",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  video: {
    type: String,
  },
  completionState: {
    type: [String],
    default: [],
  },
});

export const Lesson = models.Lesson || model("Lesson", lessonSchema);
