// import { userType } from "../../types";
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
}

export default UserDatabase;
