import { Request, Response } from "express";
import connection from "../connection";
import { AuthenticationData, user } from "../types";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password } = req.body;
    let role = req.body.role

    if (!name || !nickname || !email || !password) {
      res.statusCode = 422;
      throw new Error(
        "Preencha os campos 'name','nickname', 'password' e 'email'"
      );
    }

    const [user] = await connection("to_do_list_users").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    const id: string = new IdGenerator().generateId();

    const hm = new HashManager();
    const cypherText = await hm.hash(password);

    const newUser: user = { id, name, nickname, email, password: cypherText };

    await connection("to_do_list_users").insert(newUser);

    const auth = new Authenticator();
    const idAuth: AuthenticationData = {id: newUser.id}
    const token = auth.generateToken(idAuth);

    res.status(201).send({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ message: error.message });
    }
  }
}
