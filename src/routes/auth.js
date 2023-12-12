import { Router } from "express";
import { login } from "../controllers/authController.js";

const authRouter = Router();

// Post a new user.....
authRouter.post("/login", login);

export default authRouter;
