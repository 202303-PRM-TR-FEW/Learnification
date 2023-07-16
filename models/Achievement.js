import mongoose, { Schema, models, model } from "mongoose";

const achievementSchema = new mongoose.Schema({
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
