import { Request, Response } from "express";
import { allUsersApplication } from "../../business/users/allUsers.application";

export async function allUsersController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { authorization } = req.headers;

    const allUsers = await allUsersApplication(authorization);
    res.status(200).send(allUsers);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).send({ message: err.message });
    }
  }
}
