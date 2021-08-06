import app from "./app";
import getUsers from "./endpoints/getUsers";
import postCreateUser from "./endpoints/postCreateUser";

app.post("/user", postCreateUser);
app.get("/user", getUsers);
