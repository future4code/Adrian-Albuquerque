import app from "./app";
import postCreateuser from "./endpoints/postCreateUser";

app.post("/post", postCreateuser)

