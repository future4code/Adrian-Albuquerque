import app from "./app";
import getUserByGender from "./endpoints/getUserByGender";
import getUserById from "./endpoints/getUserById";
import getUserByName from "./endpoints/getUserByName";
import updateUserSalaryId from "./endpoints/updateUserSalaryById";

app.get("/:id", getUserById);
app.get("/users/:name", getUserByName);
app.get("/users/filter/:gender", getUserByGender);
app.put("/users/update/:id", updateUserSalaryId);
