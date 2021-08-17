import express from "express";
import { UserController } from "../controller/user/user.controller";

export const userRouter = express.Router()

const userController = new UserController();
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login)
