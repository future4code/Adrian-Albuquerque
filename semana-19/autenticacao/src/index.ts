import app from "./app";
import { IdGenerator } from "./services/IdGenerator";
import { createUser } from "./endpoints/createUser";


app.post("/create", createUser)

console.log(new IdGenerator().generateId())