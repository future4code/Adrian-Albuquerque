import app from "./app";
import deleteUserById from "./endpoints/deleteUserById";
import getAllUsers from "./endpoints/getAllUsers";
import getUserAvgSalaryByGender from "./endpoints/getuserAvgSalaryByGender";
import getUserByGender from "./endpoints/getUserByGender";
import getUserById from "./endpoints/getUserById";
import getUserByName from "./endpoints/getUserByName";
import putCreateUser from "./endpoints/putCreateUser";
import updateUserSalaryId from "./endpoints/updateUserSalaryById";

app.get("/:id", getUserById);
app.get("/users/:name", getUserByName);
app.get("/list/users", getAllUsers);
app.get("/users/filter/:gender", getUserByGender);
app.put("/users/update/:id", updateUserSalaryId);
app.delete("/users/delete/:id", deleteUserById);
app.get("/users/average/salary", getUserAvgSalaryByGender);
app.put("/actor", putCreateUser);
