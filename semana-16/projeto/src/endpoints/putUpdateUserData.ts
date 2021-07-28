import { Request, Response } from "express";
import connection from "../connection";

const putUpdateUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const id = Number(req.params.id);
    const { name, nickname } = req.body;
    if (!id || !name || !nickname || isNaN(id)) {
      errorCode = 422;
      throw new Error("invalid params or body");
    }

    const userValidade = await connection.raw(
      `SELECT * FROM TodoListUser WHERE id = ${id}`
    );

    if (userValidade[0].length === 0) {
      errorCode = 422;
      throw new Error("invalid user id");
    }
    await connection("TodoListUser").update({ name, nickname }).where({ id });

    res.status(201).send("updated");
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default putUpdateUserData;
