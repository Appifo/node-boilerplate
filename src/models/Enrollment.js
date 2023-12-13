import mongoose from "mongoose";

const Schema = mongoose.Schema;

const enrollmentSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
    },
    grades: Number,
    comments: String,
    notes: String,
    certificate: String,
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", enrollmentSchema);
