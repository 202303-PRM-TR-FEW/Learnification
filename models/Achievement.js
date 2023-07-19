import { Schema, models, model } from "mongoose";

const achievementSchema = new Schema({
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
