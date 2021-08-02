import { character } from './../types';
import { Request, Response } from "express"
import connection from "../connection"
import { Character } from '../entities/Character';
import { CharacterDatabase } from '../database/CharacterDatabase';

export default async function createCharacter(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, gender, description } = req.body

      const character = new Character(name, gender, description)

      // await connection("character")
      //    .insert(character)

      const database = new CharacterDatabase()
      await database.create(character)

      res.status(201).end()
   } catch (error) {
      res.status(500).end()
   }
}