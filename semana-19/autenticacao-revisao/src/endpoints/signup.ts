import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      res
        .status(422)
        .send(
          "Insira corretamente as informações de 'name', 'email', 'password' e 'role'"
        );
    }
    const emailValidade = await new UserDatabase().findUserByEmail(email);

    if (emailValidade) {
      res.status(409).send("Esse email já está cadastrado!");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const newUser = new User(id, name, email, hashPassword, role);

    await UserDatabase.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id, role });

    res.status(200).send({ message: "Usuário criado com sucesso", token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({ response: error.message });
    }
  }
}
