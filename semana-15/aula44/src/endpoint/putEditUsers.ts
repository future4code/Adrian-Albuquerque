import { Request, Response } from "express";
import { userList } from "../userList";
import { User } from "../types";

export const putEditUsers = (req: Request, res: Response): void => {
  let errorCode = 400;
  try {
    const userId = Number(req.params.id);

    if (isNaN(userId)) {
      throw new Error("Invalid id");
    }

    const { name, type, email, age } = req.body;

    if (!name || !type || !email || !age) {
      errorCode = 422;
      throw new Error("Check your body !");
    }

    userList.forEach((user) => {
      if (user.id === userId) {
        user.name = name;
        user.age = age;
        user.email = email;
        user.type = type;
      }
    });

    res.status(201).send(userList);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
