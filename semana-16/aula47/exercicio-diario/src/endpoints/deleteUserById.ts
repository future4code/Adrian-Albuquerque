import { Request, Response } from "express";
import connection from "../connection";
import validateUserId from "../functions/validadeUserId";

const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      errorCode = 422;
      throw new Error("Invalid id");
    }
    const userValidate = await validateUserId(id);
    if (userValidate) {
      errorCode = 404;
      throw new Error("User not found");
    }

    await connection("Actor").delete().where("id", id);
    res.status(200).send({message: "user deleted successfully"})
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default deleteUserById;
