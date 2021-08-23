export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
  role: roles;
};

export interface AuthenticationData {
  id: string;
  role: roles;
}

export enum roles {
  admin,
  usuario,
}
