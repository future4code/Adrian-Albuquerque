import { connection } from "..";

export default async function selectRecipesByUserId(
   userId: string,
   page: number
) {

   const offset:number = 5 * page

   const result = await connection.raw(`
      SELECT title, description, createdAt, r.user_id AS "author_id"
      FROM users_relation_aula48 AS ur
      JOIN recipes_aula48 AS r
      ON ur.user_to_follow_id = r.user_id
      WHERE ur.user_id = "${userId}"
      ORDER BY createdAt DESC
      LIMIT 5 
      OFFSET ${offset}
   `)

   return result[0]
}

