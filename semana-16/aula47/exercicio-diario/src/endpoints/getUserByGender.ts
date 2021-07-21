import { Request, Response } from "express";
import connection from "../connection";

const getUserByGender = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const gender = req.params.gender;
    console.log(gender);
    console.log(req.params)
    if(!gender || gender !== "male" && gender !== "female") {
        errorCode = 422;
        throw new Error("invalid params")
    }

    const result = await connection.raw(
      `SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`
    );
    const count = result[0][0].count;
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default getUserByGender;
