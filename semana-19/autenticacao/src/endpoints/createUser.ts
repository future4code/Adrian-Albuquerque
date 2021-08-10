import { Request, Response } from "express";
import { User } from "../entities/User";
import { EmailValidate } from "../services/emailValidate";
import { UserDataBase } from "../data/UserDabaBase";
import { AuthenticationData, user } from "../types";
import { Authenticator } from "../services/Authenticator";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const { email, password } = req.body;
    const emailValidade = new EmailValidate().validadeEmail(email);
    if (!email || emailValidade === false) {
      throw new Error("Email não inserido ou inválido");
    }
    if (!password || password.length < 5) {
      throw new Error(
        "Senha não inserida ou inválida, digite uma senha superior a 5 caracteres"
      );
    }

    const newUser = new User(email, password);
    console.log(newUser.id);

    await UserDataBase.createUser(newUser);

    const auth = new Authenticator().generateToken(newUser.id);
    console.log(auth);
    res.status(201).send({ message: "usuario criado" });
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};
