import { user } from "../../model/user";
import { connection } from "../connection";

export class UserDatabase {
  public async insertUser(user: user) {
    await connection("to_do_list_users").insert(user);
  }

  public async selectByEmail(email: string): Promise<user | undefined> {
    try {
      const result = await connection("to_do_list_users").where({ email });

      const { id, name, nickname, password, role } = result[0];
      const teste: user = {
        id,
        name,
        nickname,
        email: result[0].email,
        password,
        role,
      };
      return teste;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }

}
