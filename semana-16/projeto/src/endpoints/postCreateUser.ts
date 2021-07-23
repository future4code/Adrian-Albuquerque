import { Request, Response } from "express";
import connection from "../connection";

const postCreateuser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const { name, nickname, email } = req.body;
    if (!name || !nickname || !email) {
      errorCode = 400;
      throw new Error("Invalid body");
    }

    await connection.raw(`INSERT INTO TodoListUser(name, nickname, email)
        VALUES("${name}" "${nickname}" "${email}"`);

    res.status(201).send("User created !");
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default postCreateuser;
