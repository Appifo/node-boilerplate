import mongoose from "mongoose";
import Course from "../models/Course.js";

// Get a single course
const getCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course exist." });
  }

  const course = await Course.findById(id);

  if (!course) {
    return res.status(404).json("No such course exist.");
  }

  res.status(200).json(course);
};

// Get all courses.....
const getAllCourses = async (req, res) => {
  console.log("get all courses");
  const courses = await Course.find({}).sort({ createdAt: -1 });

  res.status(200).json(courses);
};

// Create a new course
const createCourse = async (req, res) => {
  console.log("Req.Body: ", req.body);
  const { title, description, price, status, level } = req.body;

  try {
    const course = await Course.create({ title, description, price, status, level });
    if (!course) {
      return res.status(400).json({ error: "No course created error." });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update course
const updateCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such course exist." });
  }

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!course) {
    return res.status(404).json("No such course exist.");
  }

  res.status(200).json(course);
};

// Delete a course
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such course exist." });
  }

  const course = await Course.findOneAndDelete({ _id: id });

  if (!course) {
    return res.status(404).json({ error: "No such course exist." });
  }

  res.status(200).json(course);
};

// Export crud methods
export { getCourse, getAllCourses, createCourse, updateCourse, deleteCourse };
