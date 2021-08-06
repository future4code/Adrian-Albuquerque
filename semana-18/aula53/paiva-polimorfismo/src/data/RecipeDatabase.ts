import { BaseDatabase } from "./BaseDatabase";
import { toRecipe } from "../endpoints/getAllRecipes";

export class RecipeDatabase extends BaseDatabase {


    constructor(){
        super()
    }

    public getRecipes = async (
        title: string,
        sort: string,
        order: string,
        size: number,
        offset: number
    ) =>{
        //com atributos estaticos, morre o this. Usamos
        //o nome da classe toda
        const result = await BaseDatabase.connection("aula49_recipes")
         .where("title", "LIKE", `%${title}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)
   
      const recipes = result.map(toRecipe)
      return recipes;
    }

}