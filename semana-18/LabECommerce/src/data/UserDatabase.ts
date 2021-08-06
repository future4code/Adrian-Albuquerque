import User from "../entities/User";
import BaseDatabase from "./BaseDatabase";

class UserDatabase extends BaseDatabase {
  constructor() {
    super();
  }

  public static createUser = async (newUser: User): Promise<void> => {
    console.log(newUser);
    await BaseDatabase.connection("labcommerce_user").insert(newUser);
  };

  public static getUser = async (id: any): Promise<User> => {
    console.log(id);
    if (id) {
      const result = await BaseDatabase.connection.raw(`
      SELECT * FROM labcommerce_user WHERE id = ${id}
      `);
      return result[0];
    } else {
      return await BaseDatabase.connection("labcommerce_user");
    }
  };
}

export default UserDatabase;
