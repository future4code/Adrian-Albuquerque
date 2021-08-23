import { user, userData } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";
import { hash } from "../../services/hashManager";
import { compare } from "bcryptjs";
import { UserDatabase } from "../../database/user/user.database";

export class UserApplication {
  public async signup(userData: userData): Promise<string> {
    const { name, nickname, email, password, role } = userData;
    if (!name || !nickname || !email || !password || !role) {
      throw new Error(
        'Preencha os campos "name","nickname", "email" e "password"'
      );
    }

    const cypherPassword = await hash(userData.password);

    const newUser = {
      ...userData,
      password: cypherPassword,
      id: generateId(),
    };
    const userDatabase = new UserDatabase();
    await userDatabase.insertUser(newUser);

    const token: string = generateToken({
      id: newUser.id,
      role: userData.role,
    });

    return token;
  }

  public async login(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios");
    }

    const user = await new UserDatabase().selectByEmail(email);

    if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const passwordIsCorrect: boolean = await compare(password, user.password);

    if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });

    return token;
  }
}
