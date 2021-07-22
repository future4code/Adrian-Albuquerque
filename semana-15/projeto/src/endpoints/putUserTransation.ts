import { Request, Response } from "express";
import { users } from "../database";
import { User } from "../types";

export const putUserTransation = (req: Request, res: Response): void => {
  let errorCode = 400;
  try {
    const { senderName, senderCPF, receiverName, receiverCPF, value } =
      req.body;

    if (
      !senderName ||
      !senderCPF ||
      !receiverName ||
      !receiverCPF ||
      !value ||
      isNaN(value)
    ) {
      errorCode = 422;
      throw new Error("Invalid body, check your fields");
    }

    const response: any = users.find((sender) => {
      if (sender.name === senderName && sender.cpf === senderCPF) {
        if (sender.balance > Number(value)) {
          sender.balance - Number(value);
          users.find((receiver) => {
            if (
              receiver.cpf === receiverCPF &&
              receiverName === receiver.name
            ) {
              return (receiver.balance += value);
            }
          });
        } else {
          errorCode = 401;
          throw new Error("transfer value greater than balance");
        }
      }
    });

    // const teste = users.concat(response, responseReceiver)
    users.push(response);
    res.status(200).send({ response: "transfer successful" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
