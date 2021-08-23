import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(422).send({
        message:
          "Insira corretamente as informações de 'name', 'email', 'password'",
      });
    }
    if (password.length < 6) {
      res
        .status(403)
        .send({ message: "Insira uma senha superior a 6 caracteres" });
    }

    const emailValidade = await new UserDatabase().findUserByEmail(email);

    if (emailValidade) {
      res.status(409).send("Esse email já está cadastrado!");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashPassword = await new HashManager().hash(password);

    const newUser = new User(id, name, email, hashPassword);

    await UserDatabase.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id });

    res.status(200).send({ message: "Usuário criado com sucesso", token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ response: error.message });
    }
  }
}
