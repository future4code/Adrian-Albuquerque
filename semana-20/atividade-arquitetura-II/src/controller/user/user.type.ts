import { USER_ROLES } from "../../model/user";

export type signupInputDTO = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: USER_ROLES;
};
