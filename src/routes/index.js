import authRouter from "./auth.js";
import userRouter from "./users.js";
import courseRouter from "./courses.js";
import moduleRouter from "./modules.js";
import lessonRouter from "./lessons.js";
import assignmentRoute from "./assignments.js";
import enrollmentRoute from "./enrollments.js";

export default (app) => {
  app.use("/v1", authRouter);
  app.use("/v1", userRouter);
  app.use("/v1", courseRouter);
  app.use("/v1", moduleRouter);
  app.use("/v1", lessonRouter);
  app.use("/v1", assignmentRoute);
  app.use("/v1", enrollmentRoute);
};
