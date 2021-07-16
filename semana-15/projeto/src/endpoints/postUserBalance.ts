import { Request, Response } from "express";
import { users } from "../database";

export const postUserBalance = (req: Request, res: Response): void => {
  let errorCode = 400;
  try {
    const { name, cpf } = req.body;

    if (!name || !cpf) {
      errorCode = 422;
      throw new Error("Invalid body");
    }
    const response = users.find(
      (user) => cpf === user.cpf && name === user.name
    );

    const balance = response?.balance;
    res.status(201).send({ balance });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
