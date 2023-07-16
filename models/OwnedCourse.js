import mongoose, { Schema, models, model } from "mongoose";

const ownedCourseSchema = new mongoose.Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseID: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  completionState: {
    type: [String],
    default: [],
  },
});

export const OwnedCourse = models.OwnedCourse || model("OwnedCourse", ownedCourseSchema);
