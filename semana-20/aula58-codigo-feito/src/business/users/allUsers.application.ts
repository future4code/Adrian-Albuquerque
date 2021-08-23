import { Request, Response } from "express";
import { selectUsersData } from "../../data/users/selectUsers.data";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { user } from "../../types/user";

export async function allUsersApplication(authorization: any): Promise<any> {
  try {
    if (!authorization) {
      throw new Error("Autorizacao não inserida");
    }

    return await selectUsersData();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
