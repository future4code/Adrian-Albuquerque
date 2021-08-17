import { Request, Response } from "express";
import { loginBusiness } from "../../business/user/loginBusiness";
import { signupBusiness } from "../../business/user/signupBusiness";

export class UserController {
  async signup(req: Request, res: Response) {
    const { name, nickname, email, password, role } = req.body;

    const token: string = await signupBusiness({
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

      const token: string = await loginBusiness(email, password);

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
