import app from "./app";
import getAllUsers from "./endpoints/getAllUsers";
import postCreateuser from "./endpoints/postCreateUser";

app.get("/", getAllUsers)
app.post("/create", postCreateuser);
