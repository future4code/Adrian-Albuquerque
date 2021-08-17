import { app } from "./controller/app";
import { createTask } from "./controller/task/createTask";
import { getTaskById } from "./controller/task/getTaskById";
import { userRouter } from "./routes/user.route";

app.use("/user", userRouter);

app.use("/task");
app.put("/task", createTask);
app.get("/task/:id", getTaskById);
