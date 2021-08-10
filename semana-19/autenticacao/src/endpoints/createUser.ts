import { Request, Response } from "express";
import { User } from "../entities/User";
import { EmailValidate } from "../services/emailValidate";
import { UserDataBase } from "../data/UserDabaBase";

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

    await UserDataBase.createUser(newUser);
    res.status(201).send({ message: "usuario criado" });
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};
