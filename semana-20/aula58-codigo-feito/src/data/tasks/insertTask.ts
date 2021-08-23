import { task } from "../../types/task"
import { connection } from "../connection"


export const insertTask = async (
   task: task
) => {
   await connection('semana20_tasks')
      .insert({
         id: task.id,
         title: task.title,
         description: task.description,
         deadline: task.deadline,
         author_id: task.authorId
      })
}
