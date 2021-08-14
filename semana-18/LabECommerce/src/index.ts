import app from "./app";
import getProducts from "./endpoints/getProducts";
import getUsers from "./endpoints/getUsers";
import postCreateProduct from "./endpoints/postCreateProduct";
import postCreateUser from "./endpoints/postCreateUser";

app.post("/user", postCreateUser);
app.get("/user", getUsers);
app.post("/product", postCreateProduct);
app.get("/product", getProducts);
