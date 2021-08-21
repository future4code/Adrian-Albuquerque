import { AuthenticationData, Authenticator } from "../services/token.service";
import { authenticationData, user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public create = async (user: user): Promise<string> => {
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

    const test: AuthenticationData = { id };
    const token = await new Authenticator().generate(test);
    return token;
  };

  findUser = async (email: string): Promise<any> => {
    try {
      const findedUser = await BaseDatabase.connection("labook_users").where({
        email,
      });
     return findedUser
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
