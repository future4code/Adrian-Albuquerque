import { Character } from './../entities/Character';
import connection from "../connection";

export class CharacterDatabase {
  private connection: any

  constructor() {
    this.connection = connection("character")
  }

  public async create(character: Character) {
    await this.connection
      .insert(character)
  }

  public async getAll(name: string, offset: number, orderBy?: string, orderType?: string) {
    const charactersDb = await this.connection
      .where("name", "LIKE", `%${name}%`)
      .orderBy((orderBy as string) || "name", orderType as string)
      .offset(offset);

    const characters = charactersDb.map(
      (character: any) =>
        new Character(character.name, character.gender, character.description, character.id)
    );

    return characters
  }
}