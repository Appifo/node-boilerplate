import mongoose from "mongoose";
import Lesson from "../models/Lesson.js";

// Get a single lesson
const getLesson = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such lesson exist." });
  }

  const lesson = await Lesson.findById(id);

  if (!lesson) {
    return res.status(404).json("No such lesson exist.");
  }

  res.status(200).json(lesson);
};

// Get all lessons.....
const getAllLessons = async (req, res) => {
  console.log("get all lessons");
  const lessons = await Lesson.find({}).sort({ createdAt: -1 });

  res.status(200).json(lessons);
};

// Create a new lesson
const createLesson = async (req, res) => {
  console.log("Req.Body: ", req.body);
  const { title, content, duration, order } = req.body;

  try {
    const lesson = await Lesson.create({ title, content, duration, order });
    if (!lesson) {
      return res.status(400).json({ error: "No lesson created error." });
    }
    res.status(200).json(lesson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update lesson
const updateLesson = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such lesson exist." });
  }

  const lesson = await Lesson.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!lesson) {
    return res.status(404).json("No such lesson exist.");
  }

  res.status(200).json(lesson);
};

// Delete a lesson
const deleteLesson = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such lesson exist." });
  }

  const lesson = await Lesson.findOneAndDelete({ _id: id });

  if (!lesson) {
    return res.status(404).json({ error: "No such lesson exist." });
  }

  res.status(200).json(lesson);
};

// Export crud methods
export { getLesson, getAllLessons, createLesson, updateLesson, deleteLesson };
