import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public create = async (user: user): Promise<void> => {
    try {
      const { id, name, email, password } = user;

      const emailValidate: boolean = await this.findByEmail(email);
      if (emailValidate) {
        throw new Error("email já cadastrado");
      }

      await BaseDatabase.connection("labook_users").insert({
        id,
        name,
        email,
        password,
      });
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };

  findByName = async (name: string): Promise<any> => {
    try {
      const findedUser = await BaseDatabase.connection("labook_users").where({
        name,
      });
      if (!findedUser[0]) {
        return findedUser[0];
      } else {
        return [];
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };

  public findByEmail = async (email: string): Promise<boolean> => {
    console.log("test");
    const response = await BaseDatabase.connection("labook_users").where({
      email,
    });

    if (response[0]) {
      return true;
    } else {
      return false;
    }
  };
}
