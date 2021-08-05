import { Request, Response } from "express";
import { HttpStatus } from "../entities/Error";
import User from "../entities/User";

function postCreateUser(req: Request, res: Response) {
  let errorCode = 400;
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      errorCode = 403;
      throw new Error("Invalid fields !");
    }
    const newUser = new User(name, email, age);
    console.log(newUser)
    res.status(200).send( newUser)
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
}

export default postCreateUser;
