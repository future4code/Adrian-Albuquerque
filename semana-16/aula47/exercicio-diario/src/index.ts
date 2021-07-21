import app from "./app";
import getUserByGender from "./endpoints/getUserByGender";
import getUserById from "./endpoints/getUserById";
import getUserByName from "./endpoints/getUserByName";
import putUpdateUserDataById from "./endpoints/putUpdateUserDataById";

app.get("/:id", getUserById);
app.get("/users/:name", getUserByName);
app.get("/users/filter/:gender", getUserByGender);
app.put("/users/update/:id", putUpdateUserDataById);
