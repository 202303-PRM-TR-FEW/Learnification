import { Schema, models, model } from "mongoose";

const achievementSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  criteria: {
    type: String,
    required: true,
  },
});

export const Achievement = models.Achievement || model("Achievement", achievementSchema);
