import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public create = async (user: user) => {
    try {
      console.log(user);
      const { id, name, email, password } = user;
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
      if (findedUser) {
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

  public findByEmail = async (email: string): Promise<boolean | undefined> => {
    try {
      const response = await BaseDatabase.connection("labook_users").where({
        email,
      });
      if (response) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
}
