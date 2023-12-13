import mongoose from "mongoose";
import Enrollment from "../models/Enrollment.js";

// Get a single enrollment
const getEnrollment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such enrollment exist." });
  }

  const enrollment = await Enrollment.findById(id);

  if (!enrollment) {
    return res.status(404).json("No such enrollment exist.");
  }

  res.status(200).json(enrollment);
};

// Get all enrollment
const getAllEnrollments = async (req, res) => {
  console.log("get all enrollments");
  const enrollments = await Enrollment.find({}).sort({ createdAt: -1 });

  res.status(200).json(enrollments);
};

// Create a new enrollment
const createEnrollment = async (req, res) => {
  const { status, grades, comments, notes, certificate } = req.body;

  try {
    const enrollment = await Enrollment.create({ status, grades, comments, notes, certificate });

    if (!enrollment) {
      return res.status(400).json({ error: "No enrollment created error." });
    }
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update enrollment
const updateEnrollment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such enrollment exist." });
  }

  const enrollment = await Enrollment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!enrollment) {
    return res.status(404).json("No such enrollment exist.");
  }

  res.status(200).json(enrollment);
};

// Delete a enrollment
const deleteEnrollment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such enrollment exist." });
  }

  const enrollment = await Enrollment.findOneAndDelete({ _id: id });

  if (!enrollment) {
    return res.status(404).json({ error: "No such enrollment exist." });
  }

  res.status(200).json(enrollment);
};

// Export crud methods
export {
  getEnrollment,
  getAllEnrollments,
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
};
