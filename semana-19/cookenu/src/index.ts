import { app } from "./app";
import { getProfile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

app.post("/signup", signup);
app.post("/login", login);
app.post("/user/profile", getProfile);
