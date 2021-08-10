export type user = {
  id: string;
  password: string;
  email: string;
};

export interface AuthenticationData {
  id: string;
}

export type loginData = {
  email: string;
  password: string;
};
