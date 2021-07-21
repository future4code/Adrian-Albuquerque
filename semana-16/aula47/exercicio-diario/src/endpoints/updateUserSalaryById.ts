import { Request, Response } from "express";
import connection from "../connection";

const updateUserSalaryId = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const salary = Number(req.query.salary);
    const id = Number(req.params.id);
    if (!salary || !id || isNaN(salary) || isNaN(id)) {
      errorCode = 422;
      throw new Error("Invalid Querry or Id");
    }
    const userValidate = await connection.raw(
      `SELECT * FROM Actor WHERE ${id} = id`
    );
    if (!userValidate[0].length) {
      errorCode = 404;
      throw new Error("User not found");
    }
    await connection("Actor").update({ salary }).where("id", id);
    res.status(201).send({ message: "user updated" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default updateUserSalaryId;
