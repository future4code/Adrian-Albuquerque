import { Request, Response } from "express";
import connection from "../connection";

const getUserById = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      errorCode = 422;
      throw new Error("ID not a number");
    }
    const result = await connection.raw(`SELECT * FROM Actor WHERE ${id} = id`);
    res.status(200).send(result[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default getUserById;