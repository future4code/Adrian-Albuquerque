import { app } from "./controller/app";
import { taskRoute } from "./routes/task.route";
import { userRouter } from "./routes/user.route";

app.use("/user", userRouter);
app.use("/task", taskRoute);
