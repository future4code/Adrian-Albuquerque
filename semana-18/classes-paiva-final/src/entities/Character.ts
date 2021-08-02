import { throws } from "assert";

export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export class Character {
  private id?: number;
  private name: string;
  private gender: GENDER;
  private description?: string;

  constructor(name: string, gender: GENDER, description: string, id?: number) {
    this.id = id
    this.name = name
    this.gender = gender
    this.description = description
  }
}
