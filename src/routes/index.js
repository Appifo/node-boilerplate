import authRouter from "./auth.js";
import userRouter from "./users.js";
import courseRouter from "./courses.js";

export default (app) => {
  app.use("/v1", authRouter);
  app.use("/v1", userRouter);
  app.use("/v1", courseRouter);
};
