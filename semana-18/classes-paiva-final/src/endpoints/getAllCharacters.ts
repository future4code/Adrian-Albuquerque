import { Request, Response } from "express";
import connection from "../connection";
import { CharacterDatabase } from "../database/CharacterDatabase";
import { Character } from "../entities/Character";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, orderBy, orderType, page } = req.query;

    // const result: character[] = await connection.raw("SELECT * FROM character")
    // res.send(result[0])

    const resultsPerPage = 5;

    // página 1 -> offset 0 === 5 * 0
    // página 2 -> offset 5 === 5 * 1
    // página 3 -> offset 10 === 5 * 2

    const offset = resultsPerPage * (Number(page) - 1);

    debugger;

    //  const charactersDb = await connection("character")
    //    .where("name", "LIKE", `%${name}%`)
    //    .orderBy((orderBy as string) || "name", orderType as string)
    //    .offset(offset);

    //  const characters = charactersDb.map(
    //    (character) =>
    //      new Character(character.name, character.gender, character.description, character.id)
    //  );

    const database = new CharacterDatabase();

    const characters = await database.getAll(
      name as string,
      offset,
      orderBy as string,
      orderType as string
    );

    console.log("Entity: ", characters);

    res.send(characters);
  } catch (error) {
    res.status(500).send("Unexpected server error");
  }
}
