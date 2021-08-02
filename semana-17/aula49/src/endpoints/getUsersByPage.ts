import { Request, Response } from "express";
import { connection } from "../data/connection";

const getUserByPage = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const page = Number(req.params.page);

    const response = await connection("aula48_exercicio")
      .select("*")
      .limit(5)
      .offset(5 * (page - 1));
    res.status(200).send({ response });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default getUserByPage;
