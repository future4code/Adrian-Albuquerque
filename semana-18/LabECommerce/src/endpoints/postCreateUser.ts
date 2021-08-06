import { Request, Response } from "express";
import BaseDatabase from "../data/BaseDatabase";
import UserDatabase from "../data/UserDatabase";
import { HttpStatus } from "../entities/Error";
import User from "../entities/User";

async function postCreateUser(req: Request, res: Response): Promise<void> {
  let errorCode = 400;
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      errorCode = HttpStatus.FORBIDDEN;
      throw new Error("Invalid fields !");
    }
    const id = Date.now().toString();
    const newUser: User = new User(id, name, email, age);

    console.log(newUser);

    await UserDatabase.createUser(newUser);
    res.status(HttpStatus.CREATED).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export default postCreateUser;
