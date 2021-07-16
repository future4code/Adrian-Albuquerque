import { Request, Response } from "express";
import { userList } from "../userList";
import { User } from "../types";

export const getTypeUsers = (req: Request, res: Response): void => {
  let errorCode = 400;
  console.log(req.query);
  const params = req.query.type as string;
  try {
    if (!params) {
      errorCode = 422;
      throw new Error("invalid params");
    }

    const data: User[] | undefined = userList.filter(
      (user) => user.type === params
    );

    res.status(200).send(data);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
