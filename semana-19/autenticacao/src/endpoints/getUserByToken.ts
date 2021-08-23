import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";

export const getUserByToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  let errorCode = 400;
  try {
    const { token } = req.params;
    if (!token) {
      errorCode = 404;
      throw new Error("Token inválido ou inexistente");
    }
    console.log(token)
    const result = new Authenticator().getTokenData(token);
    res.status(200).send(result);
  } catch (err) {
    if (err instanceof Error) {
      res.status(errorCode).send({ message: err.message });
    }
  }
};
