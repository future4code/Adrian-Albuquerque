import { IdGenerator } from "../services/IdGenerator";

export class User extends IdGenerator {
  private email: string;
  public id: string = this.generateId();
  private password: string;

  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
    this.id;
  }
}
