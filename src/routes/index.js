import userRouter from "./users.js";

export default (app) => {
    app.use('/v1', userRouter);
}