import { Request, Response } from "express";

export class UserController {
  public signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body;

      const token = ""
      res.status(201).send({ message: "Usuario cadastrado !", token });
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };
}
