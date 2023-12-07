import { Router } from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = Router();

// Get all users.....
userRouter.get("/", getAllUsers);

// Get a single user.....
userRouter.get("/:id", getUser);

// Post a new user.....
userRouter.post("/", createUser);

// Delete a user.....
userRouter.delete("/:id", deleteUser);

// Update a user.....
userRouter.patch("/:id", updateUser);

export default userRouter;
