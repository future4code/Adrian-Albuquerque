import { IdGenerator } from "../services/IdGenerator";

export class User extends IdGenerator {
  private id = this.generateId();
  constructor(private email: string, private password: string) {
    super();
  }
}
