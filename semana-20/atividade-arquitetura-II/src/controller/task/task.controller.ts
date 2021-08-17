import { Request, Response } from "express";
import { createTaskBusiness } from "../../business/task/createTaskBusiness";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";

export class TaskController {
  public async createTask(req: Request, res: Response) {
    try {
      const { title, description, deadline, authorId } = req.body;

      await createTaskBusiness({
        title,
        description,
        deadline,
        authorId,
      });

      res.status(201).end();
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }

  public async getTaskById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const task = getTaskByIdBusiness(id);

      res.status(200).send(task);
      
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }
}
