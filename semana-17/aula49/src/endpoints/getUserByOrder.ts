import { connection } from "../data/connection";
import { Request, Response } from "express";

const getUserByOrder = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const sort: string =
      req.query.sort === "name"
        ? "name"
        : req.query.sort === "type"
        ? "type"
        : "email";

    const order: string = req.query.order === "DESC" ? "DESC" : "ASC";

    const response = await connection.raw(`
    SELECT * FROM aula48_exercicio ORDER BY ${sort} ${order}
    
    `);

    res.status(200).send({ response });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default getUserByOrder;
