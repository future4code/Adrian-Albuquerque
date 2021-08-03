import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { RecipeDatabase } from "./data/RecipeDatabase";
import { NotFoundError } from "./error/CustomError";

const rd = new RecipeDatabase();
const rd2 = new RecipeDatabase();

//exemplo de instâncias concorrentes
//const ud = new UserDatabase();
//const id = new IngredientDatabase();

console.log(rd);
try {
    throw new NotFoundError();
} catch (error) {
    console.log(error);
}
app.get("/recipes", getAllRecipes)


class Dog {

    name: string;
    weight: number;

    constructor(name: string, weight: number){
        this.name = name;
        this.weight = weight;
    }
}



interface shakyAnimal {
    shakeSpeed: number;
}

interface droolyAnimal {
    droolAmount: number
}

class Pinscher extends Dog implements shakyAnimal{
    public shakeSpeed: number = 5;
    public droolAmount: number = 2;
    constructor(name: string, weight: number){
        super(name, weight);
    }
}

const rex = new Pinscher("rex", 6);
const odin = new Dog("odin", 5);
console.log(rex.shakeSpeed);

const pinscherArray: Pinscher[] = [rex];
const dogArray: Dog[] = [rex, odin];
const shakyAnimalArray: shakyAnimal[] = [rex];