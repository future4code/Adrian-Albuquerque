import { IdGenerator } from "../services/IdGenerator";

export class User extends IdGenerator {
  private id = this.generateId();
  constructor(private email: string, private password: string) {
    super();
  }
  getId = (): string => {
    return this.id;
  };
  getEmail = (): string => {
    return this.email;
  };
  getPassword = (): string => {
    return this.password;
  };
}
