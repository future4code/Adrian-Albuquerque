import { app } from "./app"
import { getTaskById } from './endpoints/getTaskById'
import { login } from './endpoints/login'
import { signupController } from "./controller/users/signupController"
import { createTaskController } from "./controller/tasks/createTaskController"

app.post('/users/signup', signupController)
app.post('/users/login', login)

app.post('/tasks', createTaskController)
app.get('/tasks/:id', getTaskById)
