import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import { HttpStatus } from "../entities/Error";
import User from "../entities/User";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const id = String(req.query.id) || undefined;
    console.log(id);
    const users: User | User[] = await UserDatabase.getUser(id);

    res.status(HttpStatus.OK).send(users);
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};

export default getUsers;
