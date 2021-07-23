import { Request, Response } from "express";
import connection from "../connection";

const getUserByGender = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const gender = req.params.gender;

    if(!gender || gender !== "male" && gender !== "female") {
        errorCode = 422;
        throw new Error("invalid params")
    }

    const result = await connection.raw(
      `SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`
    );
    res.status(200).send(result[0]);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default getUserByGender;
