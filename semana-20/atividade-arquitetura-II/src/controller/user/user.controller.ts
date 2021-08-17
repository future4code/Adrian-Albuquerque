import { Request, Response } from "express";
import { UserApplication } from "../../application/user/user.application";
export class UserController {
  async signup(req: Request, res: Response) {
    const { name, nickname, email, password, role } = req.body;

    const token: string = await new UserApplication().signup({
      name,
      nickname,
      email,
      password,
      role,
    });

    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token: string = await new UserApplication().login(email, password);

      res.send({
        message: "Usuário logado!",
        token,
      });
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }
}
