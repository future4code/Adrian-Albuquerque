import { users } from "../database";
import { User } from "../types";
import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response): void => {
  let errorCode = 422;
  try {
    res.status(200).send(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
