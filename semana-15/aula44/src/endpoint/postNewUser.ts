import { Request, Response } from "express";
import { User } from "../types";
import { userList } from "../userList";

export const postNewUser = (req: Request, res: Response): void => {
  let errorCode = 400;
  try {
    const { id, name, email, type, age } = req.body;
    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Check the body fields");
    }
    const data: User = { id, name, email, type, age };
    userList.push(data);
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};