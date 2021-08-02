import { connection } from "..";
import { User } from "../types/User";

export default async function selectUserByEmail(email: string): Promise<User> {
  console.count("passei"); //3
  const result: User[] = await connection
    .select("*")
    .from("aula48_exercicio")
    .where({ email });
  return result[0];
}
