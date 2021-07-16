import { app } from "./app";
import { getTypeUsers } from "./endpoint/getTypeUsers";
import { getUsers } from "./endpoint/getUsers";
import { getUserByName } from "./endpoint/getUserByName";
import { postNewUser } from "./endpoint/postNewUser";
import { putEditUsers } from "./endpoint/putEditUsers";

app.get("/users", getUsers);
app.get("/users/type", getTypeUsers);
app.get("/users/search/:name", getUserByName);
app.post("/users", postNewUser);
app.put("/users/edit/:id", putEditUsers);
