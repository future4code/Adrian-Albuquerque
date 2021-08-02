import app from "./app";
import getUserByName from "./endpoints/getUserByName";
import getUserByOrder from "./endpoints/getUserByOrder";

app.get("/users", getUserByName);
app.get("/users/order", getUserByOrder)