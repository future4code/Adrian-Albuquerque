import { Request, Response } from "express";
import { UserApplication } from "../application/user.application";
import { UserDatabase } from "../database/UserDatabase";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;
      console.log("ok");
      const user = await new UserApplication().signup(name, email, password);

      if (!user) {
        throw new Error("parametros invalidos");
      }

      await new UserDatabase().create(user);

      res.status(201).send({ message: "User created!" });
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).send({ message: err.message });
      }
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const token = await new UserApplication().login(email, password);
      res.status(200).send({ token });
    } catch (err) {
      if (err instanceof Error) {
        res.send({ message: err.message });
      }
    }
  };
}
