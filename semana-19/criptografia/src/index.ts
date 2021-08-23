import app from "./app";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { HashManager } from "./services/HashManager";

app.post("/user/login", login);
app.post("/user/signup", createUser);
app.put("/user/edit/", editUser);

const hashManager = new HashManager();

const criptografar = async (text: string): Promise<string> => {
  const cripto = await hashManager.hash(text);
  console.log(cripto);
  hashValidate(text, cripto);
  return cripto;
};

const hashValidate = async (text: string, hash: string) => {
  const compare = await hashManager.compare(text, hash);
  console.log(compare);
};

criptografar("OMGISWORKING");
