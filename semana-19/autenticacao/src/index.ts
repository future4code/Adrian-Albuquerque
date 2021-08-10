import app from "./app";
import { IdGenerator } from "./services/IdGenerator";
import * as EmailValidator from "email-validator";
import { createUser } from "./endpoints/createUser";


app.post("/create", createUser)