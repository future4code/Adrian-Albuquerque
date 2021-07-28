import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import transporter from "../services/mailTransporter";
import { user } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, cep } = req.body;

    if (!name || !nickname || !email || !cep) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email' e 'cep' são obrigatórios";
    }

    const id: string = Date.now().toString();

    const address = await getAddressInfo(cep);

    const newUser: user = { id, name, nickname, email, address };

    await connection("aula51_users").insert(newUser);

    // const mailInfo = await transporter.sendMail({
    //   from: `<${process.env.NODEMAILER_USER}>`,
    //   to: email,
    //   subject: "aaaaaaaaaaaaaaaa",
    //   html: `
    //   <p>Clique no botão abaixo</p>
    //   <button>Verificar/button>
    //   `,
    //   text: `
    //   <span>Clique no link</span>
    //   www.aaaa.com
    //   `,
    // });

    res.status(201).send("Usuário criado!");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
}
