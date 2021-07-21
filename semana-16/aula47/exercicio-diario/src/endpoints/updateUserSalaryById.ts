import { Request, Response } from "express";
import connection from "../connection";
import validateUserId from "../functions/validadeUserId";

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
    const userValidate = validateUserId(id);
    if (!userValidate) {
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
