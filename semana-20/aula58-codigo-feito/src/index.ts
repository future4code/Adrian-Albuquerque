import { app } from "./app";
import { getTaskById } from "./endpoints/getTaskById";
import { login } from "./endpoints/login";
import { signupController } from "./controller/users/signupController";
import { createTaskController } from "./controller/tasks/createTaskController";
import { allUsersController } from "./controller/users/allUsers.controller";

app.post("/users/signup", signupController);
app.post("/users/login", login);
app.get("/all", allUsersController);

app.post("/tasks", createTaskController);
app.get("/tasks/:id", getTaskById);
