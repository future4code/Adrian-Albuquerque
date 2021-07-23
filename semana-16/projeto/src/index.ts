import app from "./app";
import getAllUsers from "./endpoints/getAllUsers";
import getUserById from "./endpoints/getUserById";
import putCreateuser from "./endpoints/putCreateUser";
import putUpdateUserData from "./endpoints/putUpdateUserData";


app.put("/user", putCreateuser);
app.get("/users/:id", getUserById);
app.put("/user/edit/:id", putUpdateUserData);


app.get("/user/all", getAllUsers);
