import { Request, Response } from "express";
import connection from "../connection";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const result = await connection.raw(`SELECT * FROM TodoListUser`);
    res.status(200).send(result[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default getAllUsers;
