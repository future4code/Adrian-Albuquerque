import app from "./app";
import postCreateUser from "./endpoints/postCreateUser";

app.post("/user", postCreateUser);