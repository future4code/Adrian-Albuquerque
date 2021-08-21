import { UserDatabase } from "../database/UserDatabase";
import { HashManager } from "../services/hash.service";
import { IdGenerator } from "../services/idGenerator.service";
import { Authenticator } from "../services/token.service";
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

      const id: string = new IdGenerator().generate();

      const cypherPassword = new IdGenerator().generate();

      const user: user = {
        id,
        name,
        email,
        password: cypherPassword,
      };

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
