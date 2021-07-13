type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// R) tsc ./ex04.ts

// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// R)  tsc ./src/ex04.ts, Unida diferença seria caminhar até o arquivo usando os comandos de diretorio.

// c) ) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// R) Sim, comfigurando o tsconfig.json e executando o npx tsc

