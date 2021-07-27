import { connection } from "..";

export default async function selectUserByEmail(email: string) {
   const result: any = connection
      .select("*")
      .from("users_aula48")
      .where({ email })

   return result[0]
}

