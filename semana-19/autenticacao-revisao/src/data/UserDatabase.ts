import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export  class UserDatabase extends BaseDatabase {
  public static async createUser(user: User) {
    try {
      await BaseDatabase.connection("lbn_user").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.geRole(),
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findUserByEmail(email: string): Promise<any> {
    try {
      console.log(email)
      const user = await BaseDatabase.connection("lbn_user").where({ email });
      return user[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAllUsers(): Promise<User[]> {
    try {
      const users = await BaseDatabase.connection("lbn_user").select(
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
}
