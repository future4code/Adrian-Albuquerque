import { connection } from "../data/connection";
import { Request, Response } from "express";

const getUserByName = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  const name = req.query.name || "%";
  try {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio WHERE name LIKE '%${name}%' ;
    `);

    res.status(200).send(result[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default getUserByName;
