import { Request, Response } from "express";
import { userList } from "../userList";

export const getUsers = (req: Request, res: Response): void => {
    res.send(userList)
};

