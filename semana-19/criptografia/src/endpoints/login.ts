import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Por favor, preencha os campos 'email' e 'password'");
    }

    const [user] = await connection("to_do_list_users").where({ email });

    if (!user) {
      res.statusCode = 400;
      throw new Error("Email não existe!");
    }

    const hm = new HashManager();
    const hashCompare = await hm.compare(password, user.password);

    if (!hashCompare) {
      throw new Error("Credenciais inválidas");
    }

    //depois da transação com o banco
    const auth = new Authenticator();
    const token = auth.generateToken({ id: user.id });

    res.status(200).send({ token });
  } catch (error) {
    if (error instanceof Error) {
      res.send({ message: error.message });
    }
  }
}
