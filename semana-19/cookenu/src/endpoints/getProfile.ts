import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getProfile(req: Request, res: Response): Promise<void> {
  try {
    const { Authorization } = req.body;

    if (!Authorization) {
      res.status(403).send({ message: "Autorização invalida" });
    }

    const userIdDescrypt = new Authenticator().getTokenData(Authorization);
    const userInfos = await new UserDatabase().findUserById(userIdDescrypt.id);
    
    res.status(200).send(userInfos);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({ message: err.message });
    }
  }
}
