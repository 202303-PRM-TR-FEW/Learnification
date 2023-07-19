import { Schema, models, model } from "mongoose";

const transactionSchema = new Schema({
  users: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courses: [{
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
