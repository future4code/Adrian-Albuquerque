import { connection } from "../connection";

export const selectTaskById = async (
   id: string
): Promise<any> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM semana20_tasks AS tasks
        JOIN semana20_users AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)

   return result[0][0]
}
