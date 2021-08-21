import { UserDatabase } from "../database/UserDatabase";
import { HashManager } from "../services/hash.service";
import { IdGenerator } from "../services/idGenerator.service";
import { AuthenticationData, Authenticator } from "../services/token.service";
import * as EmailValidator from "email-validator";

import { user } from "../types";

export class UserApplication {
  public signup = async (
    name: any,
    email: any,
    password: any
  ): Promise<user | undefined> => {
    try {
      if (!name || !email || !password) {
        throw new Error("nome, email ou senha não foram fornecidos");
      }
      const isValidEmail = EmailValidator.validate(email);

      if (!isValidEmail) {
        throw new Error("formato de email inválido");
      }

      const id: string = new IdGenerator().generate();

      const cypherPassword = new IdGenerator().generate();

      const user: user = {
        id,
        name,
        email,
        password: cypherPassword,
      };
      // const tokenID: AuthenticationData = { id };

      // const token = await new Authenticator().generate(tokenID);
      // return
      return user;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };

  public login = async (
    email: any,
    password: any
  ): Promise<string | undefined> => {
    try {
      if (!email || !password) {
        throw new Error("email ou senhas indefinidos");
      }
      const databaseUser: any = await new UserDatabase().findByEmail(
        email as string
      );
      const test = await new HashManager().compare(
        password,
        databaseUser[0].password
      );

      if (!test) {
        throw new Error("senha invalida");
      }
      const token = new Authenticator().generate(databaseUser[0].id);
      return token;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
}
