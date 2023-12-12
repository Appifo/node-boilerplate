import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    f_name: {
      type: String,
    },
    l_name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
