import { Request, Response } from "express";
import connection from "../connection";
import userValidade from "../functions/userValidade";

const getTaskById = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const id = req.params.id;

    if (!id) {
      errorCode = 422;
      throw new Error("invalid params");
    }

    const validade = await userValidade(id);
    if (validade) {
      errorCode = 404;
      throw new Error("User not found");
    }

    const result = await connection.raw(`
    SELECT * FROM TodoListUser INNER JOIN TodoListTask ON TodoListUser.id = ${id};
`);

    res.status(200).send(result[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default getTaskById;
