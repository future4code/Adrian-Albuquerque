import express, { Express } from "express";
import knex from "knex";
import dotenv from "dotenv";
import cors from "cors";
import { AddressInfo } from "net";
import { signUp } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getFeed } from "./endpoints/getFeed";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.post("/users/signup", signUp);
app.post("/users/login", login);
app.get("/recipes/feed", getFeed);

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});