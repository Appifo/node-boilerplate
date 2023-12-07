import mongoose from "mongoose";
import User from "../models/User.js";

// Get a single user
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such user exist." });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json("No such user exist.");
  }

  res.status(200).json(user);
};

// Get all user
const getAllUsers = async (req, res) => {
  console.log("get all users");
  const users = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

// Create a new user
const createUser = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const user = await User.create({ name, email, phone });
    if (!user) {
      return res.status(400).json({ error: "No user created error." });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such user exist." });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(404).json("No such user exist.");
  }

  res.status(200).json(user);
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "No such user exist." });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "No such user exist." });
  }

  res.status(200).json(user);
};

// Export crud methods
export { getUser, getAllUsers, createUser, updateUser, deleteUser };
