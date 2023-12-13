import mongoose from "mongoose";

const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    due_date: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);
