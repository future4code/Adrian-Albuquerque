import express from "express";
import { TaskController } from "../controller/task/task.controller";

export const taskRoute = express.Router();

const taskController = new TaskController();
taskRoute.post("/task", taskController.createTask);
taskRoute.get("/:id", taskController.getTaskById);
