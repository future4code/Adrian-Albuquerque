import { Request, Response } from "express";
import { users } from "../database";
import { dateNow } from "../functions/dateNow";
import { Statement, User } from "../types";

export const putUserPay = (req: Request, res: Response): void => {
  let errorCode = 400;
  const actualDate = dateNow();
  try {
    const { value, description, cpf, name, date } = req.body;

    if (!value || !description || !name || !cpf) {
      errorCode = 422;
      throw new Error("Invalid body");
    }

    const response: any = users.find((user) => {
      if (cpf === user.cpf && name === user.name) {
        user.statement.forEach((balanceInfos) => {
          if (balanceInfos.value > value) {
            errorCode = 401;
            throw new Error("You no have money");
          }
          balanceInfos.value - value;
          balanceInfos.date = date ? date : actualDate;
          balanceInfos.description = description;
        });
      }
      {
        return {};
      }
    });
    users.push(response);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
