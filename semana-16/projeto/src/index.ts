import app from "./app";
import postCreateuser from "./endpoints/postCreateUser";

app.post("/create", postCreateuser);
