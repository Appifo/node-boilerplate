import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";

// Get a single assignment
const getAssignment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such assignment exist." });
  }

  const assignment = await Assignment.findById(id);

  if (!assignment) {
    return res.status(404).json("No such assignment exist.");
  }

  res.status(200).json(assignment);
};

// Get all assignments.....
const getAllAssignments = async (req, res) => {
  console.log("get all assignments");
  const assignments = await Assignment.find({}).sort({ createdAt: -1 });

  res.status(200).json(assignments);
};

// Create a new assignment
const createAssignment = async (req, res) => {
  console.log("Req.Body: ", req.body);
  const { title, description, due_date } = req.body;

  try {
    const assignment = await Assignment.create({
      title,
      description,
      due_date,
    });
    if (!assignment) {
      return res.status(400).json({ error: "No assignment created error." });
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update assignment
const updateAssignment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such assignment exist." });
  }

  const assignment = await Assignment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!assignment) {
    return res.status(404).json("No such assignment exist.");
  }

  res.status(200).json(assignment);
};

// Delete a assignment
const deleteAssignment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such assignment exist." });
  }

  const assignment = await Assignment.findOneAndDelete({ _id: id });

  if (!assignment) {
    return res.status(404).json({ error: "No such assignment exist." });
  }

  res.status(200).json(assignment);
};

// Export crud methods
export {
  getAssignment,
  getAllAssignments,
  createAssignment,
  updateAssignment,
  deleteAssignment,
};
