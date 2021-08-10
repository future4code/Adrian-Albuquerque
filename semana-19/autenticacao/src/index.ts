import app from "./app";
import { createUser } from "./endpoints/createUser";
import { loginUser } from "./endpoints/loginUser";
import { getUserByToken } from "./endpoints/getUserByToken";

app.post("/create", createUser);
app.post("/user/signup", loginUser);
app.get("/user/:token", getUserByToken);
