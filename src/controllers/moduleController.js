import mongoose from "mongoose";
import Module from "../models/Module.js";

// Get a single module
const getModule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such module exist." });
  }

  const module = await Module.findById(id);

  if (!module) {
    return res.status(404).json("No such module exist.");
  }

  res.status(200).json(module);
};

// Get all module
const getAllModules = async (req, res) => {
  console.log("get all modules");
  const modules = await Module.find({}).sort({ createdAt: -1 });

  res.status(200).json(modules);
};

// Create a new module
const createModule = async (req, res) => {
  const { title, description } = req.body;

  try {
    const module = await Module.create({ title, description });

    if (!module) {
      return res.status(400).json({ error: "No module created error." });
    }
    res.status(200).json(module);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update module
const updateModule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such module exist." });
  }

  const module = await Module.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!module) {
    return res.status(404).json("No such module exist.");
  }

  res.status(200).json(module);
};

// Delete a module
const deleteModule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such module exist." });
  }

  const module = await Module.findOneAndDelete({ _id: id });

  if (!module) {
    return res.status(404).json({ error: "No such module exist." });
  }

  res.status(200).json(module);
};

// Export crud methods
export { getModule, getAllModules, createModule, updateModule, deleteModule };
