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
    console.log(name, nickname, email);
    await connection.raw(`INSERT INTO TodoListUser(id, name, nickname, email)
        VALUES("46453" "${name}" "${nickname}" "${email}";`);

    res.status(201).send("User created !");
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default postCreateuser;
