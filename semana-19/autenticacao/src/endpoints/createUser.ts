import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};

