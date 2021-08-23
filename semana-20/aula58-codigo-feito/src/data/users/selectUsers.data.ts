import { connection } from "../connection";
import { user } from "../../types/user";

export const selectUsersData = async (): Promise<user | null | undefined> => {
  try {
    const result = await connection("semana20_users");

    if (!result[0]) {
      return null;
    }
    const { id, name, nickname, email, password, role } = result[0];
    const allUsers: user[] = [{ id, name, nickname, email, password, role }];

    return {
      id: id,
      name: name,
      nickname: nickname,
      email: email,
      password: password,
      role: role,
    };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};
