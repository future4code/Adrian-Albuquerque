import { Request, Response } from "express";
import connection from "../connection";

const putCreateUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const { id, name, salary, birth_date, gender } = req.body;
    if (!id || !name || !salary || birth_date || !gender) {
      errorCode = 422;
      throw new Error("Inavalid body");
    }
    const date = new Date(birth_date);

    await connection.raw(`INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "${Math.random() + 1}"
        "${name}"
        "${salary}"
        "${date}"
        "${gender}"
    )`);

    res.status(201).send({ message: "user created" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
// Esse código não parece estar dos melhores..
export default putCreateUser;
