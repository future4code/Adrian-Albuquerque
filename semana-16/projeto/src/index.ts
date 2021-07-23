import app from "./app";
import getAllUsers from "./endpoints/getAllUsers";
import getUserById from "./endpoints/getUserById";
import postCreateuser from "./endpoints/postCreateUser";

app.get("/", getAllUsers);
app.get("/users/:id", getUserById);
app.post("/create", postCreateuser);
