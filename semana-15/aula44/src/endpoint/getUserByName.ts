import { Request, Response } from "express";
import { User } from "../types";
import { userList } from "../userList";

export const getUserByName = (req: Request, res: Response): void => {
  let errorCode = 400;
  try {
    const username = req.params.name;
    console.log(username);
    if (!username) {
      errorCode = 404;
      throw new Error("Invalid Params");
    }
    const data: User | undefined = userList.find(
      (user) => user.name === username
    );

    res.status(200).send(data ? data : {});
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
