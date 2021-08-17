import { BaseDatabase } from "./base.database";
import { connection } from "./connection";

export class UserDatabase extends BaseDatabase {
  public create = async (id: string, name: string, email: string, password: string)  => {
      try {
        await connection("tabela").insert({ id, name, email, password });
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
      }
    };
}
