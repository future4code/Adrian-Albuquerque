import { connection } from "..";
import { SignupInput } from "../types/User";

export async function insertUser(
   id: string,
   input: SignupInput
) {

   const { name, email, password } = input

   await connection
      .insert({
         id,
         name,
         email,
         password
      }).into("users_aula48");
}

