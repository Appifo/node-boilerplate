import { Router } from "express";
import {
  getAllAssignments,
  getAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment,
} from "../controllers/assignmentController.js";

const assignmentRouter = Router();

// Get all assignments.....
assignmentRouter.get("/assignments", getAllAssignments);

// Get a single assignment.....
assignmentRouter.get("/assignment/:id", getAssignment);

// Post a new assignment.....
assignmentRouter.post("/assignment", createAssignment);

// Delete a assignment.....
assignmentRouter.delete("/assignment/:id", deleteAssignment);

// Update a assignment.....
assignmentRouter.patch("/assignment/:id", updateAssignment);

export default assignmentRouter;
