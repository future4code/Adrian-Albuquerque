import { task } from "../../model/task";
import { connection } from "../connection";

export class TaskDatabase {
  public async insertTask(task: task) {
    const { id, title, description, deadline } = task;
    await connection("to_do_list_tasks").insert({
      id,
      title,
      description,
      deadline,
      author_id: task.authorId,
    });
  }

  public async selectTaskById(id: string): Promise<any> {
    const result = await connection.raw(`
    SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
    JOIN to_do_list_users AS users
    ON author_id = users.id
    WHERE tasks.id = '${id}';
`);
    return result[0][0];
  }
}
