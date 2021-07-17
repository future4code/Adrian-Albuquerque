import { app } from "./app";
import { getUsers } from "./endpoints/getUsers";
import { postRegisterUser } from "./endpoints/postRegisterUser";
import { postUserBalance } from "./endpoints/postUserBalance";
import { putUserBalance } from "./endpoints/putUserBalance";
import { putUserPay } from "./endpoints/putUserPay";

app.post("/register", postRegisterUser);
app.get("/users", getUsers);
app.post("/users/balance", postUserBalance);
app.put("/users/balance", putUserBalance);
app.put("/users/pay", putUserPay);
