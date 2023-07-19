import { Schema, models, model } from "mongoose";

const categorySchema = new Schema({
  courses: [{
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }],
  name: {
    type: String,
    required: true,
  },
});

export const Category = models.Category || model("Category", categorySchema);
