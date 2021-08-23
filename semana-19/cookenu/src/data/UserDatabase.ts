import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public static async createUser(user: User) {
    try {
      await BaseDatabase.connection("cookenu_user").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const emailValidate = await BaseDatabase.connection("cookenu_user").where(
        {
          email,
        }
      );
      return emailValidate[0];
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getAllUsers(): Promise<User[]> {
    try {
      const users = await BaseDatabase.connection("cookenu_user").select(
        "id",
        "name",
        "email",
        "role"
      );
      return users.map((user) => User.toUserModel(user));
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserById(id: string): Promise<User[]> {
    try {
      const user = await BaseDatabase.connection("cookenu_user")
        .select("id", "name", "email")
        .where({ id });
      return user;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  }
}
