import express from "express";
import { UserController } from "../controller/user.controller";

export const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/signup", userController.signup);
