import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDabaBase";
import { EmailValidate } from "../services/emailValidate";
import { loginData } from "../types";

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;
  try {
    const { email, password } = req.body;
    const emailValidade = new EmailValidate().validadeEmail(email);
    if (!email || !password || emailValidade === false || password.length < 6) {
      errorCode = 422;
      throw new Error(
        "Campos inválidos, cheque se o email ou senha estão sendo enviados corretamente"
      );
    }
    const loginData: loginData = { email, password };
    const response = await UserDataBase.loginUser(loginData);
    res.status(200).send({ response });
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};
