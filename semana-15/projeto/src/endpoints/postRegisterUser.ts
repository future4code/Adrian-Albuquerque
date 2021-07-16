import { Request, Response } from "express";
import { Statement, User } from "../types";
import { users } from "../database";
import { calculateAge } from "../functions/calculateAge";
export const postRegisterUser = (req: Request, res: Response): void => {
  let errorCode: number = 400;
  const registerDate = new Date();
  const registerDay = registerDate.getDate();
  const registerMonth = registerDate.getMonth();
  const registerYear = registerDate.getFullYear();
  const registerUser = `${registerDay}/${registerMonth}/${registerYear}`;
  try {
    const { name, cpf, date } = req.body;

    if (!name || !cpf || !date || isNaN(date) || date.length !== 8) {
      const registeredUser: User | undefined = users.find(
        (user) => user.cpf === cpf
      );

      if (registeredUser) {
        errorCode = 401;
        throw new Error("User registrated");
      }

      errorCode = 422;
      throw new Error("Invalid body");
    }

    const day = date.slice(0, 2);
    const month = date.slice(2, 4);
    const year = date.slice(-4);
    const age = calculateAge(day, month, year);

    if (age < 18) {
      errorCode = 422;
      throw new Error("Underage user");
    }
    const statement: Statement = [
      { value: 0, data: registerUser, description: "" },
    ];
    const data: User = { name, cpf, date, balance: 0, statement };
    res.status(201).send({ message: "User created successfully" });

    users.push(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(errorCode).send({ message: error.message });
    }
  }
};
