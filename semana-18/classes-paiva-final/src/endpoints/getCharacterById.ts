import { character } from './../types';

import { Request, Response } from "express";
import connection from "../connection";
import { Character } from "../entities/Character";

export default async function getCharacterById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {id} = req.params

    // const result: character[] = await connection.raw("SELECT * FROM character")
    // res.send(result[0])

    const [characterDb] = await connection("character")
      .where({id})

    console.log(characterDb)

    const character = new Character(characterDb.name, characterDb.gender, characterDb.description, characterDb.id)

    console.log(character)

    res.send(character);
  } catch (error) {
    res.status(500).send("Unexpected server error");
  }
}
