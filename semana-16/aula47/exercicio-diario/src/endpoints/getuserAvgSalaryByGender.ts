import e, { Request, Response } from "express";
import connection from "../connection";

const getUserAvgSalaryByGender = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const gender = req.query.gender;
    if (!gender || gender !== "male" && gender !== "female") {
      errorCode = 404;
      throw new Error("Gender not found");
    }
    const avgSalary = await connection.raw(
      `SELECT AVG(salary) FROM Actor WHERE gender = "${gender}"`
    );

    res.status(200).send(avgSalary[0])
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};

export default getUserAvgSalaryByGender;
