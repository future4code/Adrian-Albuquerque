import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../types";

const putCreateuser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const { name, nickname, email } = req.body;
    if (!name || !nickname || !email) {
      errorCode = 400;
      throw new Error("Invalid body");
    }

    const id = Date.now().toString();
    const newUser: User = { id, name, nickname, email };
    await connection("TodoListUser").insert(newUser);
    res.status(201).send("User created !");
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};


export default putCreateuser;
