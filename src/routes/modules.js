import { Router } from "express";
import {
  getAllModules,
  getModule,
  createModule,
  updateModule,
  deleteModule,
} from "../controllers/moduleController.js";

const moduleRouter = Router();

// Get all modules.....
moduleRouter.get("/modules", getAllModules);

// Get a single module.....
moduleRouter.get("/module/:id", getModule);

// Post a new module.....
moduleRouter.post("/module", createModule);

// Delete a module.....
moduleRouter.delete("/module/:id", deleteModule);

// Update a module.....
moduleRouter.patch("/module/:id", updateModule);

export default moduleRouter;
