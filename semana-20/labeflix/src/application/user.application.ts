import { UserDatabase } from "../data/user.database";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserApplication {
  public signup = (name: any, email: any, password: any) => {
    try {
      if (!name || !email || !password) {
        throw new Error("nome, email ou senha inválidos");
      }
      if (password.length < 6) {
        throw new Error("Senha deve possuir mais de 6 caracteres");
      }
      //   const idGenerator = new IdGenerator();
      const id = new IdGenerator().generate();
      const hash = new HashManager().hash(password);

      const userDatabase = new UserDatabase().create(id, name, email, password);

    //   const token = new UserDatabase
      //validate email
      //id
      // hash
      //dababase
      //return token
    } catch (err) {
      if (err instanceof Error) {
      }
    }
  };
}
