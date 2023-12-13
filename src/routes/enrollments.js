import { Router } from "express";
import {
  getAllEnrollments,
  getEnrollment,
  createEnrollment,
  updateEnrollment,
  deleteEnrollment,
} from "../controllers/enrollmentController.js";

const enrollmentRouter = Router();

// Get all enrollments.....
enrollmentRouter.get("/enrollments", getAllEnrollments);

// Get a single enrollment.....
enrollmentRouter.get("/enrollment/:id", getEnrollment);

// Post a new enrollment.....
enrollmentRouter.post("/enrollment", createEnrollment);

// Delete a enrollment.....
enrollmentRouter.delete("/enrollment/:id", deleteEnrollment);

// Update a enrollment.....
enrollmentRouter.patch("/enrollment/:id", updateEnrollment);

export default enrollmentRouter;
