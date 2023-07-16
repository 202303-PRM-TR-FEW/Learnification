import mongoose, { Schema, models, model } from "mongoose";

const categorySchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: true,
  },
});

export const Category = models.Category || model("Category", categorySchema);
