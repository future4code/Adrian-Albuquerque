import { Request, Response } from "express";
import connection from "../connection";

const getUserByName = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name = req.params.name;
    const result = await connection.raw(
      `SELECT * FROM Actor WHERE name = "${name}"`
    );
    if (!result) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send(result[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default getUserByName;