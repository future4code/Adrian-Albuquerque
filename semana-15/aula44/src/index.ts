import { app } from "./app";
import { getUsers } from "./endpoint/getUsers";

app.get("/users", getUsers);
