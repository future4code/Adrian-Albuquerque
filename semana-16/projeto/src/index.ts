import app from "./app";
import getAllUsers from "./endpoints/getAllUsers";
import getTaskById from "./endpoints/getTaskById";
import getUserById from "./endpoints/getUserById";
import putCreateTask from "./endpoints/putCreateTask";
import putCreateUser from "./endpoints/putCreateUser";
import putUpdateUserData from "./endpoints/putUpdateUserData";

app.put("/user", putCreateUser);
app.get("/users/:id", getUserById);
app.put("/user/edit/:id", putUpdateUserData);
app.put("/task", putCreateTask);
app.get("/task/:id", getTaskById)
app.get("/user/all", getAllUsers);
