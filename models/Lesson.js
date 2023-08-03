import { Schema, models, model } from "mongoose";

const lessonSchema = new Schema({
  sections: {
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
    type: Boolean,
    default: [],
  },
});

export const Lesson = models.Lesson || model("Lesson", lessonSchema);
