import { Router } from "express";
import {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
} from "../controllers/courseController.js";

const courseRouter = Router();

// Get all courses.....
courseRouter.get("/courses", getAllCourses);

// Get a single course.....
courseRouter.get("/course/:id", getCourse);

// Post a new course.....
courseRouter.post("/course", createCourse);

// Delete a course.....
courseRouter.delete("/course/:id", deleteCourse);

// Update a course.....
courseRouter.patch("/course/:id", updateCourse);

export default courseRouter;
