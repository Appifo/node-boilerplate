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
userRouter.get("/users", getAllUsers);

// Get a single user.....
userRouter.get("/user/:id", getUser);

// Post a new user.....
userRouter.post("/user", createUser);

// Delete a user.....
userRouter.delete("/user/:id", deleteUser);

// Update a user.....
userRouter.patch("/user/:id", updateUser);

export default userRouter;
