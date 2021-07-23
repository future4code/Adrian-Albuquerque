import { Request, Response } from "express";
import connection from "../connection";
import { Task } from "../types";
import userValidade from "../functions/userValidade";

const putCreateTask = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const { title, description, limitDate, creatorUserId, taskStatus } =
      req.body;

    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 422;
      throw new Error("invalid body, check your fields");
    }

    const validation = await userValidade(creatorUserId);

    if (validation) {
      errorCode = 404;
      throw new Error("user not found");
    }

    const id = Date.now().toString();
    const splitDate = limitDate.split("/");
    const date = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;

    const status = taskStatus ? taskStatus : "to_do";

    const task: Task = {
      id,
      title,
      description,
      limit_date: date,
      status,
      creator_user_id: creatorUserId,
    };

    await connection("TodoListTask").insert(task);

    res.status(201).send("task created!");
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
export default putCreateTask;
