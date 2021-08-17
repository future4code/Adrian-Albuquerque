import { app } from "./app";
import { userRouter } from "./routes/user.router";

app.get("/signup", userRouter)