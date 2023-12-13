import { Router } from "express";
import {
  getAllLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson
} from "../controllers/lessonController.js";

const lessonRouter = Router();

// Get all lessons.....
lessonRouter.get("/lessons", getAllLessons);

// Get a single lesson.....
lessonRouter.get("/lesson/:id", getLesson);

// Post a new lesson.....
lessonRouter.post("/lesson", createLesson);

// Delete a lesson.....
lessonRouter.delete("/lesson/:id", deleteLesson);

// Update a lesson.....
lessonRouter.patch("/lesson/:id", updateLesson);

export default lessonRouter;
