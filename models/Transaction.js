import { Schema, models, model } from "mongoose";

const transactionSchema = new Schema({
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
  courseID: [{
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }],
  transactionAmount: {
    type: Number,
    required: true,
  },
  transactionState: {
    type: [String],
    default: [],
  },
});

export const Transaction = models.Transaction || model("Transaction", transactionSchema);
