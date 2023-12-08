import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    course_description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
