import { Request, Response } from "express";
import { users } from "../database";

export const putUserBalance = (req: Request, res: Response): void => {
  let errorCode = 400;
  try {
    const { name, cpf, deposit } = req.body;
    Number(deposit);

    if (!name || !cpf || !deposit || isNaN(deposit)) {
      errorCode = 422;
      throw new Error("Invalid body");
    }
    const response: any = users.find(
      (user) => cpf === user.cpf && name === user.name
    );

    response.balance += Number(deposit);
    res.status(201).send({ response: response.balance });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
