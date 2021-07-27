import app from "./app";
import getUserByName from "./endpoints/getUserByName";

app.get("/users", getUserByName);
