import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(422)
        .send(
          "Insira corretamente as informações de 'name', 'email', 'password' e 'role'"
        );
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if (!user) {
      res.status(409).send("Esse email não está cadastrado!");
    }

    const hashManager = new HashManager();
    console.log("hora do hash");
    const passwordIsCorrect = hashManager.compare(password, user.password);
    console.log("F");

    if (!passwordIsCorrect) {
      res.status(401).send("Email ou senha incorretos.");
    }
    console.log("aaa");
    const authenticator = new Authenticator();
    const token = authenticator.generate({
      id: user.id,
    });

    res.status(200).send({ message: "Usuário logado com sucesso", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
