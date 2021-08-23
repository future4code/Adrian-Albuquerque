import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { loginData } from "../types";
import BaseDatabase from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
  constructor() {
    super();
  }

  public static createUser = async (newUser: User): Promise<void> => {
    console.log(newUser);
    await BaseDatabase.connection("aula55usuarios").insert(newUser);
  };

  public static getUser = async (id: any): Promise<User> => {
    console.log(id);
    if (id) {
      const result = await BaseDatabase.connection("aula55usuarios").where({
        id,
      });

      return result[0];
    } else {
      return await BaseDatabase.connection("aula55usuarios");
    }
  };

  public static loginUser = async (loginData: loginData) => {
    const { password, email } = loginData;
    const result:any = await BaseDatabase.connection("aula55usuarios").where({
      email,
      password,
    });
    return new Authenticator().generateToken(result.id);
  };
}
