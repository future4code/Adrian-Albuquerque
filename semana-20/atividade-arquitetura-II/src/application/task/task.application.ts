import { TaskDatabase } from "../../database/task/task.database";
import { taskData, taskReturn } from "../../model/task";
import { generateId } from "../../services/idGenerator";

export class TaskApplication {
  async createTask(taskData: taskData) {
    const { title, description, deadline, authorId } = taskData;
    if (!title || !description || !deadline || !authorId) {
      throw new Error(
        '"title", "description", "deadline" e "authorId" são obrigatórios'
      );
    }

    const id: string = generateId();

    await new TaskDatabase().insertTask({
      id,
      ...taskData,
    });
  }

  async getTasksById(id: string) {
    const result = await new TaskDatabase().selectTaskById(id);

    if (!result) {
      throw new Error("Tarefa não encontrada");
    }
    const { title, description, deadline, status, author_id, nickname } =
      result;

    const taskWithUserInfo: taskReturn = {
      id: result.id,
      title: title,
      description: description,
      deadline: deadline,
      status: status,
      authorId: author_id,
      authorNickname: nickname,
    };

    return taskWithUserInfo;
  }
}
