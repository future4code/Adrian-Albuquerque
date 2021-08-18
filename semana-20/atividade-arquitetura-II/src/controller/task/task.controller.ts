import { Request, Response } from "express";
import { TaskApplication } from "../../application/task/task.application";
export class TaskController {
  public async createTask(req: Request, res: Response) {
    try {
      const { title, description, deadline, authorId } = req.body;

      await new TaskApplication().createTask({
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

      const task = await new TaskApplication().getTasksById(id);

      res.status(200).send(task);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }
}
