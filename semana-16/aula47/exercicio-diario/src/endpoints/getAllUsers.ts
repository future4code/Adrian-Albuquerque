import { Request, Response } from "express";
import connection from "../connection";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const response = await connection.raw(`SELECT * FROM Actor`);
    res.status(200).send(response[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default getAllUsers;
